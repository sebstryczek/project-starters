import { Object3D, Vector3 } from "three";

const setWorldPosition = (object3D: Object3D, vector3: Vector3): void => {
  // // from `worldToLocal` source code
  // const _m1 = new Matrix4();
  // const calc_localPos = unityVector3
  //   .clone()
  //   .applyMatrix4(_m1.copy(object3D.parent.matrixWorld).invert());
  // object3D.position.copy(calc_localPos);
  // // the same thing but using matrix
  // const p = new Matrix4();
  // p.setPosition(calc_localPos);
  // object3D.matrix.fromArray(p.toArray());

  const localPos = object3D.parent
    ? object3D.parent.worldToLocal(vector3.clone())
    : vector3;

  object3D.position.copy(localPos);
};

export default setWorldPosition;
