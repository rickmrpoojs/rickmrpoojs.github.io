import { SHADOW_HTML } from "./muestra-codigo_shadow.js";

class MuestraCódigo extends HTMLElement {
  constructor() {
    super();
    this.copia = this.copia.bind(this);
  }
  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: "open" });
    shadowRoot.innerHTML = SHADOW_HTML;
    this.cod = shadowRoot.querySelector("#cod");
    /** @type {HTMLSlotElement} */
    const mislot = shadowRoot.querySelector("slot");
    mislot.addEventListener("slotchange", () => {
      const assignedElements = mislot.assignedElements();
      for (const assignedElement of assignedElements) {
        const arr = Array.from(assignedElement.children);
        switch (arr.length) {
          case 0:
            /** @type {Element[]} */
            this.líneas = [];
            break;
          case 1:
            this.líneas = Array.from(arr[0].querySelectorAll("div>div"));
            break;
          default:
            this.líneas = arr;
            break;
        }
        /**@type {HTMLElement} */
        const nums = shadowRoot.querySelector("#nums");
        const total = this.líneas.length;
        let inner = "";
        for (let i = 1; i <= total; i++) {
          inner += /* html */ `<div>${i}</div>`;
        }
        nums.innerHTML = inner;
      }
    });
    const button = shadowRoot.querySelector("button");
    button.addEventListener("click", this.copia);
  }
  async copia() {
    try {
      const código = this.líneas.
        map(ch => ch.textContent.replace(/\u00a0/g, ' ')).
        map(s => s.replace(/\s+$/g, '')).
        join("\n");
      if (código) {
        await navigator.clipboard.writeText(código);
        alert("Texto copiado al portapapeles.");
      }
    } catch (e) {
      alert(e.message);
    }
  }
}
customElements.define("muestra-codigo", MuestraCódigo);