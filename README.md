# SmallChalk
Like Chalk.js, but smaller and with fewer features. Meant for rapid prototyping without worrying about package.json bloat

# Example

You can chain methods/getters just like you can in Chalk.js:

```javascript
const smallChalk = require('./SmallChalk');

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
