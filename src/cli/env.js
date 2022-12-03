const parseEnv = () => {
    const rssVars = [];

    for (let [key, value] of Object.entries(process.env))
        if (key.startsWith('RSS_'))
            rssVars.push(`${key}=${value}`);

    console.log(rssVars.join('; '));
};

parseEnv();