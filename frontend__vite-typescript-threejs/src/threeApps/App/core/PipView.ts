import { Color, PerspectiveCamera, Scene, Vector2, WebGLRenderer } from "three";

type View = {
  left: number;
  bottom: number;
  width: number;
  height: number;
  background: Color;
  scene: Scene;
  camera: PerspectiveCamera;
};

class PipView {
  private renderer: WebGLRenderer;
  private views: Array<View>;

  constructor(renderer: WebGLRenderer, views: Array<View>) {
    this.renderer = renderer;
    this.views = views;
  }

  render(): void {
    const rendererSize = new Vector2();
    this.renderer.getSize(rendererSize);

    for (let i = 0; i < this.views.length; i++) {
      const view = this.views[i];
      const camera = view.camera;

      const left = Math.floor(rendererSize.width * view.left);
      const bottom = Math.floor(rendererSize.height * view.bottom);
      const width = Math.floor(rendererSize.width * view.width);
      const height = Math.floor(rendererSize.height * view.height);

      this.renderer.setViewport(left, bottom, width, height);
      this.renderer.setScissor(left, bottom, width, height);
      this.renderer.setScissorTest(true);
      this.renderer.setClearColor(view.background);

      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      this.renderer.render(view.scene, view.camera);
    }
  }
}

export default PipView;
