
/*
import * as fs from 'fs';
import * as path from 'path';
import { promisify } from 'util'


const testFolder ='./src/graphql/User/Types';
const run = async (p: any) => {
    const readFileAsync = promisify(fs.readdir)
    const res = await readFileAsync(p)
    const pat = path.extname(p)

    const arr: [] = []; 

    // console.log('Path: => ',pat)
    // console.log('\n\n Br: ' + res.length + '\n\n');

    for (let index = 0; index < res.length; index++) {
        const element = res[index];
        const extension = path.extname(element)
        if (extension === '.ts') {
            const len = element
            const nameOfType = len
            console.log(nameOfType)
        }
        // console.log(element)
        // console.log('for loop: ', path.extname(element))
    }

}
  
console.log(run(testFolder))

*/