import "reflect-metadata";
import { MikroORM } from "@mikro-orm/core";
import { __prod__ } from "./constants";
// import { Post } from "./entities/Post";
import microConfig from "./mikro-orm.config";
import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import {buildSchema} from 'type-graphql'
import { HelloResolver } from "./resolvers/hello";
import { PostsResolver } from "./resolvers/posts";

const main = async() => {
    const orm = await MikroORM.init(microConfig);
    await orm.getMigrator().up();
    const app = express();

    const apolloServer = new ApolloServer({
        schema: await buildSchema({
            resolvers: [HelloResolver, PostsResolver],
            validate: false
        }),
        context: () => ({ em: orm.em })
    });

    apolloServer.applyMiddleware({app});

    app.get('/', (_, res) => {
        res.send("Hello");
    })

    app.listen(4000, () => {
        console.log('Server started on localhost: 4000');
    })
    
}

main().catch((err) => {
    console.error(err);
});