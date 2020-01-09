import 'reflect-metadata';
import 'dotenv/config'
import { buildSchema } from 'type-graphql';
import { ApolloServer } from 'apollo-server-express';
import express, { Application, Request, Response, NextFunction } from 'express';
import { UserResolver } from './graphql/User/user.resolver';


import { sequelize } from './models/Database';

const port: any = process.env.PORT;
const bootstrap = async (port: number) => {
  try {
    // const p = _port
    const app: Application = express();
    
    // await sequelize.sync({ force: true })

    const schema = await buildSchema({
      resolvers: [UserResolver],
      emitSchemaFile: true
    })
  
    const server = new ApolloServer({ 
      schema,
      playground: true,
      context: (request: Request) => {
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

console.log(Date.now())