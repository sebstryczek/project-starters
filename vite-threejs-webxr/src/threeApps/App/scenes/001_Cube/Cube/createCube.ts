import {
  BoxBufferGeometry,
  Mesh,
  MeshStandardMaterial,
  MathUtils,
  TextureLoader,
} from "three";
import { Updatable } from "../systems/Loop";

const radiansPerSecond = MathUtils.degToRad(30);

const createCube = (): Updatable => {
  const geometry = new BoxBufferGeometry(2, 2, 2);

  const textureLoader = new TextureLoader();
  // load a texture
  const texture = textureLoader.load("threeAssets/textures/uv-test-bw.png");

  const material = new MeshStandardMaterial({
    // color: "purple",
    map: texture,
  });

  const cube = new Mesh(geometry, material);
  cube.rotation.set(-0.5, -0.1, 0.8);

  // @ts-expect-error
  cube.tick = (delta) => {
    cube.rotation.z += radiansPerSecond * delta;
    cube.rotation.x += radiansPerSecond * delta;
    cube.rotation.y += radiansPerSecond * delta;
  };

  // @ts-expect-error
  return cube;
};

export default createCube;
