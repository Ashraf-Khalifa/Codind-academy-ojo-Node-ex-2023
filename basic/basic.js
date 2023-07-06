console.log("Hello, World!");

const arg = process.argv;
console.log(arg[2]);
console.log(arg[3]);

setTimeout(() => {
  console.log("Hello, world!");
}, 3000);

setInterval(() => {
  console.log("Hello,world");
}, 2000);

console.warn("warning");
