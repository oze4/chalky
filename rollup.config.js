import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { terser } from 'rollup-plugin-terser';

export default {
  input: 'index.js',
  output: [
    {
      file: 'lib/chalky.js',
      format: 'cjs',
    },
  ],
  plugins: [resolve(), commonjs(), terser()],
};
