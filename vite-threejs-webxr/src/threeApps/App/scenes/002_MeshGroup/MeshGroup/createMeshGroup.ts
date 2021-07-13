import {
  SphereBufferGeometry,
  Group,
  MathUtils,
  Mesh,
  MeshStandardMaterial,
} from "three";
import { Updatable } from "../systems/Loop";

const radiansPerSecond = MathUtils.degToRad(30);

const createMeshGroup = (): Updatable => {
  const group = new Group();

  const geometry = new SphereBufferGeometry(0.25, 16, 16);
  const material = new MeshStandardMaterial({
    color: "indigo",
  });
  const protoSphere = new Mesh(geometry, material);

  // add the sphere to the group
  group.add(protoSphere);

  for (let i = 0; i < 1; i += 0.001) {
    const sphere = protoSphere.clone();

    // position the spheres on around a circle
    sphere.position.x = Math.cos(2 * Math.PI * i);
    sphere.position.y = Math.sin(2 * Math.PI * i);
    sphere.position.z = -i * 5;

    sphere.scale.multiplyScalar(0.01 + i);

    group.add(sphere);
  }

  //   group.scale.multiplyScalar(2);
  group.scale.set(2, 2, 2);

  // @ts-expect-error
  // each frame, rotate the entire group of spheres
  group.tick = (delta) => {
    group.rotation.z -= delta * radiansPerSecond;
  };

  return group;
};

export default createMeshGroup;
