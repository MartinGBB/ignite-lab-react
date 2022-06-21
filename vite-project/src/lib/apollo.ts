import { ApolloClient, InMemoryCache } from "@apollo/client";


export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4ogw4mq05pu01xsce7he6l0/master',
  cache: new InMemoryCache()
})