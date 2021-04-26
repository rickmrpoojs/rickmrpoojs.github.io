/** @interface */
class IMensaje {
  saludo() {
    throw new Error("Interfaz");
  }
}
/** @implements {IMensaje} */
class IMensajeIng {
  /** @override */
  saludo() {
    console.log("Hi");
  }
}
/** @implements {IMensaje} */
class IMensajeEsp {
  /** @override */
  saludo() {
    console.log("Hola");
  }
}
const imensajes = [
  new IMensajeEsp(),
  new IMensajeIng()];
for (var mens of imensajes) {
  mens.saludo();
}