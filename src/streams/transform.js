import { Transform } from 'node:stream';

const transform = async () => {
    const stream = new Transform({
        transform (data, encoding, callback) {
            const reversedData = reverseString(data);
            this.push(reversedData);
            callback();
        }
    });
    process.stdin.pipe(stream).pipe(process.stdout);
};

const reverseString = (data) => {
    return data.toString().split('').reverse().join('');
}

await transform();