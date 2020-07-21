import "reflect-metadata";

import { ApolloServer } from "apollo-server-express";
import * as Express from "express";

// import chalk from "chalk";
import { Resolver, Query, buildSchema } from "type-graphql";
import { createConnection } from "typeorm";

@Resolver()
class HelloWorld {
  @Query(() => String)
  async helloWorld() {
    return `Hello `;
  }
}

const PORT = process.env.PORT || 8000;

const main = async () => {
  await createConnection();

  const schema = await buildSchema({
    resolvers: [HelloWorld],
  });

  const apolloServer = new ApolloServer({ schema });
  const app = Express();

  apolloServer.applyMiddleware({ app });

  app.listen(PORT, () => {
    console.log(`listening on port: ${PORT}/graphql`);
  });
};

main();
