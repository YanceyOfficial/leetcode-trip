import inquirer from 'inquirer'
export declare const fileSelect: (
  dir: string,
  choices: string[],
) => Promise<any> & {
  ui: inquirer.ui.Prompt<any>
}
