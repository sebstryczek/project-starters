import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";
import ModelsManager, { FBX } from "./core/ModelManager";

const models = [
  "threeAssets/models/OculusHand_L_2.fbx",
  "threeAssets/models/OculusHand_R_2.fbx",
] as const;

type ModelPath = typeof models[number];

const manager = new ModelsManager<FBX>(new FBXLoader());

export const loadModels = (): Promise<void> => manager.load(models);
export const getModels = (): Array<FBX> => manager.getAll();
export const getModel = (path: ModelPath): FBX => manager.get<ModelPath>(path);
