import { __prod__ } from "./constants";
import { post } from "./entities/Post";
import { MikroORM } from "@mikro-orm/core";
import path from 'path';

export default {
  migrations: {
    path: path.join(__dirname, "./migrations"), // path to the folder with migrations
    pattern: /^[\w-]+\d+\.[tj]s$/,
  },
  entities: [post],
  dbName: "lireddit",
  type: "postgresql",
  user: "minhradz",
  password: "",
  debug: !__prod__,
} as Parameters<typeof MikroORM.init>[0];
