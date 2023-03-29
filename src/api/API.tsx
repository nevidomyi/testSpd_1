import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql,
} from "@apollo/client";
import { ROCKETS_QUERY, ROCKET_QUERY } from "./queries";

export type Rocket = {
  id: string;
  name: string;
  description: string;
};

const client = new ApolloClient({
  uri: "https://spacex-production.up.railway.app/",
  cache: new InMemoryCache(),
});

export function useRockets() {
  return useQuery<{ rockets: Rocket[] }>(ROCKETS_QUERY, { client });
}

export function useRocket(rocketId: string) {
  const { data } = useQuery<{ rocket: Rocket }>(ROCKET_QUERY, {
    client,
    variables: { rocketId },
  });

  return data?.rocket;
}

export default function APIProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
