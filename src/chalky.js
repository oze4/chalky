const { makeFgBgStyles, makeFormattingStyles } = require('./defaultStyles');

const colors = {
  fg: createColors('foreground'),
  bg: createColors('background'),
  formats: makeFormattingStyles(),
  lineEnd: '\x1b[0m',
};

function Chalky() {
  const chalky = {};
  Object.setPrototypeOf(chalky, Chalky.prototype);
  return chalky;
}

const styles = Object.create(null);

for (const { name, value } of [...colors.fg, ...colors.bg, ...colors.formats]) {
  styles[name] = {
    get() {
      let color = value;

      const existing = this._styleChain;
      if (existing !== undefined) {
        color = existing.color + color;
      }

      const styleChain = { color, existing };

      const worker = (...arguments) => {
        const message =
          arguments.length === 1 ? '' + arguments[0] : arguments.join(' ');
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
  const isForeground = fgbg === 'fg' || fgbg === 'foreground';
  const isBackground = fgbg === 'bg' || fgbg === 'background';
  const styles = makeFgBgStyles(isForeground ? '3' : isBackground ? '4' : null); // foreground codes use a 3, while background codes use a 4

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

Object.defineProperties(Chalky.prototype, styles);

module.exports = Chalky();
