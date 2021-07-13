import {
  AxesHelper,
  DirectionalLight,
  GridHelper,
  HemisphereLight,
  PerspectiveCamera,
  Scene,
  WebGLRenderer,
} from "three";
import Loop from "./Loop";
import createCamera from "./threeHelpers/createCamera";

abstract class SceneSetup {
  readonly renderer: WebGLRenderer;
  readonly scene: Scene = new Scene();
  readonly camera: PerspectiveCamera;
  readonly loops: Array<Loop> = [];

  constructor(renderer: WebGLRenderer) {
    this.renderer = renderer;
    this.camera = createCamera();

    this.createHelpers();
    this.createLights();
  }

  protected createHelpers(): void {
    const axesHelper = new AxesHelper(3);
    axesHelper.position.set(-3.5, 0, -3.5);

    const gridHelper = new GridHelper(6);

    this.scene.add(axesHelper, gridHelper);
  }

  protected createLights(): void {
    const mainLight = new DirectionalLight("white", 2);

    mainLight.position.set(10, 10, 10); // right, up, and towards
    mainLight.target.position.set(0, 0, 0);

    const ambientLight = new HemisphereLight(
      "white", // bright sky color
      "darkslategrey", // dim ground color
      3 // intensity
    );

    this.scene.add(mainLight, ambientLight);
  }

  public async load(): Promise<void> {} // eslint-disable-line @typescript-eslint/no-empty-function
  public start(): void {} // eslint-disable-line @typescript-eslint/no-empty-function
  public open(): void {} // eslint-disable-line @typescript-eslint/no-empty-function

  public render(): void {
    this.renderer.render(this.scene, this.camera);
  }
}

export default SceneSetup;
