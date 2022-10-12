import typescript from 'rollup-plugin-typescript2'
import { terser } from 'rollup-plugin-terser'
import filesize from 'rollup-plugin-filesize'
import externals from 'rollup-plugin-node-externals'

const plugins = [
  externals({
    deps: true,
    devDeps: true,
  }),

  typescript({
    lib: ['ES2015'],
    target: 'ES5',
    useTsconfigDeclarationDir: true,
  }),
  terser(),
  filesize(),
]

export default {
  input: 'src/index.ts',
  plugins,
  output: {
    file: 'lib/index.js',
    format: 'esm',
  },
}
