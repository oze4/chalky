[![npm version](https://badge.fury.io/js/chalky.svg)](https://badge.fury.io/js/chalky)

`npm i chalky` / `yarn add chalky`

# chalky

# Table of Contents

 - [About](#about)
 - [Demos](#demos)
 - [Properties / API](#properties)
 - [Why?](#why)

 ---

# About

Like [chalk](https://www.npmjs.com/package/chalk) with fewer features, smaller in size ([772 bytes](https://bundlephobia.com/result?p=chalky@)), and self-contained ([zero dependencies](https://www.npmjs.com/package/chalky#dependencies)).  Think of `chalky` like a 'stripped down', basic version of [chalk](https://www.npmjs.com/package/chalk).. 

`chalky` aims to provide a [chalk](https://www.npmjs.com/package/chalk)-like experience, but for the most basic of console color features. Simple and small. 'Cheaply' add color to your console without worrying about the size of `node_modules`.

We're not quite hardened [chalk](https://www.npmjs.com/package/chalk), but we're still `chalky` :smirk: 

 ---

# Demos

 - Chain like [chalk](https://www.npmjs.com/package/chalk):

```javascript
const chalky = require('chalky');

chalky.bgRed.black.bold.underline("Lorem ipsum dolor sit amet");
```

 - The last color in the chain is what gets used:

```javascript
// This line..
chalky.red.green.blue.bgRed.bgBlack.bgYellow("Lorem ipsum dolor sit amet");
// ...is equivalent to this line
chalky.blue.bgYellow("Lorem ipsum dolor sit amet");


// This line..
chalky.red.blue("Lorem ipsum dolor sit amet");
// ...is equivalent to this line
chalky.blue("Lorem ipsum dolor sit amet");
```

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
