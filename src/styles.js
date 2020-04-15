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

function createFormatStyles() {
  let styles = [];
  
  formats.forEach((name, index) => {
    const stylesToSkip = [6];
    let i = index + 1; // We want to start at 1

    if (!stylesToSkip.includes(i)) {
      styles = [...styles, { name, value: `\x1b[${i}m` }];
    } // Skip code 6
  });

  return styles;
}

module.exports = { createFgBgStyles, createFormatStyles };
