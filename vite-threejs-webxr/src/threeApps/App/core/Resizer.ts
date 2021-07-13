import { Vector2, WebGLRenderer } from "three";

class Resizer {
  private renderer;
  constructor(renderer: WebGLRenderer) {
    this.renderer = renderer;

    this.setSize();

    window.addEventListener("resize", this.setSize);
  }

  destroy(): void {
    window.removeEventListener("resize", this.setSize);
  }

  setSize = (): void => {
    const parent = this.renderer.domElement.parentElement;

    if (parent) {
      const { clientWidth, clientHeight } = parent;

      this.renderer.setSize(clientWidth, clientHeight);
      this.renderer.setPixelRatio(window.devicePixelRatio);
    }
  };

  getSize = (): { width: number; height: number } => {
    const size = new Vector2();
    this.renderer.getSize(size);

    return {
      width: size.x,
      height: size.y,
    };
  };
}

export default Resizer;
