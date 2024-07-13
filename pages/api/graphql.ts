// pages/api/graphql.ts
import { ApolloServer } from 'apollo-server-micro';
import { typeDefs } from './schema';
import { resolvers } from './resolvers';
import dbConnect from '../../utils/dbConnect';

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  context: async () => {
    await dbConnect();
    // You can add more context properties here if needed
  }
});

// Start the Apollo server
const startServer = apolloServer.start();

export const config = {
  api: {
    bodyParser: false
  }
};

export default async function handler(req, res) {
  // Wait for the Apollo server to start
  await startServer;

  // Create the handler after the server has started
  const apolloHandler = apolloServer.createHandler({ path: '/api/graphql' });

  // If the request is for the OPTIONS method, respond with OK status
  if (req.method === 'OPTIONS') {
    res.end();
    return;
  }

  // For all other requests, use the Apollo handler
  return apolloHandler(req, res);
}
