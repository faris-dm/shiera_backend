// Executed after every 1000 milliseconds
// from the start of the program
// setInterval(function A() {
//   return console.log("Hello World!");
// }, 2000);
// // Executed right away
// console.log("Executed before A...");

// let waterLevel = 0;

// const pumpInterval = setInterval(() => {
//   waterLevel += 20;
//   console.log(`Water level is now: ${waterLevel}%`);

//   // The "Stop Condition"
//   if (waterLevel >= 100) {
//     console.log("Tank is full! Turning off pump...");
//     clearInterval(pumpInterval);
//   }
// }, 1000);

// let i = 10;
// const countDown = setInterval(() => {
//   console.log("lets count", i);
//   i -= 1;
//   if (i <= 0) {
//     console.log(" count finshed.");
//     clearInterval(countDown);
//   }
// }, 2000);

// const countDown = setInterval(() => {
//   const i = 10;
//   console.log(" lets count", i);
//   i -= 1;
//   if (i <= 0) {
//     console.log("count finshed");
//     clearInterval(countDown);
//   }
// }, 1000);

let i = 10;
const countDown = setInterval(() => {
  console.log("let count:", i);

  i -= 1;
  if (i <= 0) {
    console.log(" the count is finished");
    clearInterval(countDown);
  }
}, 2000);
