import 'reflect-metadata';
import cors from 'cors';

import { ApolloServer } from 'apollo-server-express';
import Express from 'express';
// import cookieParser from 'cookie-parser';

import redis from 'redis';
import session from 'express-session';
import connectRedis from 'connect-redis';

import { createConnection } from 'typeorm';
import { buildSchema } from 'type-graphql';
import { RegisterResolver } from './modules/User/register';
import { LoginResolver } from './modules/User/Login';
import { validationErrorHandler } from './services/ErrorHandler';

const PORT = process.env.PORT || 8000;

const main = async () => {
  const app = Express();

  app.use(
    cors({
      credentials: true,
      origin: 'http://localhost:3000',
    })
  );

  const RedisStore = connectRedis(session);
  const redisClient = redis.createClient();

  app.use(
    session({
      name: 'qid',
      store: new RedisStore({
        client: redisClient,
        disableTouch: true,
      }),
      cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 365 * 10,
        httpOnly: true,
        sameSite: 'lax',
        // secure,
      },
      secret: `${process.env.SECRET}`,
      resave: false,
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
    formatError: (err: any) => {
      return validationErrorHandler(err);
    },
  });

  apolloServer.applyMiddleware({ app });

  app.listen(PORT, () => {
    console.log(`listening on port: ${PORT}/graphql`);
  });
};

main();
