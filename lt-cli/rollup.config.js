import typescript from 'rollup-plugin-typescript2'
import { terser } from 'rollup-plugin-terser'
import filesize from 'rollup-plugin-filesize'
import process from 'process'

export default {
  input: 'src/generator/index.ts',
  plugins: [
    typescript({
      lib: ['ES2015'],
      target: 'ES5',
      useTsconfigDeclarationDir: false,
      declarationDir: `${process.cwd()}/lib`,
    }),
    terser(),
    filesize(),
  ],
  output: {
    file: 'lib/index.js',
    format: 'cjs',
  },
}
