let graphql = require('graphql')
let axios = require('axios')
const {
    GraphQLObjectType,
    GraphQLInt,
    GraphQLString,
    GraphQlNoNull
} = graphql

const productType = new GraphQLObjectType({
    name:"products",
    fields:{
        id:{type:GraphQLInt},
        product_name:{type:GraphQLString},
        brand:{type:GraphQLString},
        price:{type:GraphQLInt},
        Size:{type:GraphQLString},
    }
})

const RootQuery = new GraphQLObjectType({
    name:'RootQueryType',
    field:{
        Products:{
            type:productType,
            args:{id:{type:GraphQLInt}},
            resolve(parentValue,args){
                return axios.get(`http://localhost:7000/products/${args.id}`)
                .then((res)=>res.data)
            }
        }
    }
})

module.exports = new GraphQLSchema({
    query:RootQuery
})

/*
Products(id:6)
product_name,
brand,



*/
