import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client  = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4po2xmj23ga01xshx466iko/master',
  cache: new InMemoryCache()
});