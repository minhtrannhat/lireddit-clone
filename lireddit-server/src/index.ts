import { MikroORM } from "@mikro-orm/core";
import { __prod__ } from "./constants";
import { Post } from "./entities/Post";
import microConfig from "./mikro-orm.config"
import express from 'express';
import {} from 'apollo-server-express';

const main = async () => {
    // connect to database
    const orm = await MikroORM.init(microConfig);

    // run migrations
    // orm.getMigrator().up();

    const app = express();

    app.get('/', (_, res) => {
        res.send("hello world!");
    })
    app.listen(
        4000, () => {
            console.log('server started on localhost:4000')
        }
    )

    // create a post 
    // ! This does not actually insert a post into the database
    // ! This is just the same as `const post = new Post()`
    // const create_post = orm.em.create(Post, {title: 'my first post'});
    // await orm.em.persistAndFlush(create_post);
    const posts = await orm.em.find(Post, {});
    console.log(posts);
}

main().catch((err) => {
    console.log(err);
});