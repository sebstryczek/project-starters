import {
  AnimationAction,
  AnimationClip,
  AnimationMixer,
  Object3D,
} from "three";
import { GLTF } from "three/examples/jsm/loaders/GLTFLoader";
import Loop from "./Loop";

abstract class Entity {
  private _object3D: Object3D;
  private animationClip: AnimationClip;
  private animationMixer: AnimationMixer;
  private animationAction: AnimationAction;

  public get object3D(): Object3D {
    return this._object3D;
  }

  constructor(model3D: GLTF) {
    // TODO:
    // 1. Add multiple scene children support
    // 2. Add multiple animation children support
    // 3. Extract animation component
    this._object3D = model3D.scene.children[0];
    this.animationClip = model3D.animations[0];
    this.animationMixer = new AnimationMixer(this.object3D);
    this.animationAction = this.animationMixer.clipAction(this.animationClip);

    this.animationAction.play();
    // action.startAt(2).setEffectiveTimeScale(0.5).play();
  }

  loop: Loop = (delta) => {
    this.animationMixer.update(delta);
  };
}

export default Entity;
