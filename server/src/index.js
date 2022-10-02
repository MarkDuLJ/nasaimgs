import express from 'express'
import http from 'http'
import {ApolloServer} from 'apollo-server-express'
import {ApolloServerPluginDrainHttpServer, ApolloServerPluginLandingPageLocalDefault} from 'apollo-server-core'

import {typeDefs,resolvers} from './types/index.js'

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

}