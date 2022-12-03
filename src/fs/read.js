import { readFile } from 'fs/promises';

const read = async () => {
    const filePath = 'src/fs/files/fileToRead.txt';

    try {
        let fileContents = await readFile(filePath, { encoding: 'utf8' });
        console.log(fileContents);
    } catch (err) {
        if (err.code == 'ENOENT')
            throw Error('FS operation failed');
        else
            throw err;
    }
};

await read();