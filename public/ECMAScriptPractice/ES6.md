# Good practices

- `;`
- `===` vs `==`
- `'use strict';` identifies some potential errors before running the code.
- prefer `let` or `const`, don't use `var`
  - `const` and immutable string and object `const john = Object.freeze({firstName: "John", age: 20})`;

## functions in ECMAScript

```js
const max = function(a, b) {
  if (a > b) {
    return a;
  }

  return b;
};

console.log(max(1, 3));
console.log(max(4, 2));
console.log(max(2, 7, 1));
```

### arguments of function

```js
'use strict';
const max = function() {
  console.log(arguments instanceof Array);

  let large = arguments[0];

  for (let i = 0; i < arguments.length; i++) {
    if (arguments[i] > large) {
      large = arguments[i];
    }
  }

  return large;
};

console.log(max(2, 1, 7, 4));
```

parameter and default value

```js
const fileTax = function(papers, dateOfFiling = new Date()) {
  console.log('dateOfFiling: ' + dateOfFiling.getFullYear());
};

fileTax('stuff', new Date('2016-12-31'));
fileTax('stuff');
```

```js
//the righter parameter has access to the left ones, not work in reverse.
const computeTax = function(amount, stateTax = 15, localTax = stateTax * 0.1) {
  console.log('stateTax: ' + stateTax + ' localTax: ' + localTax);
};

computeTax(100, 10, 2);
computeTax(100, 10);
computeTax(100);
```

```js
const fetchData = function(
  id,
  location = { host: 'localhost', port: 443 },
  uri = 'employees'
) {
  console.log(
    'Fetch data from https://' + location.host + ':' + location.port + '/' + uri
  );
};

fetchData(1, { host: 'agiledeveloper', port: 404 }, 'books');
fetchData(1, { host: 'agiledeveloper', port: 404 });
fetchData(2);

fetchData(3, undefined, 'books');

const badFetchData = function(
  location = { host: 'localhost', port: 443 },
  id,
  uri = 'employees'
) {
  console.log(
    'Fetch data from https://' + location.host + ':' + location.port + '/' + uri
  );
};

badFetchData(undefined, 4, 'magazines');
```

```js
const sortByTitle = function(books) {
  const byTitle = function(book1, book2) {
    return book1.title.localeCompare(book2.title);
  };

  return books.slice().sort(byTitle);
};

const books = [
  { title: 'Who Moved My Cheese' },
  { title: 'Great Expectations' },
  { title: 'The Power of Positive Thinking' }
];

console.log(sortByTitle(books));

const sortByTitle = function(books, ascending = true) {
  const multiplier = ascending ? 1 : -1;

  const byTitle = function(book1, book2) {
    return book1.title.localeCompare(book2.title) * multiplier;
  };

  return books.slice().sort(byTitle);
};

const books = [
  { title: 'Who Moved My Cheese' },
  { title: 'Great Expectations' },
  { title: 'The Power of Positive Thinking' }
];

console.log(sortByTitle(books));
console.log(sortByTitle(books, false));
```

rest parameter ... in parameter list

- at most one rest parameter in the list
- rest parameter has to be the last formal parameter

```js
const func = function(...one, a) { //invalid
};

const func = function(...one, ...two) { //invalid
};

const notAllowed = function(first, second, ...moreValues = [1, 2, 3]) { //invalid
};
```

```js
const names1 = ['Laurel', 'Hardy', 'Todd'];
const names2 = ['Rock'];

const sayHello = function(name1, name2) {
  console.log('hello ' + name1 + ' and ' + name2);
};

sayHello(...names1); //hello Laurel and Hardy
sayHello(...names2); //hello Rock and undefined
```

```js
const max = function(...values) {
  console.log(values instanceof Array);

  let large = values[0];

  for (let i = 0; i < values.length; i++) {
    if (values[i] > large) {
      large = values[i];
    }
  }

  return large;
};

const max = function(...values) {
  return values.reduce((large, e) => (large > e ? large : e), values[0]);
};

console.log(max(2, 1, 7, 4));
```

spread operator ... in arguments to pass in any iterable objects

- can be used with array
- can be used with object for shallow-copying

```js
const greet = function(...names) {
  console.log('hello ' + names.join(', '));
};

const jack = 'Jack';
const jill = 'Jill';
greet(jack, jill);

const tj = ['Tom', 'Jerry'];
greet(tj[0], tj[1]);

greet(...tj);

greet.apply(null, tj); //no more stinky null
```

```js
const names1 = ['Tom', 'Jerry'];
const names2 = ['Butch', 'Spike', 'Tyke'];

console.log([...names1, 'Brooke']); //[ 'Tom', 'Jerry', 'Brooke' ]
console.log([...names1, ...names2]); //[ 'Tom', 'Jerry', 'Butch', 'Spike', 'Tyke' ]
console.log([...names2, 'Meathead', ...names1]); //[ 'Butch', 'Spike', 'Tyke', 'Meathead', 'Tom', 'Jerry' ]

const patternAndFlags = ['r', 'i'];

const regExp = new RegExp(...patternAndFlags);
console.log('brother'.replace(regExp, '')); //bother
```

```js
const mixed = function(name1, name2, ...names) {
  console.log('name1: ' + name1); //name1: Tom
  console.log('name2: ' + name2); //name2: Jerry
  console.log('names: ' + names); //names: Tyke,Spike
};

mixed('Tom', ...['Jerry', 'Tyke', 'Spike']);
```

```js
const product = function(first, second = 1, ...moreValues) {
  console.log(first + ', ' + second + ', length:' + moreValues.length);
};

product(10, 20, 30, 40, 50); //10, 20, length:3
product(10, 20); //10, 20, length:0
product(10); //10, 1, length:0
product(10, undefined, 4, 5); //10, 1, length:2
product(...[21, 22, 23, 24]); //21, 22, length:2
```

```js
const sam = { name: 'Sam', age: 2 };

console.log(sam); //{ name: 'Sam', age: 2 }
console.log({ ...sam, age: 3 }); //{ name: 'Sam', age: 3 }
console.log({ ...sam, age: 4, height: 100 }); //{ name: 'Sam', age: 4, height: 100 }
console.log(sam); //{ name: 'Sam', age: 2 }
```

## iterator

```js
const names = ['Sara', 'Jake', 'Pete', 'Mark', 'Jill'];

// old way
for (let i = 0; i < names.length; i++) {
  console.log(names[i]);
}

// new way
for (const name in names) {
  console.log(name);
}

for (const entry of names.entries()) {
  console.log(entry);
}
//[ 0, 'Sara' ]
//[ 1, 'Jake' ]
//[ 2, 'Pete' ]
//[ 3, 'Mark' ]
//[ 4, 'Jill' ]

// with destructing
for (const [i, name] of names.entries()) {
  console.log(i + '--' + name);
}
```

## symbol

JavaScript previously has 5 primitive types: number, string, boolean, null and undefined. ECMA 6 added symbol primitive type.
