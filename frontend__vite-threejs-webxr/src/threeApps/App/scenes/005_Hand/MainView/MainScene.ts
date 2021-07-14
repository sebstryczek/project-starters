import { MathUtils, Object3D, Vector3 } from "three";

import SceneSetup from "../../core/SceneSetup";
import createOrbitControls from "../../core/threeHelpers/createOrbitControls";
import cloneFbx from "../../core/threeHelpers/cloneFbx";

import { HandData, HandType } from "../../data/data.types";
import setHandData from "../../data/setHandData";
import { getModel } from "../../models";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

class Main extends SceneSetup {
  public controls: OrbitControls | null = null;
  private lHand: Object3D | null = null;
  private rHand: Object3D | null = null;

  open(): void {
    const OculusHand_L = getModel("threeAssets/models/OculusHand_L_2.fbx");
    this.lHand = cloneFbx(OculusHand_L);
    this.lHand.name = "OculusHand_L";
    this.lHand.getObjectByName("b_l_wrist")?.rotateZ(MathUtils.degToRad(180));

    const OculusHand_R = getModel("threeAssets/models/OculusHand_R_2.fbx");
    this.rHand = cloneFbx(OculusHand_R);
    this.rHand.name = "OculusHand_R";
    this.rHand.getObjectByName("b_r_wrist")?.rotateY(MathUtils.degToRad(180));

    this.camera.position.set(0, 1.8, -1);
    this.camera.rotation.set(
      MathUtils.degToRad(0),
      MathUtils.degToRad(180),
      MathUtils.degToRad(0)
    );
    this.camera.lookAt(this.rHand.position);

    this.controls = createOrbitControls(this.camera, this.renderer.domElement);
    this.controls.target.copy(this.rHand.position);
    // this.loops.push(controls.update);
  }

  run(handData: HandData): void {
    if (this.lHand === null) {
      throw new Error("No left hand model object!");
    }

    if (this.rHand === null) {
      throw new Error("No right hand model object!");
    }

    const OculusHand_L = this.scene.getObjectByName("OculusHand_L");
    if (OculusHand_L) {
      this.scene.remove(OculusHand_L);
    }

    const OculusHand_R = this.scene.getObjectByName("OculusHand_R");
    if (OculusHand_R) {
      this.scene.remove(OculusHand_R);
    }

    if (handData.handType === HandType.Left) {
      this.scene.add(this.lHand);

      setHandData(this.lHand, handData);
      this.lHand.position.copy(new Vector3());
      this.lHand.rotateY(MathUtils.degToRad(-60));
      this.lHand.rotateZ(MathUtils.degToRad(-30));
    }

    if (handData.handType === HandType.Right) {
      this.scene.add(this.rHand);

      setHandData(this.rHand, handData);
      this.rHand.position.copy(new Vector3());
    }
  }
}

export default Main;
