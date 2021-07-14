import { Euler, MathUtils } from "three";

const unityEulerToThreeEuler = (unityEuler: Euler): Euler => {
  return new Euler(
    MathUtils.degToRad(unityEuler.x),
    -MathUtils.degToRad(unityEuler.y),
    -MathUtils.degToRad(unityEuler.z),
    "YXZ"
  );
};

export default unityEulerToThreeEuler;
