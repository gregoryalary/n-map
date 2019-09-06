# n-map

`n-map` is a simple Javascript / Typescript library that map an array to several other arrays.

## Install

`npm install --save n-map`

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
