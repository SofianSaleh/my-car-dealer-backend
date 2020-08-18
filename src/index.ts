import 'reflect-metadata';

import cors from 'cors';

import { ApolloServer } from 'apollo-server-express';
import Express from 'express';
// import cookieParser from 'cookie-parser';

// import chalk from "chalk";

import { createConnection } from 'typeorm';
import { buildSchema } from 'type-graphql';
import { RegisterResolver } from './modules/User/register';
import { LoginResolver } from './modules/User/Login';

const PORT = process.env.PORT || 8000;

const main = async () => {
  const app = Express();

  app.use(
    cors({
      credentials: true,
      origin: 'http://localhost:3000',
    })
  );

  // app.use(cookieParser());

  try {
    await createConnection();
  } catch (e) {
    console.log(e.message);
    throw e;
  }

  const schema = await buildSchema({
    resolvers: [RegisterResolver, LoginResolver],
  });

  const apolloServer = new ApolloServer({
    schema,
    context: (req: any, res: any) => ({ req, res }),
  });

  apolloServer.applyMiddleware({ app });

  app.listen(PORT, () => {
    console.log(`listening on port: ${PORT}/graphql`);
  });
};

main();
