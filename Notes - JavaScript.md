## Check Type

### Array.isArray([]) => true

### (typeof 42) => 'number'

| typeof        | output      |
| ------------- | ----------- |
| 42            | 'number'    |
| 'a'           | 'string'    |
| true          | 'boolean'   |
| {}, [], null  | 'object'    |
| ()=>{}, class | 'function'  |
| undefined     | 'undefined' |
| null          | 'null'      |
| Symbol()      | 'symbol'    |

## String Methods

### Convert to/from ASCII code

- A-Z: 65-90, a-z: 97-122
- 'A'.charCodeAt(0) => 65
- String.fromCharCode(97) => 'a'

### Convert string to/from number

- Number('12.3') => 12.3
- Number('42px') => NaN
- parseInt('42px', 10) => 42
- String(42) => '42'

## Array Methods

- .indexOf()
- .map()
- .filter()
- .reduce()
- .join()
- .split()
- .slice()
- .splice()
- .sort()
- .reverse()
- .concat()
- .every()
- .some()
- .forEach()
- .fill()
