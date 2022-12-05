import { Worker } from 'node:worker_threads';
import { cpus } from 'node:os';

const performCalculations = async () => {
    const workerScript = './src/wt/worker.js';
    const workerPromises = [];
    for(let i = 0; i < cpus().length; i++) {
        const workerPromise = new Promise(resolve => {
            try {
                const worker = new Worker(workerScript, { workerData: 10 + i});
                worker.on('message', (msg) => {
                    resolve({status: 'resolved', data: msg});
                });
                worker.on('error', (err) => {
                    resolve({status: 'error', data: err});
                });
            } catch (err) {
                resolve({status: 'promise error', data: null});  //prevent fast fail for Promise.all()
            }
        });
        workerPromises.push(workerPromise);
    }
    const workerResults = await Promise.all(workerPromises);
    console.log(workerResults);

};

await performCalculations();