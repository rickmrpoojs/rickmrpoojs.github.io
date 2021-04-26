/* This work by Gilberto Pacheco Gallegos is licensed under the Creative Commons
 * Atribución 4.0 Internacional License. To view a copy of this license, visit
 * http://creativecommons.org/licenses/by/4.0/. */

 export class MiFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */
      `<p>
        <a rel="license"
          href="http://creativecommons.org/licenses/by/4.0/"><img
          alt="Licencia Creative Commons" style="border-width:0"
          src="https://i.creativecommons.org/l/by/4.0/80x15.png" /></a>
          <br />Esta
          <span xmlns:dct="http://purl.org/dc/terms/"
            href="http://purl.org/dc/dcmitype/InteractiveResource"
            rel="dct:type">obra</span>
          de
          <a xmlns:cc="http://creativecommons.org/ns#"
            href="https://gilpgijs.github.io" property="cc:attributionName"
            rel="cc:attributionURL">Gilberto Pacheco Gallegos</a>
          está bajo una
          <a rel="license"
            href="http://creativecommons.org/licenses/by/4.0/">Licencia
            Creative Commons Atribución 4.0 Internacional</a>.
      </p>`;
  }
}
customElements.define("mi-footer", MiFooter);