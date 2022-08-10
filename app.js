console.log("Bismillah...");

// Symbol

console.log("-----Symbol-----");

const symbol1 = Symbol.for("Symbol 1");
const symbol2 = Symbol.for("Symbol 1");

console.log(symbol1);
console.log(symbol2);

console.log(symbol1 == symbol2);

const id = Symbol("Id");

const obj = {
  name: "Rakib",
  [id]: 1,
};

console.log(obj[id]);

for (let key in obj) {
  console.log(key);
}

// Iterator

console.log("-----Iterator-----");

const arr = [1, 2, 3, 4, 5];

const iterator = arr[Symbol.iterator]();

console.dir(iterator);

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

// Generator

console.log("-----Generator-----");

function* generator() {
  yield 1;
  yield 2;
  return "finished";
  yield 3;
}

// console.log(generator);

const genIterator = generator();

console.log(genIterator.next());
console.log(genIterator.next());
console.log(genIterator.next());
console.log(genIterator.next());

// Making Object Iterable

const object = {
  value1: 1,
  value2: 2,
  value3: 3,
  value4: 4,
};

// console.log({ ...object });

// console.log(object);

// console.log(Object.entries(object));

Object.prototype[Symbol.iterator] = function () {
  const entries = Object.entries(this);
  let index = 0;
  count = entries.length - 1;

  return {
    next() {
      if (count >= 0) {
        let result = { value: entries[index][1], done: false };
        index++;
        count--;
        return result;
      } else {
        return { value: undefined, done: true };
      }
    },
  };
};

console.log(object[Symbol.iterator]());

console.log(Array.prototype[Symbol.iterator]());

for (let key of object) {
  console.log(key);
}

const objIterator = object[Symbol.iterator]();

console.log(objIterator.next());
console.log(objIterator.next());
console.log(objIterator.next());
console.log(objIterator.next());
console.log(objIterator.next());
console.log(objIterator.next());
console.log(objIterator.next());
console.log(objIterator.next());
console.log(objIterator.next());
console.log(objIterator.next());

console.log({ ...object });
const array = [1, 2, 3];

const iterator1 = array[Symbol.iterator]();

console.log(iterator1.next());
console.log(iterator1.next());
console.log(iterator1.next());
console.log(iterator1.next());

// Making Object Iterable Using Iterator

const object2 = {
  value1: 1,
  value2: 2,
  value3: 3,
  value4: 4,
};

console.log(Object.entries(object2));
console.log(Object.keys(object2));
console.log(Object.values(object2));
console.log(Object.values(object2).length);

Object.prototype[Symbol.iterator] = function () {
  const values = Object.values(this);
  let index = 0;
  return {
    next() {
      if (index < values.length) {
        let result = { value: values[index], done: false };
        index++;
        return result;
      } else {
        return { value: undefined, done: true };
      }
    },
  };
};

for (let key of object2) {
  console.log(key);
}

const object2Iterator = object2[Symbol.iterator]();

console.log(object2Iterator.next());
console.log(object2Iterator.next());
console.log(object2Iterator.next());
console.log(object2Iterator.next());
console.log(object2Iterator.next());

console.log([...object2]);

const arr2 = [1, 2, 3];

const iterator2 = arr2[Symbol.iterator]();

console.log(iterator2.next());
console.log(iterator2.next());
console.log(iterator2.next());
console.log(iterator2.next());

// Making Object Iterable Using Generator

function* generator() {
  yield 1;
  yield 2;
  yield 3;
}

const genIterator2 = generator();

console.log(genIterator2.next());
console.log(genIterator2.next());
console.log(genIterator2.next());
console.log(genIterator2.next());

const object3 = {
  value1: 1,
  value2: 2,
  value3: 3,
  value4: 4,
  [Symbol("value5")]: 5,
};

Object.prototype[Symbol.iterator] = function* () {
  for (let i in this) {
    yield this[i];
  }
};

for (let value of object3) {
  console.log(value);
}

const iterator4 = object3[Symbol.iterator]();

console.log(iterator4.next());
console.log(iterator4.next());
console.log(iterator4.next());
console.log(iterator4.next());
console.log(iterator4.next());

console.log(object3);
