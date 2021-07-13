export type XYZ = { x: number; y: number; z: number };
export type PhalanxData = { phalanxRotation: XYZ; phalanxPosition: XYZ };
export type FingerData = {
  proximalPhalanxData: PhalanxData;
  middlePhalanxData: PhalanxData;
  distalPhalanxData: PhalanxData;
};

export enum HandType {
  None,
  Left,
  Right,
}

export type PalmData = {
  palmRotation: XYZ;
  palmPosition: XYZ;
};

export type HandData = { handType: HandType } & PalmData & {
    thumbData: FingerData & { basePhalanxData: PhalanxData };
    indexData: FingerData;
    middleData: FingerData;
    ringData: FingerData;
    pinkyData: FingerData & { basePhalanxData: PhalanxData };
  };
