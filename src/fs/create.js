import { writeFile } from 'fs/promises';


const create = async () => {
    try {
        const content = 'I am fresh and young';
        const filename = 'src/fs/files/fresh.txt';
        await writeFile(filename, content, { flag: 'wx' });
    } catch (err) {
        if (err.code == 'EEXIST')
            throw Error('FS operation failed');
        else
            throw err;
    }

};

await create();