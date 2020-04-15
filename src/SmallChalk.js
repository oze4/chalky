const { makeFgBgStyles, makeFormattingStyles } = require('./defaultStyles');

const colors = {
  fg: createColors('foreground'),
  bg: createColors('background'),
  formats: makeFormattingStyles(),
  lineEnd: '\x1b[0m',
};

function SmallChalk() {
  const smallChalk = {};
  Object.setPrototypeOf(smallChalk, SmallChalk.prototype);
  return smallChalk;
}

const styles = Object.create(null);
const allColors = [...colors.fg, ...colors.bg, ...colors.formats];

for (const { name, value } of allColors) {
  styles[name] = {
    get() {
      const parent = this._styleChain;

      let color = value;

      if (parent !== undefined) {
        color = parent.color + color;
      }

      const styleChain = { color, parent };

      const worker = (...arguments) => {
        const message =
          arguments.length === 1 ? '' + arguments[0] : arguments.join(' ');

        if (styleChain === undefined) {
          return message;
        }

        return styleChain.color + message + colors.lineEnd;
      };

      Object.setPrototypeOf(worker, stylesProto);
      worker._styleChain = styleChain;
      Object.defineProperty(this, name, { value: worker });

      return worker;
    },
  };
}

const stylesProto = Object.defineProperties(() => {}, { ...styles });

function createColors(fgbg) {
  const allowed = ['fg', 'bg', 'foreground', 'background'];

  if (allowed.includes(fgbg)) {
    const isForeground = fgbg === 'fg' || fgbg === 'foreground';

    // Foreground codes start with a 3, while background codes start with a 4
    // (thats the only difference between foreground and background color codes)
    const styles = makeFgBgStyles(isForeground ? '3' : '4');

    const capsStart = (str) => str.charAt(0).toUpperCase() + str.slice(1);

    return isForeground
      ? styles
      : styles.map((s) => ({ ...s, name: `bg${capsStart(s.name)}` }));
  }
}

Object.defineProperties(SmallChalk.prototype, styles);

module.exports = SmallChalk();
