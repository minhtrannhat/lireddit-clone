import { MikroORM } from "@mikro-orm/core";
import { __prod__ } from "./constants";
import { post } from "./entities/Post";
import microConfig from "./mikro-orm.config"

const main = async () => {
    // connect to database
    const orm = await MikroORM.init(microConfig);

    // run migrations
    orm.getMigrator().up();
    // create a post 
    // ! This does not actually insert a post into the database
    // ! This is just the same as `const post = new Post()`
    const create_post = orm.em.create(post, {title: 'my first post'});
    await orm.em.persistAndFlush(create_post);
    const posts = await orm.em.find(post, {});
    console.log(posts);
}

main().catch((err) => {
    console.log(err);
});