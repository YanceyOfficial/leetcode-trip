import typescript from '@rollup/plugin-typescript'
import terser from '@rollup/plugin-terser'
import filesize from 'rollup-plugin-filesize'
import externals from 'rollup-plugin-node-externals'

export default {
  input: 'src/index.ts',
  plugins: [
    externals({
      deps: true,
      devDeps: true,
    }),

    typescript({
      sourceMap: false,
    }),
    terser(),
    filesize(),
  ],
  output: {
    file: 'lib/index.js',
    format: 'esm',
  },
}
