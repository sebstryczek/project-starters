import { Euler, Object3D } from "three";
import eulerToQuaternion from "./eulerToQuaternion";
import setWorldQuaternion from "./setWorldQuaternion";

const setWorldRotation = (object3D: Object3D, euler: Euler): void => {
  // https://github.com/mrdoob/three.js/issues/13704
  // const a = new Matrix4();
  // const b = new Matrix4();
  // const c = new Matrix4();
  // a.makeRotationFromEuler(unityEuler);
  // object3D.updateMatrixWorld();
  // b.getInverse(object3D.parent.matrixWorld);
  // c.extractRotation(b);
  // a.premultiply(c);
  // object3D.quaternion.setFromRotationMatrix(a);

  const quaternion = eulerToQuaternion(euler);
  setWorldQuaternion(object3D, quaternion);
};

export default setWorldRotation;
