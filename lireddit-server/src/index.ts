import "reflect-metadata";
import { MikroORM } from "@mikro-orm/core";
import { __prod__ } from "./constants";
import { Post } from "./entities/Post";
import { User } from "./entities/User"
import microConfig from "./mikro-orm.config";
import express from "express";
import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";
import { PostResolver } from "./resolvers/post";
import { UserResolver } from "./resolvers/user";

const main = async () => {
  // connect to database
  const orm = await MikroORM.init(microConfig);

  // run migrations
  orm.getMigrator().up();

  const app = express();

  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [PostResolver, UserResolver],
      validate: false,
    }),
    context: () => ({ em: orm.em }),
  });

  apolloServer.applyMiddleware({ app });

  app.get("/", (_, res) => {
    res.send("hello world!");
  });
  app.listen(4000, () => {
    console.log("server started on localhost:4000");
  });

  // create a post
  // ! This does not actually insert a post into the database
  // ! This is just the same as `const post = new Post()`
  // const create_post = orm.em.create(Post, {title: 'my first post'});
  // await orm.em.persistAndFlush(create_post);
  const posts = await orm.em.find(Post, {});
  const users = await orm.em.find(User, {});
  console.log(posts);
  console.log(users);
};

main().catch((err) => {
  console.log(err);
});
