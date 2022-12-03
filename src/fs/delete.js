import { rm } from 'fs/promises';

const remove = async () => {
    const filePath = 'src/fs/files/fileToRemove.txt';

    try {
        await rm(filePath);
    } catch (err) {
        if (err.code == 'ENOENT')
            throw Error('FS operation failed');
        else
            throw err;
    }
};

await remove();