
var kittens = ["Milo", "Otis", "Garfield"]; 

function destructivelyAppendKitten(name) {
  kittens.push(name);
  return kittens;
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name);
  return kittens;
}

function destructivelyRemoveLastKitten() {
  kittens.pop();
  return kittens;
}

function destructivelyRemoveFirstKitten() {
  kittens.shift();
  return kittens;
}

function appendKitten(name) {
  var kittens = [...kitens, "Broom"];
  return kittens;
}

function prependKitten(name) {

  
}

function removeFirstKitten() {

  
}

function removeLastKitten() {
  
}

//var cities = ["New York", "San Francisco"]
 
// we can assign it to the existing `cities` variable
// cities = ["Philadelphia", ...cities]