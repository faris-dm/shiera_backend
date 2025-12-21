let i = 5;
const Loading = setInterval(() => {
  console.clear();
  console.log("Loading ...");

  i -= 1;
}, 1000);

setTimeout(() => {
  console.log("Done after 5 seconds");

  clearInterval(Loading);
}, 5000);
