import { Object3D, Quaternion } from "three";

const setWorldQuaternion = (
  object3D: Object3D,
  quaternion: Quaternion
): void => {
  // Doesn't work
  // const q = new Quaternion();
  // q.setFromEuler(unityEuler);
  // const a = object3D.parent.quaternion.clone().invert().multiply(q);
  // Declare angles
  // const angleX = fingerData.phalanxRotation.x;
  // const angleY = fingerData.phalanxRotation.y;
  // const angleZ = fingerData.phalanxRotation.z;

  // // Declare X and Y axes
  // const axisX = new Vector3(1, 0, 0);
  // const axisY = new Vector3(0, 1, 0);
  // const axisZ = new Vector3(0, 0, 1);

  // // Init quaternions that will rotate along each axis
  // const quatX = new Quaternion();
  // const quatY = new Quaternion();
  // const quatZ = new Quaternion();

  // // Set quaternions from each axis (in radians)...
  // quatX.setFromAxisAngle(axisX, MathUtils.degToRad(angleX));
  // quatY.setFromAxisAngle(axisY, MathUtils.degToRad(angleY));
  // quatZ.setFromAxisAngle(axisZ, MathUtils.degToRad(angleZ));

  // // ...then multiply them to get final rotation
  // quatY.multiply(quatX);
  // quatZ.multiply(quatY);

  // object3D.quaternion.copy(quatZ);
  // parent.add(object3D);
  // this.scene.remove(object3D);

  // object3D.matrixWorld = saveMatrix;

  // object3D.rotateOnWorldAxis(new Vector3(1, 0, 0), unityEuler.x);
  // object3D.rotateOnWorldAxis(new Vector3(0, 1, 0), unityEuler.y);
  // object3D.rotateOnWorldAxis(new Vector3(0, 0, 1), unityEuler.z);

  // object3D?.setRotationFromEuler(unityEuler);

  object3D.quaternion.copy(quaternion);

  if (object3D.parent) {
    const worldQuaternion = new Quaternion();
    object3D.parent.getWorldQuaternion(worldQuaternion);

    const localQuaternion = object3D.quaternion
      .clone()
      .premultiply(worldQuaternion.invert());

    object3D.quaternion.copy(localQuaternion);
  }
};

export default setWorldQuaternion;
