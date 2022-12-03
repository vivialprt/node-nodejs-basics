import { rename as fsRename, access } from 'fs/promises';

const rename = async () => {
    const path = 'src/fs/files';
    const incorrectName = 'wrongFilename.txt';
    const correctName = 'properFilename.md';

    let fullIncorrectName = [path, incorrectName].join('/');
    let fullCorrectName = [path, correctName].join('/');

    try {
        await access(fullCorrectName);
        throw Error('FS operation failed');
    } catch (err) {
        if (err.code != 'ENOENT')
            throw err;       
    }

    try {
        await fsRename(fullIncorrectName, fullCorrectName);
    } catch (err) {
        if (err.code == 'ENOENT')
            throw Error('FS operation failed');
        else
            throw err;
    }
};

await rename();