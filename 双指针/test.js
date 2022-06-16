let str = "asdfoijaoisdjg.@#f%oij983245asdgf";

let res = str.replace(/./g, "$&" + " ");
console.log(res);
