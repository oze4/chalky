const colors = {
  fg: createColors('foreground'),
  bg: createColors('background'),
  formats: createFormats(),
  lineEnd: '\x1b[0m',
};

const styles = Object.create(null);

for (const { name, value } of [...colors.fg, ...colors.bg, ...colors.formats]) {
  styles[name] = {
    get() {
      const styleChain = makeStyleChain(value, this._styleChain);
      const worker = makeWorker(this, styleChain);

      Object.defineProperty(this, name, { value: worker });

      return worker;
    },
  };
}

const protoFunc = Object.defineProperties(() => {}, { ...styles });

function makeWorker(self, _styleChain) {
  const worker = (...arguments) => {
    const msg = arguments.length === 1 ? '' + arguments[0] : arguments.join(' ');
    return applyStyleChain(worker, msg);
  };

  Object.setPrototypeOf(worker, protoFunc);
  worker._styleChain = _styleChain;

  return worker;
}

function makeStyleChain(colorCode, parent) {
  let color = colorCode;

  if (parent !== undefined) {
    color = parent.color + colorCode;
  }

  return { color, parent };
}

function applyStyleChain(self, str = '') {
  let styleChain = self._styleChain;

  if (styleChain === undefined) {
    return str;
  }

  return styleChain.color + str + colors.lineEnd;
}

function factory() {
  const smallChalk = {
    template: (...args) => someTagFunction(chalk.template, ...args),
  };

  Object.setPrototypeOf(smallChalk, SmallChalk.prototype);
  Object.setPrototypeOf(smallChalk.template, smallChalk);

  return smallChalk.template;
}

function createColors(fgbg) { // fgbg = one of: 'fg', 'bg', 'foreground', 'background'
  const allowed = ['fg', 'bg', 'foreground', 'background'];

  if (!allowed.includes(fgbg)) {
    throw new Error(`Expected: '${allowed.join("' or '")}', but got: '${fgbg}'`);
  }

  const isForeground =
    fgbg === 'fg' || fgbg === 'foreground';

  const val = isForeground ? '3' : '4';

  const styles = [
    {
      name: 'black',
      value: `\x1b[${val}0m`,
    },
    {
      name: 'red',
      value: `\x1b[${val}1m`,
    },
    {
      name: 'green',
      value: `\x1b[${val}2m`,
    },
    {
      name: 'yellow',
      value: `\x1b[${val}3m`,
    },
    {
      name: 'blue',
      value: `\x1b[${val}4m`,
    },
    {
      name: 'magenta',
      value: `\x1b[${val}5m`,
    },
    {
      name: 'cyan',
      value: `\x1b[${val}6m`,
    },
    {
      name: 'white',
      value: `\x1b[${val}7m`,
    },
  ];

  const capsStart = (str) => str.charAt(0).toUpperCase() + str.slice(1);

  return isForeground
    ? styles
    : styles.map((s) => ({ ...s, name: `bg${capsStart(s.name)}` }));
}

function createFormats() {
  return [
    {
      name: 'bold',
      value: '\x1b[1m',
    },
    {
      name: 'light',
      value: '\x1b[2m',
    },
    {
      name: 'italic',
      value: '\x1b[3m',
    },
    {
      name: 'underline',
      value: '\x1b[4m',
    },
    {
      name: 'blink',
      value: '\x1b[5m',
    },
    {
      name: 'inverse',
      value: '\x1b[7m',
    },
    {
      name: 'hidden',
      value: '\x1b[8m',
    },
  ];
}

function SmallChalk(options) {
  return factory(options);
}

Object.defineProperties(SmallChalk.prototype, styles);
module.exports = SmallChalk();
