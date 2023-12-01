import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import type { ObjectNode, SceneNode } from "../interface/SceneNode";
import { GLTFExporter } from "three/examples/jsm/exporters/GLTFExporter";

import ZipTool from "./ZipTools";

function _toBlob(data: any, isArrayBuffer: boolean = true) {
  return new Blob([data], {
    type: isArrayBuffer ? "application/octet-stream" : "text/plain",
  });
}

export default class ModelTool {
  private model: THREE.Group;
  private zipTool: ZipTool;

  constructor() {
    this.zipTool = new ZipTool();
  }

  public loadModel(files: any, onComplete: (model: THREE.Group) => void) {
    console.log("Load Model");
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
          this.model = scene;
          onComplete(scene);
        });
      },
      false
    );
    reader.readAsArrayBuffer(file);
  }

  private createFileMap(files: any) {
    let map: any = {};
    for (let i = 0; i < files.length; i++) {
      let file = files[i];
      map[files.name] = file;
    }
    return map;
  }

  public splitModel() {
    console.log("Split Model");
    let rootJson: SceneNode = {
      name: this.model.name,
      backgrounds: [],
      machines: [],
    };
    let exportModel: any[] = [];

    this.model.children.forEach((children) => {
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
    this.packageModel(rootJson, exportModel);
  }

  public packageModel(jsonData: SceneNode, exportModel: any[]) {
    const exporter = new GLTFExporter();

    this.zipTool.appFileBlob(
      `modelTiles.json`,
      _toBlob(JSON.stringify(jsonData), false)
    );

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

          this.zipTool.appFileBlob(
            `models/${name}.glb`,
            _toBlob(_toBlob(gltf), false)
          );

          if (i == exportModel.length - 1) {
            this.zipTool.download("model", () => {
              alert("Successful!");
            });
          }
        },
        (err) => {
          console.log(err);
        },
        { binary: true }
      );
    }
  }
}
