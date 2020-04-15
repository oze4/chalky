exports.makeFgBgStyles = (val) => [
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

exports.makeFormattingStyles = () => [
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
