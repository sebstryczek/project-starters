import { Euler, Vector3 } from "three";
import { XYZ } from "./data.types";

export const getXYZ = ({ x, y, z }: Vector3 | Euler = new Vector3()): XYZ => ({
  x,
  y,
  z,
});

export const createVector3 = ({ x, y, z }: XYZ = new Vector3()): Vector3 =>
  new Vector3(x, y, z);

export const createEuler = ({ x, y, z }: XYZ = new Euler()): Euler =>
  new Euler(x, y, z);
