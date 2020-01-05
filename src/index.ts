import 'reflect-metadata';
import { buildSchema } from 'type-graphql';
import { ApolloServer } from 'apollo-server-express';

import express, { Application, Request, Response, NextFunction } from 'express';
import UserResolver from './graphql/User/user.resolver';


const port: number = 9999;
const bootstrap = async (_port: number) => {
  try {
    const p = _port
    const app: Application = express();
    
    const schema = await buildSchema({
      resolvers: [UserResolver],
      emitSchemaFile: true
    })
  
    const server = new ApolloServer({ 
      schema,
      playground: true,
      context: (request: Request) => {
          return request
      }
    }).applyMiddleware({ app })
    
    app.listen(p, () => {
      console.log(`http://localhost:${p}/graphql`)
    });

  } catch (error) {
    console.log(error)
  }
  
  // ne radi
  // const schema = await buildSchema({
  //   resolvers: [UserResolver],
  //   emitSchemaFile: false
  // })

  // const server = new ApolloServer({
  //   schema,
  //   playground: true
  // })

  // server.applyMiddleware({ app })


}

bootstrap(8080);

