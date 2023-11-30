export interface SceneNode {
  scene: TreeNode;
}

export interface TreeNode {
  id: string;
  type: number;
  parent: string | null;
  tag: string[];

  camera_pos?: Vec3;
  camera_rot?: Vec3;
  deviceID?: string;

  models: ModelsNode[];
  children: TreeNode[];
}

export interface ModelsNode {
  path: string;
  position: Vec3;
  rotation: Vec3;
  scale: Vec3;
}

export interface Vec3 {
  x: number;
  y: number;
  z: number;
}
