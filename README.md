[![npm version](https://badge.fury.io/js/chalky.svg)](https://badge.fury.io/js/chalky)

`npm i chalky` / `yarn add chalky`

# chalky

# Table of Contents

 - [About](#about)
 - [Demos](#demos)
   - [Chaining](#chaining)
   - [Color priority in chain](#color-priority-in-chain)
   - [Rainbow](#rainbow)
 - [Properties / API](#properties)
 - [Why?](#why)

 ---

# About

Like [chalk](https://www.npmjs.com/package/chalk) with fewer features, smaller in size ([905 bytes](https://bundlephobia.com/result?p=chalky@)), and self-contained ([zero dependencies](https://www.npmjs.com/package/chalky?activeTab=dependencies)).  Think of `chalky` like a 'stripped down', basic version of [chalk](https://www.npmjs.com/package/chalk).. 

`chalky` aims to provide a [chalk](https://www.npmjs.com/package/chalk)-like experience, but for the most basic of console color features. Simple and small. 'Cheaply' add color to your console without worrying about the size of `node_modules`.

We're not quite hardened [chalk](https://www.npmjs.com/package/chalk), but we're still `chalky` :smirk: 

 ---

# Demos

### Chaining 

  - Like [chalk](https://www.npmjs.com/package/chalk), chain methods together to change the foreground color, background color, add formatting (italic, bold, underline, etc..), for unique color/formatting combinations.

```javascript
const chalky = require('chalky');

console.log(
  chalky.italic.bgBlack.red.bold("Lorem ipsum dolor sit amet")
);
```

 - Output:
<img src="https://raw.githubusercontent.com/oze4/chalky/master/docs/demo_0.png" width="300" height="40" alt="demo"/>

### Color priority in chain

 - The last color in the chain is what gets used:

```javascript
const chalky = require('chalky');

// This line..
const a = chalky.red.green.blue.bgRed.bgBlack.bgYellow("Lorem ipsum dolor sit amet");
// ...is equivalent to this line
const b = chalky.blue.bgYellow("Lorem ipsum dolor sit amet");

console.log(`This:         ${a}`);
console.log(`Should equal: ${b}`);
```
 - Output:
<img src="https://raw.githubusercontent.com/oze4/chalky/master/docs/demo_1.png" width="300" height="40" alt="demo"/>

<br />

```javascript
const chalky = require('chalky');

// This line..
const a = chalky.red.blue("Lorem ipsum dolor sit amet");
// ...is equivalent to this line
const b = chalky.blue("Lorem ipsum dolor sit amet");

console.log(`This:         ${a}`);
console.log(`Should equal: ${b}`);
```

 - Output:
<img src="https://raw.githubusercontent.com/oze4/chalky/master/docs/demo_2.png" width="300" height="40" alt="demo"/>

### Rainbow

 - Use `chalky.rainbow('Some string')` to 'rainbowify' a string

```javascript
const chalky = require('chalky');

console.log(
  chalky.rainbow("Lorem ipsum dolor sit amet")
);
```

 - Output:
<img src="https://raw.githubusercontent.com/oze4/chalky/master/docs/demo_rbow.png" width="300" height="40" alt="demo"/>

---

# Properties

 - **Foreground Colors:**
   - `black`
   - `red`
   - `green`
   - `yellow`
   - `blue`
   - `magenta`
   - `cyan`
   - `white`
   
 - **Background Colors:**
   - `bgBlack`
   - `bgRed`
   - `bgGreen`
   - `bgYellow`
   - `bgBlue`
   - `bgMagenta`
   - `bgCyan`
   - `bgWhite`
 
 - **Formatting:**
   - `bold`
   - `light`
   - `italic`
   - `underline`
   - `blink`
   - `inverse`
   - `hidden`

---
   
# Why?

Two reasons... 

I wanted to understand:
 - How chalk was able to use properties with the same name as both a getter and method on the same object
   - For example, you can do `chalk.blue('foo');` and `chalk.blue.bold('foo');` (`.blue` is being used as both a method and getter)
 - How chalk was able to chain these properties/methods/getters
 
 While modified, some of the code in this repo may resemble chalk as I followed the same logic.
