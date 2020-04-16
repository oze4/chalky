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
      styles = [...styles, { name, value: `\x1b[${index}m` }];
    }
  });

  return styles;
}

function createColors(fgbg) {
  const isForeground = fgbg === 'fg' || fgbg === 'foreground';
  const isBackground = fgbg === 'bg' || fgbg === 'background';
  const styles = createFgBgStyles(isForeground ? '3' : isBackground ? '4' : null); // foreground codes use a 3, while background codes use a 4

  if (!styles) {
    throw new Error(`Unable to create ${isForeground ? 'foreground' : isBackground ? 'background' : ''} colors`);
  }

  return isForeground
    ? styles
    : isBackground
    ? styles && styles.map((s) => ({
        ...s,
        name: `bg${s.name.charAt(0).toUpperCase() + s.name.slice(1)}`,
      }))
    : [];
}

function rainbowify(str) {
  if (typeof str === 'string') {
    const rygb = ['\x1b[31m', '\x1b[33m','\x1b[32m', '\x1b[34m']; // red, yellow, green, blue
    const lineEnd = '\x1b[0m';
    let i = 0;

    return Array.from(str).reduce((rbow, letter) => {
      let colorized = ' ', _letter = letter.replace(/\s+/g, '');

      if (_letter !== '') {
        colorized = `${rygb[i % rygb.length]}${_letter}`;
        i = i + 1;
      }

      rbow += colorized;
      return rbow;
    }, '') + lineEnd;
  }
}

module.exports = { createFgBgStyles, createFormatStyles, createColors, rainbowify };
