import typescript from 'rollup-plugin-typescript2'
import { terser } from 'rollup-plugin-terser'
import filesize from 'rollup-plugin-filesize'
import json from '@rollup/plugin-json'
import process from 'process'

const plugins = [
  typescript({
    lib: ['ES2015'],
    target: 'ES5',
    useTsconfigDeclarationDir: false,
    declarationDir: `${process.cwd()}/lib`,
  }),
  terser(),
  filesize(),
  json(),
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
    input: 'src/shared/upgrade.ts',
    plugins,
    output: {
      file: 'lib/upgrade.js',
      format: 'cjs',
    },
  },
]
