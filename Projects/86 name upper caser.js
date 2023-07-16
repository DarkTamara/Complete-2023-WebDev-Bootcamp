var names = prompt("what is your name");
var firstLetter = names.slice(0,1).toUpperCase();
var rest = names.slice(1,names.length);

alert ("Hello, " + firstLetter + rest);