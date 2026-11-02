import type {BunFile} from 'bun'


async function fileSystemOperations(){
    //Read a file
    const file : BunFile = Bun.file('read.txt')
    console.log(file.size);
    console.log(file.type, "type");

    const extractTextContent = await file.text();
    console.log(extractTextContent);
    const arrayBuffer = await file.arrayBuffer();
    const unint8Array = await file.bytes();

    console.log(arrayBuffer, unint8Array);

    //Write a file
    const content = "Hello, i'm learning Bun for the firstttt timeeee";
    await Bun.write('output.txt', content)
    console.log('File created successfully')

    //Copy a file
    const inputFile = Bun.file('read.txt')
    await Bun.write('read_copy.txt',inputFile);
    console.log('File copied & created successfully');

    const isFileExists = await Bun.file('read_copy.txt').exists();
    console.log(isFileExists);

    await Bun.file('read_copy.txt').delete();
    console.log('File deleted successfully')
}

fileSystemOperations();