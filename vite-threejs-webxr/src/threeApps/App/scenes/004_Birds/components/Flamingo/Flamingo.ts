import Entity from "../../../core/Entity";
import models from "../../../scenes/004_Birds/models";

class Flamingo extends Entity {
  constructor() {
    const model3D = models.get("threeAssets/models/Flamingo.glb");
    super(model3D);

    this.object3D.position.set(7.5, 0, -10);
  }
}

export default Flamingo;
