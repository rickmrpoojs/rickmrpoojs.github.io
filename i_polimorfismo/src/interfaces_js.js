class MensajeIng {
  saludo() {
    console.log("Hi");
  }
}
class MensajeEsp {
  saludo() {
    console.log("Hola");
  }
}
const mensajes = [
  new MensajeEsp(),
  new MensajeIng()];
for (var mens of mensajes) {
  mens.saludo();
}