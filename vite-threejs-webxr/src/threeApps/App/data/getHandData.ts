//   getHandData(handObject3D: Object3D) {
//     const b_r_thumb0 = handObject3D.getObjectByName("b_r_thumb0");
//     const b_r_thumb1 = handObject3D.getObjectByName("b_r_thumb1");
//     const b_r_thumb2 = handObject3D.getObjectByName("b_r_thumb2");
//     const b_r_thumb3 = handObject3D.getObjectByName("b_r_thumb3");
//     const b_r_index1 = handObject3D.getObjectByName("b_r_index1");
//     const b_r_index2 = handObject3D.getObjectByName("b_r_index2");
//     const b_r_index3 = handObject3D.getObjectByName("b_r_index3");
//     const b_r_middle1 = handObject3D.getObjectByName("b_r_middle1");
//     const b_r_middle2 = handObject3D.getObjectByName("b_r_middle2");
//     const b_r_middle3 = handObject3D.getObjectByName("b_r_middle3");
//     const b_r_ring1 = handObject3D.getObjectByName("b_r_ring1");
//     const b_r_ring2 = handObject3D.getObjectByName("b_r_ring2");
//     const b_r_ring3 = handObject3D.getObjectByName("b_r_ring3");
//     const b_r_pinky0 = handObject3D.getObjectByName("b_r_pinky0");
//     const b_r_pinky1 = handObject3D.getObjectByName("b_r_pinky1");
//     const b_r_pinky2 = handObject3D.getObjectByName("b_r_pinky2");
//     const b_r_pinky3 = handObject3D.getObjectByName("b_r_pinky3");

//     return {
//       handType: 2,
//       palmPosition: getXYZ(handObject3D.position),
//       palmRotation: getXYZ(handObject3D.rotation),
//       thumbData: {
//         basePhalanxData: getPhalanxData(b_r_thumb0),
//         proximalPhalanxData: getPhalanxData(b_r_thumb1),
//         middlePhalanxData: getPhalanxData(b_r_thumb2),
//         distalPhalanxData: getPhalanxData(b_r_thumb3),
//       },
//       indexData: {
//         proximalPhalanxData: getPhalanxData(b_r_index1),
//         middlePhalanxData: getPhalanxData(b_r_index2),
//         distalPhalanxData: getPhalanxData(b_r_index3),
//       },
//       middleData: {
//         proximalPhalanxData: getPhalanxData(b_r_middle1),
//         middlePhalanxData: getPhalanxData(b_r_middle2),
//         distalPhalanxData: getPhalanxData(b_r_middle3),
//       },
//       ringData: {
//         proximalPhalanxData: getPhalanxData(b_r_ring1),
//         middlePhalanxData: getPhalanxData(b_r_ring2),
//         distalPhalanxData: getPhalanxData(b_r_ring3),
//       },
//       pinkyData: {
//         basePhalanxData: getPhalanxData(b_r_pinky0),
//         proximalPhalanxData: getPhalanxData(b_r_pinky1),
//         middlePhalanxData: getPhalanxData(b_r_pinky2),
//         distalPhalanxData: getPhalanxData(b_r_pinky3),
//       },
//     };
//   }

// const getPhalanxData = (object3D?: Object3D): PhalanxData => ({
//   phalanxPosition: getXYZ(object3D?.position),
//   phalanxRotation: getXYZ(object3D?.rotation),
// });
