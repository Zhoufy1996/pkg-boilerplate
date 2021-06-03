import minimist from 'minimist';
import os from 'os';
import path from 'path';
import { createAndOpenFile } from './script';

interface Args {
    n: string;
    s: string;
    d: string;
}

const args = minimist(process.argv.slice(2)) as unknown as Args;

const name = args.n || `${new Date().getTime()}`;

const suffix = args.s || 'md';

const dir = args.d || path.join(os.homedir(), 'desktop');

createAndOpenFile({
    name,
    dirname: dir,
    suffix,
});
