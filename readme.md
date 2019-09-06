# n-map

`n-map` is a simple Javascript / Typescript library yo map an array to multiple other arrays.

## Install

`npm install @~gregoryalary/n-map --save`

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
