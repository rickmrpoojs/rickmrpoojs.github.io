class Cl2 {
  static saludaReina() {
    console.log(
      `Hola. Soy ${Cl2.nombre}.`);
  }
  saludaInstancia() {
    console.log(
      // @ts-ignore
      `Hola. Soy ${this.nom}`);
  }
}
Cl2.nombre = "QK";
const t1 = new Cl2();
// @ts-ignore
t1.nom = "qkita1";
const t2 = new Cl2();
// @ts-ignore
t2.nom = "qkita2";
Cl2.saludaReina();
t1.saludaInstancia();
t2.saludaInstancia();