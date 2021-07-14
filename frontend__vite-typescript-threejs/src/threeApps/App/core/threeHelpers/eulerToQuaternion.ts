import { Euler, Quaternion } from "three";

const eulerToQuaternion = (euler: Euler): Quaternion => {
  const quaternion = new Quaternion();
  quaternion.setFromEuler(euler);
  return quaternion;
};

export default eulerToQuaternion;
