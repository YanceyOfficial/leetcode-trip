export declare const getFileMeta: (dirName: string, fileName: string, isValidate?: boolean | undefined) => boolean | {
    outPath: string;
    meta: {
        serial: string;
        title: string;
        functionName: string;
        functionBody: string;
    };
};
