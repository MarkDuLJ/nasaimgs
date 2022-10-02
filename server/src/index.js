import express from 'express'
import http from 'http'
import {ApolloServer} from 'apollo-server-express'
import {ApolloServerPluginDrainHttpServer, ApolloServerPluginLandingPageLocalDefault} from 'apollo-server-core'

import {typeDefs,resolvers} from './types/index.js'

// todo: define env port
const port=4000

const startApolloServer= async()=>{
    const app=express()

    const httpServer=http.createServer(app)

    const server= new ApolloServer({
        typeDefs,
        resolvers,
        csrfPrevention:true,
        cache:"bounded",
        plugins:[
            ApolloServerPluginDrainHttpServer({httpServer}),
            ApolloServerPluginLandingPageLocalDefault({embed:true})
        ]
    })

    await server.start()

    server.applyMiddleware({
        app,
        path:'/igraphql'
    })

    await new Promise(resolve=>httpServer.listen({port},resolve))

    console.log(`Server is running at http://localhost:${port}${server.graphqlPath}`)

}

startApolloServer(typeDefs,resolvers)