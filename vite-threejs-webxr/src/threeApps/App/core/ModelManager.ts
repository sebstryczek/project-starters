import { Group, Cache } from "three";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";
import { GLTF, GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export type FBX = Group;

class ModelsManager<Model extends GLTF | FBX> {
  private loader: Model extends GLTF ? GLTFLoader : FBXLoader; // TODO: Find way to create it in constructor
  private modelsData: { [key: string]: Model } | null = null;

  constructor(loader: Model extends GLTF ? GLTFLoader : FBXLoader) {
    Cache.enabled = true; // TODO: Caching with IndexDB
    this.loader = loader;
  }

  public load = async (paths: ReadonlyArray<string>): Promise<void> => {
    const loader = this.loader;

    type ModelData = { [key: string]: Model };

    const promises = paths.map(
      (modelPath) =>
        new Promise<{ path: string; model: Model }>((resolve, reject) => {
          loader
            .loadAsync(modelPath)
            .then((model: unknown) => {
              resolve({ path: modelPath, model: model as Model });
            })
            .catch((error) => {
              reject(error);
            });
        })
    );

    const loadedModels = (await Promise.all(promises)).reduce((acc, data) => {
      if (data.model) {
        return {
          ...acc,
          [data.path]: data.model,
        };
      }

      return acc;
    }, {} as ModelData);

    this.modelsData = loadedModels;
  };

  public get = <T extends string>(path: T): Model => {
    if (!this.modelsData) {
      throw new Error(`Models were not loaded correctly.`);
    }

    const model = this.modelsData[path];

    if (!model) {
      throw new Error(`${path} was not loaded correctly.`);
    }

    return model;
  };

  public getAll = (): Array<Model> => {
    if (!this.modelsData) {
      throw new Error(`Models were not loaded correctly.`);
    }

    return Object.values(this.modelsData);
  };
}

export default ModelsManager;
