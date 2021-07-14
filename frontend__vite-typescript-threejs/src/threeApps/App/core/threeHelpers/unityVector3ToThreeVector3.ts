// OculusHand_R.position.set(0.3 * -1, 0.3, 0.3); // prawo góra tył
// OculusHand_R.position.set(-0.2 * -1, -0.2, -0.2); // lewo dół przód

import { Vector3 } from "three";

const unityVector3ToThreeVector3 = (unityVector3: Vector3): Vector3 => {
  return new Vector3(unityVector3.x * -1, unityVector3.y, unityVector3.z);
};

export default unityVector3ToThreeVector3;
