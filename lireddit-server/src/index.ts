import { MikroORM } from "@mikro-orm/core";
import { __prod__ } from "./constants";
import { Post } from "./entities/Post";

const main = async () => {
    const orm = await MikroORM.init({
        entities: [Post],
        dbName: 'lireddit',
        type: 'postgresql',
        user:'minhradz',
        password: '',
        debug: !__prod__,
    });

    // create a post 
    // ! This does not actually insert a post into the database
    // ! This is just the same as `const post = new Post()`
    const post = orm.em.create(Post, {title: 'my first post'});
    await orm.em.persistAndFlush(post);
}

main().catch(err => {
    console.error(err);
});