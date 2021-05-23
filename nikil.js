let names = [{
    id: 1,
    name: 'Nikil'
    },
    {
    id: 2,
    name: 'map_method'
    },
    {
    id: 3,
    name: 'dark_knight'
    },
    {
    id: 4,
    name: 'Slovakia'
    },
    {
    id: 5,
    name: 'cloud_computing'
    }
]


let userNames = names.map(function(names) {
console.log(names.name)
});
let mapNms = [];
names.forEach(function (names) {
mapNms.push(names.name);
});

console.log(mapNms);

const user = new Map();
user.set('id', 1);
user.set('name', 'nikil');

console.log(user.get('id'));
let iterator = user.entries();
console.log(iterator.next().value);
console.log(iterator.next().value);
//Example of iteration over a map collection
let userIDs = new Map();
let user2 = {name: 'Jack'}, user3 = {name: 'Ron'}, user4 = {name:'Emma'};
userIDs.set(user2, 1) .set(user3, 2) .set(user4, 3);
// Method 1
for (let [name, id] of userIDs) {
console.log(name);
console.log(id);
}
// Method 2
userIDs.forEach((id, name) => {
console.log(name);
console.log(id);
});
//To convert an object to a map, we can use the Object.entries()
//method.
const obj = {
'name': 'Aaron',
'id': 1,
}
const map = new Map(Object.entries(obj));
console.log(map.get('name'))
//Compare an object to a map and see how they do in terms of
performance
let obj2 = {}, map2 = new Map();
let users4 = ["Apple", "Mango", "Banana", "Grapes", "Carrot", "Turnip",
"Apple", "Banana", "Turnip", "Mango"];
for (let i = 0; i < users4.length; i++) {
    obj2[i] = users4[i];
    map2.set(i, users4[i]);
    }
    let result;
    console.time('Object');
    result = obj2.hasOwnProperty("Mango");
    console.timeEnd('Object');
    console.time('Map');
    result = map2.has("Mango");
    console.timeEnd('Map');

