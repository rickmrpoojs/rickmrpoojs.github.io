try {
  console.log("Ejecuta bien.");
} catch (e) {
  console.log("Esto no se hace.");
}
console.log("Continúa normal.");
try {
  console.log("Intenta seguir.");
  throw new Error("Fallo.");
  console.log("Esto no se hace");
} catch (e) {
  console.log("Procesa el error:",
    e.message);
}
console.log("Adios.");