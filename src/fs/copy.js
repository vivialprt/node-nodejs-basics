import { cp, mkdir } from 'fs/promises';

const copy = async () => {
    const src = 'src/fs/files';
    const dst = 'src/fs/files_copy';
    try {
        await mkdir(dst);
        await cp(src, dst, { recursive: true });
    } catch (err) {
        if (err.code == 'EEXIST' || err.code == 'ENOENT')
            throw Error('FS operation failed');
        else
            throw err;
    }
};

copy();