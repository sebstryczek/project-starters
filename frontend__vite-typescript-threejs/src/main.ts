import "./styles/index.less";

import App from "./threeApps/App";

// @ts-expect-error Define global
window.App = App;

type Props = {
  containerSelector: string,
};

const createApp = async ({ containerSelector }: Props) => {
  const container = document.querySelector<HTMLElement>(containerSelector);

  if (!container) {
    throw new Error(`${containerSelector} - element doesn't exist`);
  }

  const app = new App(container);

  await app.load();
  app.run();
};

// @ts-expect-error Define global
window.createApp = createApp;
