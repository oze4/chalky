// Order is EXTREMELY important with these arrays
const colors = [
  'black',     // 0
  'red',       // 1
  'green',     // 2
  'yellow',    // 3
  'blue',      // 4
  'magenta',   // 5
  'cyan',      // 6
  'white',     // 7
];
const formats = [
  // skip      // 0
  'bold',      // 1
  'light',     // 2
  'italic',    // 3
  'underline', // 4
  'blink',     // 5
  // skip      // 6
  'inverse',   // 7
  'hidden',    // 8
];

function createFgBgStyles(val) {
  return colors.map((name, index) => ({ name, value: `\x1b[${val}${index}m` }));
}

function createFormatStyles(stylesToSkip = [0, 6]) { // Skip codes 0, 6 by default
  let styles = [];

  formats.forEach((name, index) => {
    if (!stylesToSkip.includes(index)) {
      styles = [...styles, { name, value: `\x1b[${i}m` }];
    }
  });

  return styles;
}

module.exports = { createFgBgStyles, createFormatStyles };
