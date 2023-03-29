import { gql } from "@apollo/client";

export const ROCKETS_QUERY = gql`
  query Rockets {
    rockets {
      id
      name
      description
    }
  }
`;

export const ROCKET_QUERY = gql`
  query Rocket($rocketId: ID!) {
    rocket(id: $rocketId) {
      id
      name
      description
    }
  }
`;
