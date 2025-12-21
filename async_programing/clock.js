function clock() {
  console.clear();
  let d = new Date();
  let sec = d.getSeconds();
  let min = d.getMinutes();
  let Hour = d.getHours();
  let format = Hour >= 12 ? "PM" : "AM";

  Hour = Hour % 12 || 12;

  Hour = Hour.toString().padStart(2, 0);

  min = min.toString().padStart(2, 0);
  sec = sec.toString().padStart(2, 0);

  let time = `${Hour}:${min}:${sec}:${format}`;
  console.log(` the format: ${time}`);
  //   process.stdout.write(`\r time: ${time}`);
  //   console.log(time);
}

clock();
setInterval(clock, 1000);
