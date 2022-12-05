import { execFile } from 'child_process';

const spawnChildProcess = async (args) => {
    const fName = './src/cp/files/script.js';
    args.unshift(fName);
    const child = execFile('node', args, (error, stdout, stderr) => {
        if (error) {
            throw error;
        }
        console.log(stdout);
    });

    process.stdin.pipe(child.stdin);
    child.stdout.pipe(process.stdout);

};

spawnChildProcess();