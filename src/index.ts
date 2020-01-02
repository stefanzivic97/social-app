import { ServerConfiguration } from './server/Server';

const server = new ServerConfiguration.Server();

const options = {
    http: 'http',
    port: 8090
}

server.ApolloServer(options)
import { UserInputData } from './graphql/schema/User/user-inp'
console.log(new Date())