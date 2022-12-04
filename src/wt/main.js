import { Worker } from 'node:worker_threads';
import { cpus } from 'node:os';

const performCalculations = async () => {
    const workerScript = './src/wt/worker.js';
    const workers = [];
    for(let i = 0; i < cpus().length; i++) {
        const worker = new Worker(workerScript, { workerData: 10 + i});
        worker.on('message', (msg) => {console.log(msg)})
        workers.push(worker);
        
    }
};

await performCalculations();