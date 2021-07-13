import Entity from "../../../core/Entity";
import models from "../../../scenes/004_Birds/models";

class Parrot extends Entity {
  constructor() {
    const model3D = models.get("threeAssets/models/Parrot.glb");

    super(model3D);

    this.object3D.position.set(0, 0, 2.5);
  }
}

export default Parrot;
