import { Object3D } from "three";
import { SkeletonUtils } from "three/examples/jsm/utils/SkeletonUtils";

const cloneFbx = (fbx: Object3D): Object3D => {
  const clonedObject = SkeletonUtils.clone(fbx);

  const animations = fbx.animations.map((animation) => animation.clone());

  clonedObject.animations = animations;

  return clonedObject;
};

export default cloneFbx;
