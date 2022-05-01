/*
The code below is expected to output the following when run:

> const helloVictor = createGreeter('Victor');
> helloVictor.greet('morning');
= Good Morning Victor

However, it instead results in an error. What is the problem with the code? Why isn't it producing the expected results?

Missing the caller `this` to specify that `morning` is a property of the calling object.
*/

function createGreeter(name) {
  return {
    name,
    morning: 'Good Morning',
    afternoon: 'Good Afternoon',
    evening: 'Good Evening',
    greet(timeOfDay) {
      let msg = '';
      switch (timeOfDay) {
        case 'morning':
          msg += `${this.morning} ${this.name}`; // added `this`
          break;
        case 'afternoon':
          msg += `${this.afternoon} ${this.name}`; // added `this`
          break;
        case 'evening':
          msg += `${this.evening} ${this.name}`; // added `this`
          break;
      }

      console.log(msg);
    },
  };
}

const helloVictor = createGreeter('Victor');
helloVictor.greet('morning');

// Further Exploration

// An alternative solution to this exercise is the following code. Why does it work? What concept does this demonstrate?
// rest of code omitted for brevity
/*
switch (timeOfDay) {
  case 'morning':
    msg += this.morning + ' ' + name;
    break;
  case 'afternoon':
    msg += this.afternoon + ' ' + name;
    break;
  case 'evening':
    msg += this.evening + ' ' + name;
    break;
}

// rest of code omitted for brevity
*/
/*
The code above demonstrates the fact that variables declared in an outer scope are accessible in an inner scope. 
The name variable being accessed is the parameter `name` of the `createGreeting` function, which is accessible throughout the body of the function.
*/