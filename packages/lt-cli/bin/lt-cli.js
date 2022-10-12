#!/usr/bin/env node
import { Command } from 'commander'
import chalk from 'chalk'
import leven from 'leven'
import packages from '../package.json' assert { type: 'json' }
import { bootstrap, showStatistics, upgrade } from '../lib/index.js'

const program = new Command()

function suggestCommands(unknownCommand) {
  const availableCommands = program.commands.map((cmd) => cmd._name)

  let suggestion

  availableCommands.forEach((cmd) => {
    const isBestMatch =
      leven(cmd, unknownCommand) < leven(suggestion || '', unknownCommand)
    if (leven(cmd, unknownCommand) < 3 && isBestMatch) {
      suggestion = cmd
    }
  })

  if (suggestion) {
    console.log(`  ${chalk.red(`Did you mean ${chalk.yellow(suggestion)}?`)}`)
  }
}

program.version(`v${packages.version}`).usage('<command> [options]')

program
  .command('create')
  .description('创建模版')
  .action(() => {
    bootstrap()
  })

program
  .command('statistics')
  .description('查看做题统计')
  .action(() => {
    showStatistics()
  })

program
  .command('upgrade')
  .description('升级脚手架')
  .action(() => {
    upgrade('pnpm install -g @yancey-inc/lt-cli@latest', packages.version)
  })

// output help information on unknown commands
program.on('command:*', ([cmd]) => {
  program.outputHelp()
  console.log(`  ${chalk.red(`Unknown command ${chalk.yellow(cmd)}.`)}`)
  console.log()
  suggestCommands(cmd)
  process.exitCode = 1
})

// add some useful info on help
program.on('--help', () => {
  console.log()
  console.log(
    `  Run ${chalk.cyan(
      'lt-cli <command> --help',
    )} for detailed usage of given command.`,
  )
  console.log()
})

program.commands.forEach((command) => command.on('--help', () => console.log()))

program.parse(process.argv)

if (!process.argv.slice(2).length) {
  program.outputHelp()
}
