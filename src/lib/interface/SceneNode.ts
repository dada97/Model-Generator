export interface SceneNode {
  name: string;
  backgrounds: ObjectNode[];
  machines: ObjectNode[];
}

export interface ObjectNode {
  id: string;
  parent: string | null;
  type: NodeType;
  tag: string[];

  matrix4: number[]; //transform matrix
  path?: string; //模型url

  cameraPos?: number[]; //相機最佳視角
  deviceID?: string; //後端設備ID
  children: ObjectNode[];
}

export enum NodeType { //根據NodeType分類模型的種類，主要用於操作物件
  None,
  Building, //屬於背景物件
  Floor, //屬於背景物件
  Area, //屬於背景物件
  Machine, //屬於互動物件
  Sensor, //屬於互動物件
  Other, //屬於互動物件
}
