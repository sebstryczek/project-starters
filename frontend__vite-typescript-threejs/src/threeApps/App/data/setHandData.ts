import { Object3D } from "three";

import { HandData, HandType } from "./data.types";
import setPalmData from "./setPalmData";
import setPhalanxData from "./setPhalanxData";

const getPhalanxObject3D = (object3D: Object3D, name: string): Object3D => {
  const phalanxObject3D = object3D.getObjectByName(name);

  if (!phalanxObject3D) {
    throw new Error(`${name} not found`);
  }

  return phalanxObject3D;
};

const setHandData = (handObject3D: Object3D, handData: HandData): void => {
  const handType = handData.handType;

  const thumb0 = getPhalanxObject3D(
    handObject3D,
    handType === HandType.Left ? "b_l_thumb0" : "b_r_thumb0"
  );
  const thumb1 = getPhalanxObject3D(
    handObject3D,
    handType === HandType.Left ? "b_l_thumb1" : "b_r_thumb1"
  );
  const thumb2 = getPhalanxObject3D(
    handObject3D,
    handType === HandType.Left ? "b_l_thumb2" : "b_r_thumb2"
  );
  const thumb3 = getPhalanxObject3D(
    handObject3D,
    handType === HandType.Left ? "b_l_thumb3" : "b_r_thumb3"
  );
  const index1 = getPhalanxObject3D(
    handObject3D,
    handType === HandType.Left ? "b_l_index1" : "b_r_index1"
  );
  const index2 = getPhalanxObject3D(
    handObject3D,
    handType === HandType.Left ? "b_l_index2" : "b_r_index2"
  );
  const index3 = getPhalanxObject3D(
    handObject3D,
    handType === HandType.Left ? "b_l_index3" : "b_r_index3"
  );
  const middle1 = getPhalanxObject3D(
    handObject3D,
    handType === HandType.Left ? "b_l_middle1" : "b_r_middle1"
  );
  const middle2 = getPhalanxObject3D(
    handObject3D,
    handType === HandType.Left ? "b_l_middle2" : "b_r_middle2"
  );
  const middle3 = getPhalanxObject3D(
    handObject3D,
    handType === HandType.Left ? "b_l_middle3" : "b_r_middle3"
  );
  const ring1 = getPhalanxObject3D(
    handObject3D,
    handType === HandType.Left ? "b_l_ring1" : "b_r_ring1"
  );
  const ring2 = getPhalanxObject3D(
    handObject3D,
    handType === HandType.Left ? "b_l_ring2" : "b_r_ring2"
  );
  const ring3 = getPhalanxObject3D(
    handObject3D,
    handType === HandType.Left ? "b_l_ring3" : "b_r_ring3"
  );
  const pinky0 = getPhalanxObject3D(
    handObject3D,
    handType === HandType.Left ? "b_l_pinky0" : "b_r_pinky0"
  );
  const pinky1 = getPhalanxObject3D(
    handObject3D,
    handType === HandType.Left ? "b_l_pinky1" : "b_r_pinky1"
  );
  const pinky2 = getPhalanxObject3D(
    handObject3D,
    handType === HandType.Left ? "b_l_pinky2" : "b_r_pinky2"
  );
  const pinky3 = getPhalanxObject3D(
    handObject3D,
    handType === HandType.Left ? "b_l_pinky3" : "b_r_pinky3"
  );

  setPalmData(handObject3D, handData);

  setPhalanxData(thumb0, handData.thumbData.basePhalanxData);
  setPhalanxData(thumb1, handData.thumbData.proximalPhalanxData);
  setPhalanxData(thumb2, handData.thumbData.middlePhalanxData);
  setPhalanxData(thumb3, handData.thumbData.distalPhalanxData);

  setPhalanxData(index1, handData.indexData.proximalPhalanxData);
  setPhalanxData(index2, handData.indexData.middlePhalanxData);
  setPhalanxData(index3, handData.indexData.distalPhalanxData);

  setPhalanxData(middle1, handData.middleData.proximalPhalanxData);
  setPhalanxData(middle2, handData.middleData.middlePhalanxData);
  setPhalanxData(middle3, handData.middleData.distalPhalanxData);

  setPhalanxData(ring1, handData.ringData.proximalPhalanxData);
  setPhalanxData(ring2, handData.ringData.middlePhalanxData);
  setPhalanxData(ring3, handData.ringData.distalPhalanxData);

  setPhalanxData(pinky0, handData.pinkyData.basePhalanxData);
  setPhalanxData(pinky1, handData.pinkyData.proximalPhalanxData);
  setPhalanxData(pinky2, handData.pinkyData.middlePhalanxData);
  setPhalanxData(pinky3, handData.pinkyData.distalPhalanxData);
};

export default setHandData;
