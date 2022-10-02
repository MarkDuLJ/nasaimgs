import {gql} from 'apollo-server-express'

import getImages from './getImages.js'

export const typeDefs=gql`
    input GetImgsInput {
        q: String
        from: Int
    }

    type GetImgsOutput {
        title: String
        description:String
        href:String
    }

    type Query {
        getImgs(input:GetImgsInput):[GetImgsOutput]
    }
`
export const resolvers={
    Query:{
        getImgs:getImages
    }
}