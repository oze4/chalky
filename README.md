[![npm version](https://badge.fury.io/js/smallchalk.svg)](https://badge.fury.io/js/smallchalk)

# SmallChalk
Core functionality like Chalk.js but with fewer features. Meant for rapid prototyping without worrying about package.json bloat.

Extremely small package size, coming in at only **819B gzipped & minified**!

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

const message = smallChalk.bgRed.black.bold.underline("I am a test message");

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
