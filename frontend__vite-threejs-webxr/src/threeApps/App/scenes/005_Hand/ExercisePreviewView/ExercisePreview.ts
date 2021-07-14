import { AnimationMixer, Euler, MathUtils, Object3D } from "three";

import SceneSetup from "../../../core/SceneSetup";
import cloneFbx from "../../../core/threeHelpers/cloneFbx";

import { HandType } from "../../../data/data.types";
import { getModel } from "../../../models";

export enum ExerciseType {
  FIST,
  THUMB_TOUCH,
  PALM_UP_AND_DOWN,
  PIANO_PLAY,
}

class ExercisePreview extends SceneSetup {
  private lHand: Object3D | null = null;
  private rHand: Object3D | null = null;

  open(): void {
    this.camera.zoom = 3;

    const OculusHand_L = getModel("threeAssets/models/OculusHand_L_2.fbx");
    this.lHand = cloneFbx(OculusHand_L);
    this.lHand.name = "OculusHand_L";
    this.lHand.getObjectByName("b_l_wrist")?.rotateZ(MathUtils.degToRad(180));
    this.lHand.rotateY(MathUtils.degToRad(90));
    this.lHand.rotateX(MathUtils.degToRad(180));
    this.lHand.rotateZ(MathUtils.degToRad(20));

    const OculusHand_R = getModel("threeAssets/models/OculusHand_R_2.fbx");
    this.rHand = cloneFbx(OculusHand_R);
    this.rHand.name = "OculusHand_R";
    this.rHand.getObjectByName("b_r_wrist")?.rotateY(MathUtils.degToRad(180));
    this.rHand.rotateY(MathUtils.degToRad(-90));
    this.rHand.rotateZ(MathUtils.degToRad(20));
  }

  run(
    handType: HandType,
    exerciseType: ExerciseType,
    timeFactor: number
  ): void {
    if (this.lHand === null) {
      throw new Error("No left hand model object!");
    }

    if (this.rHand === null) {
      throw new Error("No right hand model object!");
    }

    if (exerciseType < 0 || exerciseType > 3) {
      throw new Error(
        "Exercise typ must be between 0 and 2 (0 - closeOpen, 1 - piano, 2 - thumb_tips)"
      );
    }

    const OculusHand_L = this.scene.getObjectByName("OculusHand_L");
    if (OculusHand_L) {
      this.scene.remove(OculusHand_L);
    }

    const OculusHand_R = this.scene.getObjectByName("OculusHand_R");
    if (OculusHand_R) {
      this.scene.remove(OculusHand_R);
    }

    // if (exerciseType === ExerciseType.PALM_UP_AND_DOWN) {
    //   // Tweaks for specific model/animation
    //   this.lHand.rotation.copy(
    //     new Euler(0, MathUtils.degToRad(-90), MathUtils.degToRad(20))
    //   );
    //   this.rHand.rotation.copy(
    //     new Euler(0, MathUtils.degToRad(90), MathUtils.degToRad(-20))
    //   );
    // }

    if (handType === HandType.Left) {
      this.scene.add(this.lHand);
      const animationMixer = new AnimationMixer(this.lHand);

      // 0 - wrist_rotate_180_7s
      // 1 - idle
      // 2 - Fist_CloseOpen_7s
      // 3 - thumb_tips_7s
      // 4 - piano_7s

      const clipId =
        exerciseType === ExerciseType.FIST
          ? 2
          : exerciseType === ExerciseType.THUMB_TOUCH
          ? 3
          : exerciseType === ExerciseType.PALM_UP_AND_DOWN
          ? 0
          : exerciseType === ExerciseType.PIANO_PLAY
          ? 4
          : 1;
      const pianoAnimationClip = this.lHand.animations[clipId];
      const animationDuration = pianoAnimationClip.duration;

      const animationAction = animationMixer.clipAction(pianoAnimationClip);
      animationAction.stop();
      animationAction.play();

      animationMixer.update(animationDuration * timeFactor);
    }

    if (handType === HandType.Right) {
      this.scene.add(this.rHand);
      const animationMixer = new AnimationMixer(this.rHand);

      // 0 - wrist_rotate_180_7s
      // 1 - idle
      // 2 - Fist_CloseOpen_7s
      // 3 - piano_7s
      // 4 - thumb_tips_7s

      const clipId =
        exerciseType === ExerciseType.FIST
          ? 2
          : exerciseType === ExerciseType.THUMB_TOUCH
          ? 4
          : exerciseType === ExerciseType.PALM_UP_AND_DOWN
          ? 0
          : exerciseType === ExerciseType.PIANO_PLAY
          ? 3
          : 1;

      const pianoAnimationClip = this.rHand.animations[clipId];
      const animationDuration = pianoAnimationClip.duration;

      const animationAction = animationMixer.clipAction(pianoAnimationClip);
      animationAction.stop();
      animationAction.play();

      animationMixer.update(animationDuration * timeFactor);
    }
  }
}

export default ExercisePreview;
