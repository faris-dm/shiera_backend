let i = 5;
const Loading = setInterval(() => {
  console.log("Loading ...");
  i -= 1;
}, 1000);

console.log("  five passed");
setTimeout(() => {
  console.log("  five  minuts passed ");
  clearInterval(Loading);
});
