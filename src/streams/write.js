import { createWriteStream } from 'fs';

const write = async () => {
    const fileName = 'src/streams/files/fileToWrite.txt';
    const writeStream = createWriteStream(fileName);
    process.stdin.pipe(writeStream);
};

await write();