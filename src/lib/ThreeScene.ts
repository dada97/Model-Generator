import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

import ZipTool from "./utils/ZipTools";
import ModelTool from "./utils/modelTool";

export default class ThreeScene {
  scene: THREE.Scene;

  camera: THREE.PerspectiveCamera;
  renderer: THREE.WebGLRenderer;
  model: THREE.Group;

  controls: OrbitControls;

  modelTool: ModelTool;
  zipTool: ZipTool;

  constructor() {
    this.zipTool = new ZipTool();
    this.modelTool = new ModelTool();
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

  public loadModel(files: any) {
    this.modelTool.loadModel(files, (model) => {
      this.scene.add(model);
      this.model = model;
      this.modelTool.splitModel();
    });
  }
}
