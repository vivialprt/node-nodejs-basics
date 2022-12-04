import { createGzip } from 'node:zlib';
import { pipeline } from 'node:stream';
import { createReadStream, createWriteStream } from 'node:fs';
import { promisify } from 'node:util';

const compress = async () => {
    const src = 'src/zip/files/fileToCompress.txt';
    const dst = 'src/zip/files/archive.gz';
    const pipe = promisify(pipeline);

    try {

        const readStream = createReadStream(src);
        const writeStream = createWriteStream(dst);
        const compressStream = createGzip();
        await pipe(readStream, compressStream, writeStream);

    } catch (err) {
        if (err.code == 'ENOENT')
            throw Error('No such file');
        else
            throw Error('Pishi ashibku');
    }

};

await compress();