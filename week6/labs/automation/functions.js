// functions.js

// Exporting an object with functions
module.exports = {
    // Function that returns the integer 2
    returnTwo: function() {
      return 2;
    },
  
    // Function that returns a greeting message with the provided name
    greeting: function(name) {
      return "Hello, " + name + ".";
    },
  
    // Function that returns the sum of num1 and num2
    add: function(num1, num2) {
      return num1 + num2;
    }
  };
  