/** @interface */
class Mensajes {
  saluda() {
    throw new Error("Interfaz");
  }
}
/** @interface */
class FabricaMensajes {
  /** @returns {Mensajes} */
  creaMensajes() {
    throw new Error("Interfaz");
  }
}
/** @implements {Mensajes} */
class MensajesEsp {
  /** @override */
  saluda() {
    console.log("Hola");
  }
}
/** @implements {Mensajes} */
class MensajesIng {
  /** @override */
  saluda() {
    console.log("Hi");
  }
}
/**@implements {FabricaMensajes}*/
class FabricaMensajesEsp {
  /** @returns {Mensajes}
   * @override */
  creaMensajes() {
    return new MensajesEsp();
  }
}
/**@implements {FabricaMensajes}*/
class FabricaMensajesIng {
  /** @returns {Mensajes}
   * @override */
  creaMensajes() {
    return new MensajesIng();
  }
}
saluda(new FabricaMensajesEsp());
saluda(new FabricaMensajesIng());
/**@param {FabricaMensajes} fab*/
function saluda(fab) {
  const mens = fab.creaMensajes();
  mens.saluda();
}