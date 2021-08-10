// console.log(arguments);
// console.log(require("module").wrapper);
//module exports
// const C = require("./test-module-1");

// const calc1 = new C();
// console.log(calc1.add(2, 5));

// const calc2 = new C();
// console.log(calc2.multiply(2, 5));

//exports
// const calc3 = require("./test-module-2");
const { add, multiply, divide } = require("./test-module-2");

console.log(add(2, 6));

//Caching
require("./test-module-3")();
require("./test-module-3")();
require("./test-module-3")();
