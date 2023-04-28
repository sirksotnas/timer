// Implement an alarm clock / timer which will beep after a specified amount of time has passed. The user can specify an unlimited number of alarms using command line arguments

/* No numbers are provided: Easy. It should just not beep at all and end immediately since no beeps should get scheduled.
An input is a negative number: Ignore/skip any numbers that are negative. We can't schedule anything in the past.
An input is not a number: Ignore/skip these as well, instead of attempting to call setTimeout with a non-number.
*/
const argvArr = process.argv.slice(2);

const alarm = function(arr) {
  for (const num of arr) {
    const ms = Number(num) * 1000;
    if (!isNaN(ms) && ms >= 0) {
      setTimeout(() => {
        process.stdout.write('\x07');
      }, ms);
    }
  }
};

alarm(argvArr);
/**
This will make it beep at:
3 seconds
5 seconds
9 seconds
10 seconds
15 seconds
 */