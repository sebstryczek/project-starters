import { AnimationMixer, Clock, Color, WebGLRenderer } from "three";

import Resizer from "./core/Resizer";

import ExercisePreview from "./scenes/005_Hand/ExercisePreviewView";
import MainScene from "./scenes/005_Hand/MainView";

import { HandData } from "./data/data.types";
import { getModels, loadModels } from "./models";
import PipView from "./core/PipView";
import { ExerciseType } from "./scenes/005_Hand/ExercisePreviewView/ExercisePreview";

const clock = new Clock();

type InteractionAPI = {
  replayAnimation: () => void;
};

class App {
  private isEnabled: boolean = false;
  private container: HTMLElement;
  private renderer: WebGLRenderer;
  private resizer: Resizer;

  private pipView: PipView;
  private mainScene: MainScene;
  private exercisePreview: ExercisePreview;

  constructor(container: HTMLElement) {
    this.container = container;

    this.renderer = new WebGLRenderer({ antialias: true, alpha: true });
    this.renderer.physicallyCorrectLights = true;
    this.renderer.setAnimationLoop(this.loop.bind(this));

    this.container.append(this.renderer.domElement);
    this.resizer = new Resizer(this.renderer);

    this.mainScene = new MainScene(this.renderer);
    this.exercisePreview = new ExercisePreview(this.renderer);

    this.pipView = new PipView(this.renderer, [
      {
        left: 0,
        bottom: 0,
        width: 1,
        height: 1,
        background: new Color(0.2, 0.2, 0.2),
        camera: this.mainScene.camera,
        scene: this.mainScene.scene,
      },
      {
        left: 0.75,
        bottom: 0.75,
        width: 0.25,
        height: 0.25,
        background: new Color(0.7, 0.5, 0.5),
        camera: this.exercisePreview.camera,
        scene: this.exercisePreview.scene,
      },
    ]);
  }

  async load(): Promise<void> {
    await loadModels();

    getModels().forEach((model) => {
      model.scale.multiplyScalar(0.01);
      const handAnimationMixer = new AnimationMixer(model);
      const idleAnimationClip = model.animations[0];
      const idleAnimationAction =
        handAnimationMixer.clipAction(idleAnimationClip);
      idleAnimationAction.play();
      handAnimationMixer.update(0);
    });

    await this.mainScene.load();
    this.mainScene.open();

    await this.exercisePreview.load();
    this.exercisePreview.open();

    // Rendering on demand:
    // 1. when using controls
    // 2. when running with new data
    if (this.mainScene.controls) {
      this.mainScene.controls.addEventListener("change", () => {
        this.render();
      });
    }
  }

  public unload(): void {
    this.resizer.destroy();
    this.renderer.setAnimationLoop(null);
  }

  private loop() {
    if (!this.isEnabled) {
      return;
    }

    const delta = clock.getDelta();

    for (const fn of this.mainScene.loops) {
      fn(delta);
    }

    for (const fn of this.exercisePreview.loops) {
      fn(delta);
    }

    this.render();
  }

  public render(): void {
    // this.renderer.render(this.mainScene.scene, this.mainScene.camera);
    // this.mainScene.render();
    // this.exercisePreview.render();

    this.exercisePreview.camera.position.copy(this.mainScene.camera.position);
    this.exercisePreview.camera.rotation.copy(this.mainScene.camera.rotation);
    this.pipView.render();
  }

  public startLoop(): void {
    this.isEnabled = true;
  }

  public stopLoop(): void {
    this.isEnabled = false;
  }

  public run(
    exerciseType: ExerciseType,
    handData: HandData,
    currentTimeFactor: number
  ): void {
    this.mainScene.run(handData);
    this.exercisePreview.run(
      handData.handType,
      exerciseType,
      currentTimeFactor
    );

    this.render();
  }
}

export default App;
