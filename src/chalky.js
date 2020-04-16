const { createColors, createFormatStyles, rainbowify } = require('./styles');

const colors = {
  fg: createColors('foreground'),
  bg: createColors('background'),
  formats: createFormatStyles(),
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

      const worker = (...params) => {
        const message = params.length === 1 ? '' + params[0] : params.join(' ');
        return styleChain.color + message + colors.lineEnd;
      };

      Object.setPrototypeOf(worker, stylesProto);
      worker._styleChain = styleChain;
      Object.defineProperty(this, name, { value: worker });

      return worker;
    },
  };
}

styles['rainbow'] = { get() { return (str) => { return rainbowify(str) } } }

const stylesProto = Object.defineProperties(() => {}, { ...styles });

Object.defineProperties(Chalky.prototype, styles);

module.exports = Chalky();
