try {
  throw new Error("Ouch");
} catch (e) {
  console.log("Restablece.",
    e.message);
} finally {
  console.log(
    "finally se ejecuta.");
}
console.log("Esto se realiza.");
try {
  console.log("Try exitoso.");
} catch (e) {
  console.log("catch no se hace");
} finally {
  console.log("finally se hace.");
}
console.log("Esto se hace.");