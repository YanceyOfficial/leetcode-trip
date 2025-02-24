import { getFileList } from './get-file-list';
export declare const fileSelect: (dir: string, choices: ReturnType<typeof getFileList>) => Promise<string> & {
    cancel: () => void;
};
