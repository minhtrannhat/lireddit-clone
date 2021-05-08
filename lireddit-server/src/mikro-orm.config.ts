import { __prod__ } from "./constants";
import { Post } from "./entities/Post";
import { User } from "./entities/User";
import { MikroORM } from "@mikro-orm/core";
import path from "path";

require('dotenv').config()

export default {
  migrations: {
    path: path.join(__dirname, "./migrations"), // path to the folder with migrations
    pattern: /^[\w-]+\d+\.[tj]s$/,
  },
  entities: [Post, User],
  dbName: process.env.DATABASENAME,
  type: "postgresql",
  user: process.env.POSTGRESQL_USERNAME,
  password: "",
  debug: !__prod__,
} as Parameters<typeof MikroORM.init>[0];
