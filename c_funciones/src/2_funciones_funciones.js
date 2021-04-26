function c1() {
  console.log("c1-1");
  c2();
  console.log("c1-2");
}
function c2() {
  console.log("c2");
}
console.log("global-1");
c2();
console.log("global-2");
c1();
console.log("global-3");