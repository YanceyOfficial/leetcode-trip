import inquirer from 'inquirer'
export declare const fileSelect: (
  dir: string,
  choices: string[],
) => Promise<inquirer.Answers> & {
  ui: inquirer.ui.Prompt<inquirer.Answers>
}
