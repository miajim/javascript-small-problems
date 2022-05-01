/* The following code demonstrates the Pomodoro technique. Although it seems to work in principle, it never prints the minute count from line 11 (line 15 below). What is wrong?

*/

var tasks = 10;
var checkmarks = 0;
var sessions = 0;
var minutes = 0;

function pomodoro() {
  console.log('Work.');

  while (minutes < 25) {
    minutes += 1;
    console.log('...' + minutes);
  }

  console.log('PLING!');

  sessions += 1;
  checkmarks += 1;

  if (checkmarks === tasks) {
    console.log('Done!');
    return;
  }

  var rest;
  if (sessions === 4) {
    sessions = 0;
    rest = 30;
  } else {
    rest = 5;
  }

  console.log('Rest for ' + rest + ' minutes.');

  minutes = 0; // remove var to reset minutes
  pomodoro();
}

pomodoro();

// hoisted

// function pomodoro() {
//   var rest;
//   var minutes; // minutes is undefined 
  
//   console.log('Work.');

//   while (minutes < 25) { // this never executes
//     minutes += 1;
//     console.log('...' + minutes);
//   }

//   console.log('PLING!');

//   sessions += 1;
//   checkmarks += 1;

//   if (checkmarks === tasks) {
//     console.log('Done!');
//     return;
//   }


//   if (sessions === 4) {
//     sessions = 0;
//     rest = 30;
//   } else {
//     rest = 5;
//   }

//   console.log('Rest for ' + rest + ' minutes.');

//   minutes = 0;
//   pomodoro();
// }

// var tasks = 10;
// var checkmarks = 0;
// var sessions = 0;
// var minutes = 0;

// pomodoro();
