import { ServerConfiguration } from './server/Server';

const server = new ServerConfiguration.Server();

const options = {
    http: 'http',
    port: 8090
}

// server.ApolloServer(options)


// import { UserInputData } from './graphql/schema/User/user-inp'
import * as fs from 'fs';
import * as path from 'path';
import { promisify } from 'util'
const testFolder ='./src/graphql/User/Types';




const run = async (p: any) => {
    const readFileAsync = promisify(fs.readdir)
    const res = await readFileAsync(p)
    const pat = path.extname(p)

    const arr: [] = []; 

    console.log('Path: => ',pat)
    console.log('\n\n Br: ' + res.length + '\n\n');

    for (let index = 0; index < res.length; index++) {
        const element = res[index];

        console.log('for loop: ', element)
    }

}
  
console.log(run(testFolder))




