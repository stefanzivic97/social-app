import { ServerConfiguration } from './server/Server';

const server = new ServerConfiguration.Server();

const options = {
    http: 'http',
    port: 8080
}

server.ApolloServer(options)