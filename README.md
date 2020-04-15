[![npm version](https://badge.fury.io/js/smallchalk.svg)](https://badge.fury.io/js/smallchalk)

# SmallChalk
Core functionality like Chalk.js but with fewer features. Meant for rapid prototyping without worrying about package.json bloat.

 - #### Small
   - coming in at only **819B gzipped & minified**!

 - #### Simple
   - self contained, **with *ZERO* dependencies**!

# Installation

```
npm i smallchalk
```

or

```
yarn add smallchalk
```

# Example

You can chain methods/getters just like you can in Chalk.js:

```javascript
const smallChalk = require('smallchalk');

const message = smallChalk.bgRed.black.bold.underline("Lorem ipsum dolor sit amet");

console.log(message);
```

# Properties

 - ### Foreground Colors:
   - `black`
   - `red`
   - `green`
   - `yellow`
   - `blue`
   - `magenta`
   - `cyan`
   - `white`
   
 - ### Background Colors:
   - `bgBlack`
   - `bgRed`
   - `bgGreen`
   - `bgYellow`
   - `bgBlue`
   - `bgMagenta`
   - `bgCyan`
   - `bgWhite`
 
 - ### Formatting:
   - `bold`
   - `light`
   - `italic`
   - `underline`
   - `blink`
   - `inverse`
   - `hidden`
   
# Why?

Two reasons... I wanted to understand:
 - how Chalk.js was able to use properties with the same name as both a getter and method on the same object
   - for example, you can do `chalk.blue('foo');` and `chalk.blue.bold('foo');` (`.blue` is being used as both a method and getter)
 - how Chalk.js was able to chain these properties/methods/getters
 
 While modified, some of the code in this repo may resemble Chalk.js as I followed the same logic.
