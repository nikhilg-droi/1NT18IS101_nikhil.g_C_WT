const set1 = new Set();

set1.add(65);   // add(); method
set1.add('sixty five');
console.log(set1.size);  // size method;

set1.clear();   // clear(); method
console.log(set1.size);

set1.add({x:10}).add({x:20}).add({x:30}).add({x:5});
console.log(set1.size);
set1.forEach((point) => {   // forEach(); for iteration
    if (point.x > 10) {
      set1.delete(point);  // delete(); method
    }
  });
  console.log(set1.size);

const iterator1 = set1.entries();  // entries(); to print the data- "Note:observe data duplication"
for (const entry of iterator1) {
  console.log(entry);
}

console.log(set1.has(1));  // has(); method to check the element existence.
console.log(set1.has(5));

const iterator2 = set1.values();  // values(); to print the data- "Note:no data duplication"
for (const entry1 of iterator2) {
  console.log(entry1);
}


