

function importMetaAndEnv() {
    console.log(import.meta.url);

    console.log('Is this the main module?', import.meta.main);
    console.log(process.env.NODE_ENV);
    console.log(Bun.env.NODE_ENV);
}

importMetaAndEnv();