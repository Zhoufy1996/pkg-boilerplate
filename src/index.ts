import shell from 'shelljs';

shell.exec('yarn cfg');
shell.exec('yarn build');
shell.exec('yarn pkg');
