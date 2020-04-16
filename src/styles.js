const colors = {
  black: 0,
  red: 1,
  green: 2,
  yellow: 3,
  blue: 4,
  magenta: 5,
  cyan: 6,
  white: 7,
};

const formats = {
  bold: 1,
  light: 2,
  italic: 3,
  underline: 4,
  blink: 5,
  inverse: 7,
  hidden: 8,
};

function toStylesObj(obj, val = '') {
  return Object.keys(obj).map((name) => ({
    name,
    value: `\x1b[${val}${obj[name]}m`,
  }));
}

function createFgBgStyles(val) {
  return toStylesObj(colors, val);
}

function createFormatStyles() {
  return toStylesObj(formats);
}

function createColors(fgbg) {
  const isForeground = fgbg === 'fg' || fgbg === 'foreground';
  const isBackground = fgbg === 'bg' || fgbg === 'background';
  const styles = createFgBgStyles(
    isForeground ? '3' : isBackground ? '4' : null
  ); // foreground codes use a 3, while background codes use a 4

  if (!styles) {
    throw new Error(
      `Unable to create ${
        isForeground ? 'foreground' : isBackground ? 'background' : 'object. No parameters supplied. Params are required to create'
      } colors`
    );
  }

  return isForeground
    ? styles
    : isBackground
    ? styles &&
      styles.map((s) => ({
        ...s,
        name: `bg${s.name.charAt(0).toUpperCase() + s.name.slice(1)}`,
      }))
    : [];
}

function rainbowify(str) {
  const r = ['1', '3', '2', '4'];
  let i = 0;

  return (
    Array.from(str).reduce((a, s) => {
      let c = ' ',
        _s = s.replace(/\s+/g, '');
      if (_s) {
        c = `\x1b[3${r[i % r.length]}m${_s}`;
        i = i + 1;
      }
      a += c;
      return a;
    }, '') + '\x1b[0m'
  );
}

module.exports = {
  createFormatStyles,
  createColors,
  rainbowify,
};
