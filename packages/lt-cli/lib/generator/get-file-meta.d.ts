export declare const getFileMeta: (dirName: string, fileName: string, isValidate?: boolean | undefined) => true | "文件已存在, 请重新选择." | {
    outPath: string;
    meta: {
        serial: string;
        title: string;
        functionName: string;
        functionBody: string;
    };
};
