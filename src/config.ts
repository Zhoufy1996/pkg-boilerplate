import path from 'path';
import shell from 'shelljs';
import { writeFileSync } from 'fs';
import pjson from '../package.json';

interface Arg {
    code: string;
    name: string;
    type: 'number' | 'string';
    description?: string;
    default: string;
}

const config: Arg[] = [
    {
        code: 'n',
        name: '文件名',
        type: 'string',
        default: '当前时间的时间戳',
    },
    {
        code: 's',
        name: '后缀',
        type: 'string',
        default: 'md',
    },
    {
        code: 'd',
        name: '路径',
        type: 'string',
        default: '桌面路径',
    },
];

const createConfig = () => {
    const { name } = pjson;
    shell.cd('../');
    if (!Array.from(shell.ls()).includes('pkg')) {
        shell.mkdir('pkg');
    }
    shell.cd('pkg');
    if (!Array.from(shell.ls()).includes(name)) {
        shell.mkdir(name);
    }
    writeFileSync(path.join(shell.pwd().stdout, name, 'config.json'), JSON.stringify(config));
};

createConfig();
