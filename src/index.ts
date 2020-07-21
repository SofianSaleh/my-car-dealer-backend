import "reflect-metadata";

import { ApolloServer } from "apollo-server-express";
import Express from "express";

// import chalk from "chalk";

import { createConnection } from "typeorm";
import { buildSchema } from "type-graphql";
import { RegisterResolver } from "./modules/user/register";

const PORT = process.env.PORT || 8000;

const main = async () => {
  try {
    await createConnection();
  } catch (e) {
    console.log(e.message);
    throw e;
  }

  const schema = await buildSchema({
    resolvers: [RegisterResolver],
  });

  const apolloServer = new ApolloServer({ schema });
  const app = Express();

  apolloServer.applyMiddleware({ app });

  app.listen(PORT, () => {
    console.log(`listening on port: ${PORT}/graphql`);
  });
};

main();
