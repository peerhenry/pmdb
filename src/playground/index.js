const express = require('express')
const { ApolloServer } = require('apollo-server-express')
const expressPlayground = require('graphql-playground-middleware-express')
  .default
const types = require('./schema.js')

const apolloServer = new ApolloServer({
  typeDefs: types,
  resolvers: {},
  resolverValidationOptions: {
    requireResolversForResolveType: false,
  },
})
const PORT = 4000

const app = express()

apolloServer.applyMiddleware({ app })
app.get('/playground', expressPlayground({ endpoint: '/graphql' }))

app.listen(PORT)

console.log(
  `Serving the GraphQL Playground on http://localhost:${PORT}/playground`
)
