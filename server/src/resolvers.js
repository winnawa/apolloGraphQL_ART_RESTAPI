//import 

const resolvers = {
    Query:{
        getItems : (_,__,{dataSources})=>{
            return dataSources.artsAPI.getToursRawData();
        }
        // getItems : (_,__,{dataSources})=>{
        //     return dataSources.artsAPI.getTourItems();
        // }
    }

}
export default resolvers;