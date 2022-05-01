// let Account = (function() {

//   function isValidPassword(testPassword) {
//     return this.userPassword === testPassword;
//   }

//   function getRandomLetterNumber() {
//     let randomIndex = Math.floor(Math.random() * 62);
//     return 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRTSUVWXYZ1234567890'[randomIndex];
//   }

//   function anonymize() {
//     let result = '';

//     for (let i = 0; i < 16; i += 1) {
//       result += getRandomLetterNumber();
//     }

//     return result;
//   }

//   return {
//     init: function(email, password, firstName, lastName) {      
//       this.userEmail = email;
//       this.userPassword = password;
//       this.userFirstName = firstName;
//       this.userLastName = lastName;
//       this.displayName = anonymize();
      
//       return Object.create(this);
//       // let userEmail;
//       // let userPassword;
//       // let userFirstName;
//       // let userLastName;
//       // this.displayName = anonymize();
      
//       // return Object.assign({
//       //   initialize: (function() {
//       //     userEmail = email;
//       //     userPassword = password;
//       //     userFirstName = firstName;
//       //     userLastName = lastName;
//       //   })(), 
//       // }, this);

//     },

//     reanonymize: function(password) {
//       if (isValidPassword.call(this, password)) {
//         this.displayName = anonymize();
//         return true
//       } else {
//         return 'Invalid Password';
//       }
//     },

//     resetPassword: function(currentPassword, newPassword) {
//       if (isValidPassword.call(this, currentPassword)) {
//         this.userPassword = newPassword;
//         return true;
//       } else {
//         return 'Invalid Password';
//       }
//     },

//     firstName: function(password) {
//       if (isValidPassword.call(this, password)) {
//         return this.userFirstName;
//       } else {
//         return 'Invalid Password';
//       }
//     },

//     lastName: function(password) {
//       if (isValidPassword(password)) {
//         return userLastName;
//       } else {
//         return 'Invalid Password';
//       }
//     },

//     email: function(password) {
//       if (isValidPassword(password)) {
//         return userEmail;
//       } else {
//         return 'Invalid Password';
//       }
//     },
//   };
// })();

// // console.log(Account);
// let fooBar = Object.create(Account).init('foo@bar.com', '123456', 'foo', 'bar');
// // console.log(fooBar);
// // console.log(fooBar.__proto__);

// // console.log(fooBar.firstName);                     // returns the firstName function
// // console.log(fooBar.email);                         // returns the email function
// // console.log(fooBar.firstName('123456'));           // logs 'foo'
// // console.log(fooBar.firstName('abc'));              // logs 'Invalid Password'
// console.log(fooBar.displayName);                   // logs 16 character sequence
// // console.log(fooBar.resetPassword('123', 'abc'))    // logs 'Invalid Password'
// // console.log(fooBar.userPassword);
// console.log(fooBar.resetPassword('123456', 'abc')) // logs true

// let displayName = fooBar.displayName;
// console.log(fooBar.reanonymize('abc'));                         // returns true
// console.log(fooBar.displayName);
// console.log(displayName === fooBar.displayName);   // logs false

// let bazQux = Object.create(Account).init('baz@qux.com', '123456', 'baz', 'qux');
// console.log(bazQux.firstName('abc'));              // logs 'Invalid Password'
// console.log(bazQux.firstName('123456'));         
// // console.log(fooBar.email('abc'));                  // logs 'Invalid Password'

