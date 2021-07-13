import Entity from "../../../core/Entity";
import models from "../../../scenes/004_Birds/models";

class Stork extends Entity {
  constructor() {
    const model3D = models.get("threeAssets/models/Stork.glb");

    super(model3D);

    this.object3D.position.set(0, -2.5, -10);
  }
}

export default Stork;
