import { gql } from "@apollo/client";
import { AUTH_USER_FRAGMENT } from "./mutations";

export const ME_QUERY = gql`
  ${AUTH_USER_FRAGMENT}
  query Me {
    me {
      ...AuthUserFields
    }
  }
`;
