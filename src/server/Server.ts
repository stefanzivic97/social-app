import fs from 'fs';
import http from 'http';
import https from 'https';
import { buildSchema } from 'type-graphql';
import { ApolloServer } from 'apollo-server-express';
import express, { Application, Request, Response, NextFunction } from 'express';

export namespace ServerConfiguration {
    
    export class Server {

        public app: Application;
        public port: number | undefined;
        public server: any;
        public schema: any;
        public resolvers: [] = [];

        constructor () {
            this.app = express()
        }

        /**
         * * Options 
         * @param options => 'http' or 'https' and port
         */

        public async ApolloServer (options: { http: string | undefined; port: number}) {
            
            this.resolvers = [];
            this.port = options.port;

            try {
                
                if (this.port == undefined) {
                    throw new Error('Set port')
                }

                if (options.http == 'http' || options.http == undefined) {
                    this.serverSetup(this.resolvers);
                    this.listenHttp(this.port);
                } else if (options.http == 'https') {
                    this.serverSetup(this.resolvers);
                    this.listenHttps(this.port)
                }

            } catch (error) {
                throw new Error(`ApolloServer();\n${error}`)
            }
        }

        public async serverSetup (resolvers: any) {
            try {
                
                this.schema = await buildSchema({
                    resolvers: resolvers,
                    emitSchemaFile: true
                }) 
    
                this.server = new ApolloServer({
                    playground: true,
                    schema: this.schema,
                    context: ( request: Request ) => {
                        return request
                    }
                }).applyMiddleware({ app: this.app })
                
            } catch (error) {
                throw new Error(`ServerConfiguration();\n${error}`)   
            }  
        }

        public listenHttp (port: number): void {
            http.createServer(this.app).listen(port, () => {
                console.log(`Server listen at: http://localhost:${port}/graphql`)
            });
        }   

        public listenHttps (port: number): void {
            https.createServer({
                key: fs.readFileSync('./src/keys/key.pem'),
                cert: fs.readFileSync('./src/keys/cert.pem')
            }, this.app).listen(port, () => {
                console.log(`Server listen at: https://localhost:${port}/graphql`)
            })
        }

    }

}