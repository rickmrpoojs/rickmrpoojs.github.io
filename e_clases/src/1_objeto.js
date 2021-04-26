class Cl01 {
  constructor(b) {
    this.a = b;
  }
  mensaje(c) {
    console.log(c + this.a);
  }
}
const a = new Cl01(4);
a.mensaje(2);