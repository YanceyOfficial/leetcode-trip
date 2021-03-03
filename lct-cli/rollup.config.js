import typescript from 'rollup-plugin-typescript2'
import { terser } from 'rollup-plugin-terser'
import filesize from 'rollup-plugin-filesize'
import multiInput from 'rollup-plugin-multi-input'
import process from 'process'

export default {
  input: ['src/statistics/index.ts', 'src/generator/index.ts'],
  plugins: [
    typescript({
      lib: ['esnext'],
      target: 'esnext',
      useTsconfigDeclarationDir: false,
      declarationDir: `${process.cwd()}/lib`,
    }),
    terser(),
    filesize(),
    multiInput({ relative: 'src/' }),
  ],
  output: {
    dir: 'lib',
    format: 'esm',
  },
}
