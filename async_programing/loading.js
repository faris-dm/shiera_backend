let i = 5;
const Loading = setInterval(() => {
  console.log("Loading ...");
  i -= 1;
  if (i <= 0) {
    console.log("Done after 5 seconds");
    clearInterval(Loading);
  }
}, 1000);
