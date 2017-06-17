'esversion: 6';
var Person = function(firstAndLast) {
    // Complete the method below and implement the others similarly
  this.getFirstName = (firstAndLast) => firstAndLast.split(' ')[0];
  this.getLastName = (firstAndLast) => firstAndLast.split(' ')[1];
  this.getFullName = (firstAndLast) => firstAndLast;
  this.setFullName = (fullName) => firstAndLast = fullname;
  
    return firstAndLast;
};

var bob = new Person('Bob Ross');
 bob.getFullName();
console.log(Object.keys(bob).length);
