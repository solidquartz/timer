let array = process.argv.slice(2); //arg 2 is first passed arg

//changes string to numbers
const timer = array.map(Number);

//puts timer array in order
timer.sort(function(a, b) {
  return a - b;
});

let beepTime = 0;

for (const time of timer) {

  if (time !== isNaN) {
    if (time >= 0) {

      setTimeout(() => {
        process.stdout.write('\x07');
      }, (beepTime + (time * 1000)));
      //adds each increment in seconds to the previous time
    }
  }
}