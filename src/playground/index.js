const express = require('express')
const registerServices = require('@workpop/graphql-proxy').default
const expressPlayground = require('graphql-playground-middleware-express')
  .default
const types = require('./schema.js')
const apiKey = require('./apikey.js')

const endpoint =
  'https://6ktuupjf2rakra4jo5kkqy66ly.appsync-api.eu-west-1.amazonaws.com/graphql'
const SERVICE_CONFIG = {
  APPSYNC: {
    address: endpoint,
    typeDefs: types,
  },
}

const PORT = 4000
const app = express()
app.get('/playground', expressPlayground({ endpoint: '/graphql' }))

registerServices({
  SERVICE_CONFIG,
  server: app,
  masterTypeDefs: types,
  customHeaders: {
    'x-api-key': apiKey,
    // x-amz-user-agent
  },
  // headersToForward
  enableGrqphiQL: true,
  // errorFormatter
}).then(() => {
  app.listen(PORT, () =>
    console.log(
      `Running playground proxy on http://localhost:${PORT}/playground`
    )
  )
})
