let i = 10;
const countDown = setInterval(() => {
  console.log("let count:", i);

  i -= 1;
  if (i <= 0) {
    console.log("Time’s up!");
    clearInterval(countDown);
  }
}, 2000);
