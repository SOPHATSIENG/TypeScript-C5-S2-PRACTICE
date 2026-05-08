# C5-S2 Practice (TypeScript)

This repository contains the solution for **C5-S2 Practice** about abstract classes and shape inheritance in TypeScript.

## Exercise Requirements

- Include a `tsconfig.json` file.
- Build JavaScript output into the `dist/` folder.
- Put each class in a separate file (example: `Rectangle.ts`).
- Create a `Main.ts` file to test all shapes.

## Exercise Tasks

### A) Abstract Shape

Create an abstract class `Shape` with:

- Position fields: `leftX` and `bottomY` (left-bottom point of the shape)
- Abstract methods:
  - `getWidth()`
  - `getHeight()`
  - `getArea()`

### B) Square

Create class `Square` that:

- Extends `Shape`
- Is defined by `leftX`, `bottomY`, and `size`
- Implements:
  - `getWidth()`
  - `getHeight()`
  - `getArea()`

### C) Rectangle

Create class `Rectangle` that:

- Extends `Shape`
- Is defined by `leftX`, `bottomY`, `rightX`, and `topY`
- Implements:
  - `getWidth()`
  - `getHeight()`
  - `getArea()`

### D) Circle

Create class `Circle` that:

- Extends `Shape`
- Is defined by `leftX`, `bottomY`, and `radius`
- Implements:
  - `getWidth()`
  - `getHeight()`
  - `getArea()`

## Solution Files

- `src/Shape.ts`
- `src/Square.ts`
- `src/Rectangle.ts`
- `src/Circle.ts`
- `src/Main.ts`

## Completion Checklist

- [x] Q1: Implement `Shape`
- [x] Q2: Implement `Square` constructor
- [x] Q3: Implement `Square` methods
- [x] Q4: Implement `Rectangle`
- [x] Q5: Implement `Rectangle` methods
- [x] Q4: Implement `Circle`
- [x] Q5: Implement `Circle` methods

## Run the Project

Install dependencies:

```bash
npm install
```

Compile TypeScript:

```bash
npx tsc
```

Run:

```bash
node dist/Main.js
```
