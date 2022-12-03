import { readdir } from 'fs/promises';

const list = async () => {
    const dirPath = 'src/fs/files';

    try {
        let dirContents = await readdir(dirPath);
        for(let fName of dirContents)
            console.log(fName);
    } catch (err) {
        if (err.code == 'ENOENT')
            throw Error('FS operation failed');
        else
            throw err;
    }
};

await list();