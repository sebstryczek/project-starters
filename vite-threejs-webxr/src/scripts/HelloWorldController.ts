const getElement = <T extends HTMLElement> (name: string): T => {
  const selector = `[data-element*="${name}"]`;
  const element = document.querySelector<T>(selector);

  if (element === null) {
    throw new Error(`${selector} - element not found.`);
  }

  return element;
}

class HelloWorld {
  private button: HTMLButtonElement;

  constructor() {
    this.button = getElement("button");
    this.button.addEventListener("click", this.onButtonClick);
  }

  private onButtonClick(): void {
    console.log("Clicked!")
  }
}

export default HelloWorld;
