import 'reflect-metadata';
import 'dotenv/config'
import { buildSchema } from 'type-graphql';
import { sequelize } from './models/Database';
import { ApolloServer } from 'apollo-server-express';
import { UserResolver } from './graphql/User/user.resolver';
import express, { Application, Request, Response, NextFunction } from 'express';
import cookieParser from 'cookie-parser';

const port: any = process.env.PORT;
const bootstrap = async (port: number) => {
  try {
    
    const app: Application = express();
    
    app.use(cookieParser());

    await sequelize.sync({ force: true })

    const schema = await buildSchema({
      resolvers: [UserResolver],
      emitSchemaFile: true
    })
  
    const server = new ApolloServer({ 
      schema,
      playground: true,
      // context: (request: Request, response: Response) => {
      //   return {
      //     request,
      //     response
      //   };
      // },
      context: ({ req, res }) => {
        res.cookie('aaa', 'asdsadsa')
        return {
          req,
          res
        }
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


// import { UtilsLib } from './util/Utils.cl';
// const path = '../../importer/test_files';
// const u = new UtilsLib.Importer();

// console.table([{ a: 1, b: 'Y' }, { a: 'Z', b: 2 }, { a: 100, b: 200 }]);

function sanitize(string: string) {
  const map: any = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#x27;',
      "/": '&#x2F;',
  };
  const reg = /[&<>"'/]/ig;
  return string.replace(reg, (match)=>(map[match]));
}

const a = sanitize('$$$$<<<<<');
console.log(a)

function updateQuantity(val: number){
  // Do something with `val`
  val = val + 1;

  console.log(val);

  // And call it again with the value
  if(val < 5){
    updateQuantity(val);
  }
}

console.log(updateQuantity(1)); 

