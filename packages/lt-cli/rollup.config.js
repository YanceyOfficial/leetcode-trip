import typescript from 'rollup-plugin-typescript2'
import { terser } from 'rollup-plugin-terser'
import filesize from 'rollup-plugin-filesize'

const plugins = [
  typescript({
    lib: ['ES2015'],
    target: 'ES5',
  }),
  terser(),
  filesize(),
]

export default [
  {
    input: 'src/generator/index.ts',
    plugins,
    output: {
      file: 'lib/generator.js',
      format: 'cjs',
    },
  },
  {
    input: 'src/statistics/index.ts',
    plugins,
    output: {
      file: 'lib/statistics.js',
      format: 'cjs',
    },
  },
  {
    input: 'src/upgrade/index.ts',
    plugins,
    output: {
      file: 'lib/upgrade.js',
      format: 'cjs',
    },
  },
]
