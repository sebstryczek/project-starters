import { Object3D } from "three";
import setWorldPosition from "../core/threeHelpers/setWorldPosition";
import setWorldRotation from "../core/threeHelpers/setWorldRotation";
import unityEulerToThreeEuler from "../core/threeHelpers/unityEulerToThreeEuler";
import unityVector3ToThreeVector3 from "../core/threeHelpers/unityVector3ToThreeVector3";
import { PalmData } from "./data.types";
import { createEuler, createVector3 } from "./xyz";

const setPalmData = (palmObject3D: Object3D, palmData: PalmData): void => {
  const unityWorldPosition = createVector3(palmData.palmPosition);
  const worldPosition = unityVector3ToThreeVector3(unityWorldPosition);
  setWorldPosition(palmObject3D, worldPosition);

  const unityWorldRotation = createEuler(palmData.palmRotation);
  const worldRotation = unityEulerToThreeEuler(unityWorldRotation);
  setWorldRotation(palmObject3D, worldRotation);

  palmObject3D.updateWorldMatrix(true, true);
};

export default setPalmData;
