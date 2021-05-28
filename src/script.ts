import minimist from 'minimist';
import shell from 'shelljs';
import os from 'os';
import open from 'open';
import path from 'path';

const startup = () => {
    const args = minimist(process.argv.slice(2));

    const name = args.n || new Date().getTime();

    const suffix = args.s || 'md';

    const dir = args.d || path.join(os.homedir(), 'desktop');

    const filename = `${name}.${suffix}`;

    shell.cd(dir);

    shell.touch(filename);

    open(path.join(dir, filename));
};

startup();
