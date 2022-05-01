/* Read through the following code. Why will it log 'debugging'?
*/

function debugIt() {
  const status = 'debugging';
  function logger() {
    console.log(status);
  }

  logger();
}

debugIt();

// hoisted

// function debugIt() {
//   function logger() {
//     console.log(status);
//   }
//   const status;
//   status = 'debugging';

//   logger();
// }

// debugIt();

/* It will log 'debugging' because of scoping rules. */