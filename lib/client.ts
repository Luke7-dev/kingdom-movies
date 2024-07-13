import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';
import { PANDA_APOLLO } from '@utils';

const httpLink = new HttpLink({
  uri: PANDA_APOLLO
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
});

export default client;
