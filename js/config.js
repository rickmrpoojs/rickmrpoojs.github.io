import "../lib/mi-footer.js";
import "../cmp/mi-nav.js";
import "../lib/layout-cajon.js";
import { muestraError, setTitle } from "../lib/utilHtml.js";

registraServiceWorker();

document.addEventListener("DOMContentLoaded", () => setTitle("rickmrpoojs"));

async function registraServiceWorker() {
  try {
    const registro = await navigator.serviceWorker.register("/sw.js");
    console.log("Service Worker registrado.");
    console.log(registro);
  } catch (e) {
    muestraError(e);
  }
}