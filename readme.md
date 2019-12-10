# n-map

`n-map` is a simple Javascript / Typescript library to map an array to several other arrays.

[https://www.npmjs.com/package/@~gregoryalary/n-map](https://www.npmjs.com/package/@~gregoryalary/n-map)

## Install

#### npm

`npm install @~gregoryalary/n-map --save`

#### yarn

`yarn add @~gregoryalary/n-map`

## Example

### Typescript

```typescript
import {nmap} from "@~gregoryalary/n-map";

nmap<number>(2).bind([
  (elt: number): number  => elt - 1,
  (elt: number): number  => elt + 1
]).map([1, 2, 3]); // => [
                   //   [0, 1, 2],
                   //   [2, 3, 4]
                   // ]
```

### Javascript

```javascript
var nmap = require('./node_modules/@~gregoryalary/n-map/dist/index');

nmap.nmap(2).bind([
    (elt) => elt * 2,
    (elt) => String(elt)
]).map([0, 5, 10]); // => [
                    //   [0, 10, 20],
                    //   ['0', '5', '10']
                    // ]
```
