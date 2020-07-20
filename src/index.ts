import { ApolloServer } from "apollo-server-express";
import express from "express";
import chalk from "chalk";

const PORT = process.env.PORT || 8000;

const main = () => {
  const app = express();
  app.use(express.json());

  const apolloServer = new ApolloServer({});

  apolloServer.applyMiddleware({ app });

  app.listen(PORT, () =>
    console.log(chalk.blue(`Server listening on port: ${chalk.yellow(PORT)}`))
  );
};

main();
