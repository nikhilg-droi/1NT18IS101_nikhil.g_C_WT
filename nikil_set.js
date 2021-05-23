let glist = new Set();
let g1 = { type: "sugar", day: 1 };
let g2 = { type: "corn_flour", day: 0.5};
let g3 = { type: "chillies", day: 0.25};
// Let's add each event to the set
glist.add(g1);
glist.add(g2);
glist.add(g3);
for (let item of glist.values()) {
console.log(item);
}
console.log(glist.has(g2));
glist.delete(g3);
for (let value of glist) {
console.log(value);
}
console.log(glist.size);
glist.clear();
console.log(glist.has(g1));
/*
console.log(events.size);
events.clear();
console.log(events.has(event4));*/
let cities = new Set();
cities.add("Banglore");
cities.add("Mumbai");
cities.add("chennai");
cities.add("Hyderabad");
cities.forEach((cities) => {
console.log(cities);
});
//Converting Set into an arrays
let set = new Set([19, "string", {"objKey": "objVal"}]);
set.add(true);
let arr = [...set]; // destructuring
console.log(arr);
//Converting Arrays into an sets
let arr2 = [15, 15, "string", {"objKey": "objVal"}];
let arr2converted = [...new Set(arr2)];
console.log(arr2converted);
//we have duplicate items in an array and we want to filter them out.
//We can do this in two ways
let users = ["M", "K", "M", "R", "K"];
/*function unique(users) {
return Array.from(new Set(users));
}
console.log(unique(users));*/
let set3 = new Set(users);
let arrFromSet = [...set3];
console.log(arrFromSet);
/*let’s say we want to add all the users from above to a new set and a
new array.
Let’s see which collection performs the operation faster*/
let arr1 = [], set4 = new Set();
let users2 = ["English", "German", "Latin", "French", "English",
"German", "Latin",  "French"];
for (let i = 0; i < users2.length; i++) {
arr1.push(users2[i]);
set4.add(users2[i]);
}
let result;
console.time('Array');
result = arr1.indexOf("German") !== -1;
console.timeEnd('Array');
console.time('Set');
result = set4.has("German");
console.timeEnd('Set');
