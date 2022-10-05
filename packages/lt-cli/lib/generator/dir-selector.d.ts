import inquirer from 'inquirer'
export declare const dirSelect: () => Promise<inquirer.Answers> & {
  ui: inquirer.ui.Prompt<inquirer.Answers>
}
