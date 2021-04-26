/** @interface */
class App {
  /** @param {string} rol */
  procesa(rol) {
    throw new Error("Interfaz");
  }
}
/** @implements {App} */
class AppBase {
  /** @param {string} rol
   * @override */
  procesa(rol) {
    console.log(`Hola ${rol}`);
  }
}
/** @implements {App} */
class ProxyApp {
  /** @param {App} sujeto */
  constructor(sujeto) {
    this.sujeto = sujeto;
  }
  /** @param {string} rol
   * @override */
  procesa(rol) {
    if (rol === "admin") {
      this.sujeto.procesa(
        `super ${rol}`);
    }
  }
}
const sujetoReal = new AppBase();
sujetoReal.procesa("cliente");
const proxy =
  new ProxyApp(sujetoReal);
proxy.procesa("cliente");
proxy.procesa("admin");