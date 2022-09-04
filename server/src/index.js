import {ApolloServer} from 'apollo-server'
import typeDefs from "./schema.js"
import resolvers from './resolvers.js';
import ArtsAPI from './dataSources/art_API.js';

const server = new  ApolloServer({
    typeDefs, 
    resolvers,
    dataSources :  ()=>{
        return {
            artsAPI : new ArtsAPI()
        }
    }
});

server.listen().then(()=>{
    console.log(`Hi am listening`)

})