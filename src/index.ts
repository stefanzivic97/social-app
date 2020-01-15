import 'reflect-metadata';
import 'dotenv/config'
import { buildSchema } from 'type-graphql';
import { sequelize } from './models/Database';
import { ApolloServer } from 'apollo-server-express';
import { UserResolver } from './graphql/User/user.resolver';
import express, { Application, Request, Response, NextFunction } from 'express';



const port: any = process.env.PORT;
const bootstrap = async (port: number) => {
  try {

    const app: Application = express();
    
    await sequelize.sync({ force: true })

    const schema = await buildSchema({
      resolvers: [UserResolver],
      emitSchemaFile: true
    })
  
    const server = new ApolloServer({ 
      schema,
      playground: true,
      context: (request: Request, response: Response) => {
        return request
      },
      formatError: (error: any): any => {
        if (!error.originalError){
          return error
        }
        const data = error.originalError.data
        const message = error.message || 'An error occurrend.'
        const code = error.originalError.code || 500

        return { 
          message: message, 
          status: code, 
          data: data 
        }

      }
        
    }).applyMiddleware({ app })
    
    app.listen(port, () => {
      console.log(`http://localhost:${port}/graphql`)
    });

  } catch (error) {
    console.log(error)
  }
  
}

bootstrap(port);


const headers: object = {} 

// for (const i in headers) {
//   if (headers[i].hasOwnProperty('key')
//     && headers[i].hasOwnProperty('value')) {
//     this._headers.push([headers[i].key, headers[i].value]);
//   }
// }

// let map : { [key: string]: boolean} = {};
// map["foo"] = true;
// map["bar"] = false;
// map.foo = true;
// // map["foobar"] = "foo"; // Throws exception
// map[1] = true; // Curiously doesn't throws exception

// console.log(map)


import { UtilsLib } from './util/Utils.cl';
const path = '../../importer/test_files';
const u = new UtilsLib.Importer();