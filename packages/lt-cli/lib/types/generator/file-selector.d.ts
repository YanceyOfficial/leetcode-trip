import { getFileList } from './get-file-list.js';
export declare const fileSelect: (dir: string, choices: ReturnType<typeof getFileList>) => Promise<string>;
