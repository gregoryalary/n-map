# n-map

`n-map` is a simple Javascript / Typescript library yo map an array to multiple other arrays.

## Install

`npm install @~gregoryalary/n-map --save`

## Example

### Typescript

```typescript
nmap<number>(2).bind([
  (elt: number): number  => elt - 1,
  (elt: number): number  => elt + 1
]).map([1, 2, 3]); // Will return [
                   //   [0, 1, 2],
                   //   [2, 3, 4]
                   // ]
```

### Javascript

```typescript
 // todo
```
