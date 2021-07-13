import { Object3D } from "three";

import setWorldPosition from "../core/threeHelpers/setWorldPosition";
import setWorldRotation from "../core/threeHelpers/setWorldRotation";
import unityEulerToThreeEuler from "../core/threeHelpers/unityEulerToThreeEuler";
import unityVector3ToThreeVector3 from "../core/threeHelpers/unityVector3ToThreeVector3";

import { PhalanxData } from "./data.types";
import { createEuler, createVector3 } from "./xyz";

const setPhalanxData = (
  fingerObject3D: Object3D,
  phalanxData: PhalanxData
): void => {
  const unityWorldPosition = createVector3(phalanxData.phalanxPosition);
  const worldPosition = unityVector3ToThreeVector3(unityWorldPosition);
  setWorldPosition(fingerObject3D, worldPosition);

  const unityWorldRotation = createEuler(phalanxData.phalanxRotation);
  const worldRotation = unityEulerToThreeEuler(unityWorldRotation);
  setWorldRotation(fingerObject3D, worldRotation);

  fingerObject3D.updateWorldMatrix(true, true);
};

export default setPhalanxData;
