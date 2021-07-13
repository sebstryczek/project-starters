import { PerspectiveCamera } from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

const createOrbitControls = (
  camera: PerspectiveCamera,
  canvas: HTMLCanvasElement
): OrbitControls => {
  const controls = new OrbitControls(camera, canvas);
  controls.enablePan = false;
  // controls.enableDamping = true;
  controls.target.y = 1;

  return controls;
};

export default createOrbitControls;
