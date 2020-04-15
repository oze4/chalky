[![npm version](https://badge.fury.io/js/smallchalk.svg)](https://badge.fury.io/js/smallchalk)

`npm i smallchalk` / `yarn add smallchalk`

# smallchalk
Core functionality like [Chalk.js](https://www.npmjs.com/package/chalk) but with fewer features. Meant for rapid prototyping without worrying about package.json bloat.

- **Small**: [coming in at only **772 bytes (gzipped & minified)**!](https://bundlephobia.com/result?p=smallchalk)
- **Simple**: self contained, **with *ZERO* dependencies**!

# Details

 - Chain methods/getters like in Chalk.js:

```javascript
const smChalk = require('smallchalk');

smChalk.bgRed.black.bold.underline("Lorem ipsum dolor sit amet");
```

 - The last color in the chain is what gets used:

```javascript
// This line..
smChalk.red.green.blue.bgRed.bgBlack.bgYellow("Lorem ipsum dolor sit amet");
// ...is equivalent to this line
smChalk.blue.bgYellow("Lorem ipsum dolor sit amet");


// This line..
smChalk.red.blue("Lorem ipsum dolor sit amet");
// ...is equivalent to this line
smChalk.blue("Lorem ipsum dolor sit amet");
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

Two reasons... 

I wanted to understand:
 - How Chalk.js was able to use properties with the same name as both a getter and method on the same object
   - For example, you can do `chalk.blue('foo');` and `chalk.blue.bold('foo');` (`.blue` is being used as both a method and getter)
 - How Chalk.js was able to chain these properties/methods/getters
 
 While modified, some of the code in this repo may resemble Chalk.js as I followed the same logic.
