import inquirer from 'inquirer'
export declare const dirSelect: () => Promise<any> & {
  ui: inquirer.ui.Prompt<any>
}
