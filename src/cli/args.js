const parseArgs = () => {
    const args = [];

    for (let i = 0; i < process.argv.length; i++)
        if (process.argv[i].startsWith('--'))
            args.push(`${process.argv[i].replace('--', '')} is ${process.argv[i + 1]}`);

    console.log(args.join(', '));
};

parseArgs();