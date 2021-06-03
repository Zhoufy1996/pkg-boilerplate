import shell from 'shelljs';
import open from 'open';
import path from 'path';

export interface CreateAndOpenFileProps {
    dirname: string;
    name: string;
    suffix: string;
}

export const createAndOpenFile = ({ name, dirname, suffix }: CreateAndOpenFileProps) => {
    const filename = `${name}.${suffix}`;
    shell.cd(dirname);
    shell.touch(filename);
    open(path.join(dirname, filename));
};
