class Singleton {
  static get instancia() {
    if (!this._instancia) {
      /** @private */
      this._instancia =
        new Singleton();
    }
    return this._instancia;
  }
  /** @private */
  constructor() {
    this.nombre = "";
  }
  saluda() {
    console.log(
      `Hola ${this.nombre}`);
  }
}
const s1 = Singleton.instancia;
s1.nombre = "Sam";
s1.saluda();
const s2 = Singleton.instancia;
s2.saluda();