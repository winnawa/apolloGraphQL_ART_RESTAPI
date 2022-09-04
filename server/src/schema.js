import {gql} from 'apollo-server'

const typeDefs = gql`

    type Query{
        getItems : RawData,
    }
    type RawData{
        data : [Item],
    }
    type Item{
        id : ID!,
        title : String!,
        description : String!,
        image : String,
    }



`
export default typeDefs