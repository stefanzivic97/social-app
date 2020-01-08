import 'reflect-metadata';
import 'dotenv/config'
import { buildSchema } from 'type-graphql';
import { ApolloServer } from 'apollo-server-express';

import express, { Application, Request, Response, NextFunction } from 'express';
import UserResolver from './graphql/User/user.resolver';
import { sequelize } from './models/Database';

const port: number = 9999;
const bootstrap = async (_port: number) => {
  try {
    const p = _port
    const app: Application = express();
    
    await sequelize.sync({ force: true })

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
  
}

bootstrap(8080);

console.log(Date.now())