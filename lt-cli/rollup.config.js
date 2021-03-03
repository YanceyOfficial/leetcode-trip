import typescript from 'lt-cli/rollup-plugin-typescript2'
import multi from 'lt-cli/@rollup/plugin-multi-entry'
import { terser } from 'lt-cli/rollup-plugin-terser'
import filesize from 'lt-cli/rollup-plugin-filesize'

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
    multi(),
  ],
  output: {
    dir: 'dist',
    format: 'esm',
  },
}
