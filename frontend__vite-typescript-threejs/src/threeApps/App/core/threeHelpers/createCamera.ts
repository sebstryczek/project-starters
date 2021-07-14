import { PerspectiveCamera } from "three";

type Props = {
  fov?: number;
  aspectRatio?: number;
  nearClippingPlane?: number;
  farClippingPlane?: number;
};

const createCamera = (props?: Props): PerspectiveCamera => {
  const {
    fov = 35,
    aspectRatio = 1, // (dummy value)
    nearClippingPlane = 0.1,
    farClippingPlane = 100,
  } = props || {};

  const camera = new PerspectiveCamera(
    fov,
    aspectRatio,
    nearClippingPlane,
    farClippingPlane
  );

  return camera;
};

export default createCamera;
