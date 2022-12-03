import { writeFile } from 'fs/promises';


const create = async () => {
    try {
        const content = 'I am fresh and young';
        await writeFile('src/fs/files/fresh.txt', content, { flag: 'wx' });
    } catch (err) {
        if (err.code == 'EEXIST')
            throw Error('FS operation failed');
        else
            throw err;
    }

};

await create();