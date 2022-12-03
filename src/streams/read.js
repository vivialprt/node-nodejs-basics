import { createReadStream } from 'fs';

const read = async () => {
    const fileName = 'src/streams/files/fileToRead.txt';
    const readStream = createReadStream(fileName, 'utf8');

    readStream.on('data', (chunk) => {
        process.stdout.write(chunk);
    });
};

await read();