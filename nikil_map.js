let map1 = Object.prototype.toString.call(new Map());
console.log(map1);

let map2 = new Map();
map2.set(1,'one');  // set() method
map2.set(2,'two');
console.log(map2.size);
const iterator1 = map2[Symbol.iterator]();

for (const item of iterator1) {
  console.log(item);
}
console.log(map2.size);
map2.clear();          // clear(); to completely delete the data
console.log(map2.size); // size
map2.set(1,'three'); 
map2.set(2,'four');
const iterator2 = map2[Symbol.iterator]();

for (const item of iterator2) {
  console.log(item);
}
console.log(map2.delete(1));   // delete(); method
console.log(map2.has(1));
console.log(map2.size);

map2.set(3,'five');
let ittr = map2.entries();  // entries(); for itteration
console.log(ittr.next().value); 
console.log(ittr.next().value); 

let ittr1 = map2.keys();  // keys(); for itteration of only keys
console.log(ittr1.next().value); 
console.log(ittr1.next().value); 

let ittr2 = map2.values();  // entries(); for itteration of values only
console.log(ittr2.next().value); 
console.log(ittr2.next().value); 

function logMapElements(value, key, map) {
    console.log(`${key} = ${value}`);
}
  
new Map([['foo', 3], ['bar', {}], ['baz', undefined]]).forEach(logMapElements);
