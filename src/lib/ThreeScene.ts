import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import type { SceneNode, ObjectNode } from "./interface2";
import { GLTFExporter } from "three/examples/jsm/exporters/GLTFExporter";
import JSzip from "jszip";
import * as saveAs from "file-saver";

export default class ThreeScene {
  scene: THREE.Scene;

  camera: THREE.PerspectiveCamera;
  renderer: THREE.WebGLRenderer;
  model: THREE.Group;

  controls: OrbitControls;
  constructor() {
    console.log("THREE");
    this.scene = new THREE.Scene();

    let light = new THREE.AmbientLight(0xffffff, 3.0);
    this.scene.add(light);

    let light2 = new THREE.DirectionalLight(0xffffff, 2.0);
    this.scene.add(light2);

    this.camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    this.camera.position.y = 10;
    this.camera.position.z = -1;

    // Create a renderer with Antialiasing
    this.renderer = new THREE.WebGLRenderer({ antialias: true });

    // Configure renderer clear color
    this.renderer.setClearColor("#000000");

    let container = document.getElementById("container");

    const rect = container?.getBoundingClientRect();
    // Configure renderer size
    this.renderer.setSize(rect?.width as number, rect?.height as number);

    // Append Renderer to DOM

    // document.body.appendChild(this.renderer.domElement);
    container?.appendChild(this.renderer.domElement);
    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.render();

    window.addEventListener("resize", this.windowResized, false);
  }

  render = () => {
    requestAnimationFrame(this.render);
    this.controls.update();
    // Render the scene
    this.renderer.render(this.scene, this.camera);
  };

  private windowResized = () => {
    let container = document.getElementById("container");

    const rect = container?.getBoundingClientRect();

    this.camera.aspect = (rect?.width as number) / (rect?.height as number);
    this.renderer.setSize(rect?.width as number, rect?.height as number);
  };

  private createFileMap(files: any) {
    let map: any = {};
    for (let i = 0; i < files.length; i++) {
      let file = files[i];
      map[files.name] = file;
    }
    return map;
  }

  public loadModel(files: any) {
    let filesMap = this.createFileMap(files);

    let manager = new THREE.LoadingManager();
    manager.setURLModifier((url) => {
      let file = filesMap[url];
      if (file) {
        console.log("Loading", url);
      }
      return URL.createObjectURL(file);
    });

    let file = files[0];

    let filename = file.name;

    let reader = new FileReader();
    reader.addEventListener("progress", function (event) {
      let progress = Math.floor((event.loaded / event.total) * 100) + "%";
      console.log("Loading", filename, progress);
    });

    reader.addEventListener(
      "load",
      (event) => {
        let contents = event.target?.result;
        let loader = new GLTFLoader();

        loader.parse(contents as ArrayBuffer, "", (result) => {
          let scene = result.scene;
          //   scene.name = filename;
          this.scene.add(scene);
          this.model = scene;

          this.extractModel();
        });
      },
      false
    );
    reader.readAsArrayBuffer(file);
  }

  extractModel() {
    let rootJson: SceneNode = {
      name: this.model.name,
      backgrounds: [],
      machines: [],
    };

    let exportModel: any[] = [];
    this.model.children.forEach((children) => {
      console.log(children.name);

      if (children.name == "Wall") {
        exportModel.push(children);
        let mat = [];
        children.updateMatrix();
        children.matrix.toArray(mat);

        let node: ObjectNode = {
          id: children.name,
          parent: children.parent ? children.parent.name : null,
          type: 1,
          tag: [],
          matrix4: mat,
          path: "models/" + children.name + ".glb",
          children: [],
        };
        rootJson.backgrounds = [node];
      } else if (children.type == "Object3D") {
        let mat = [];
        children.updateMatrix();
        children.matrix.toArray(mat);

        let node: ObjectNode = {
          id: children.name,
          parent: children.parent ? children.parent.name : null,
          type: 4,
          tag: [],
          matrix4: mat,
          children: [],
        };

        for (let i = 0; i < children.children.length; i++) {
          let child = children.children[i];
          let mat = [];
          child.updateMatrix();
          child.matrix.toArray(mat);
          exportModel.push(child);

          let childnode: ObjectNode = {
            id: child.name,
            parent: child.parent ? child.parent.name : null,
            type: 4,
            tag: [],
            matrix4: mat,
            path: "models/" + child.name + ".glb",
            children: [],
          };

          node.children.push(childnode);
        }

        rootJson.machines.push(node);
      } else {
        exportModel.push(children);
        let mat = [];
        children.updateMatrix();
        children.matrix.toArray(mat);
        let node: ObjectNode = {
          id: children.name,
          parent: children.parent ? children.parent.name : null,
          type: 4,
          tag: [],
          matrix4: mat,
          path: "models/" + children.name + ".glb",
          children: [],
        };
        rootJson.machines.push(node);
      }
    });

    console.log(rootJson);
    const exporter = new GLTFExporter();
    const zip = new JSzip();

    zip.file("modelTiles.json", JSON.stringify(rootJson));

    console.log(exportModel);
    for (let i = 0; i < exportModel.length; i++) {
      let scene = new THREE.Scene();

      scene.add(exportModel[i]);
      exportModel[i].position.copy(new THREE.Vector3());
      exportModel[i].quaternion.copy(new THREE.Quaternion());
      exportModel[i].scale.copy(new THREE.Vector3(1, 1, 1));

      exporter.parse(
        scene,
        (gltf) => {
          let name = exportModel[i].name;

          zip.file(`models/${name}.glb`, JSON.stringify(gltf));
          if (i == exportModel.length - 1) {
            zip.generateAsync({ type: "blob" }).then((content) => {
              saveAs(content, `model.zip`);
            });
          }
        },
        (err) => {
          console.log(err);
        }
      );
    }
  }
}
