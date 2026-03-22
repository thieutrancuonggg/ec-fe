import { gql } from "@apollo/client";

export const AUTH_USER_FRAGMENT = gql`
  fragment AuthUserFields on User {
    id
    email
    name
    role
    createdAt
    updatedAt
  }
`;

export const LOGIN_MUTATION = gql`
  ${AUTH_USER_FRAGMENT}
  mutation Login($input: LoginInput!) {
    login(input: $input) {
      accessToken
      refreshToken
      user {
        ...AuthUserFields
      }
    }
  }
`;

export const REGISTER_MUTATION = gql`
  ${AUTH_USER_FRAGMENT}
  mutation Register($input: RegisterInput!) {
    register(input: $input) {
      accessToken
      refreshToken
      user {
        ...AuthUserFields
      }
    }
  }
`;

export const REFRESH_TOKEN_MUTATION = gql`
  ${AUTH_USER_FRAGMENT}
  mutation RefreshToken($input: RefreshTokenInput!) {
    refreshToken(input: $input) {
      accessToken
      refreshToken
      user {
        ...AuthUserFields
      }
    }
  }
`;

export const LOGOUT_MUTATION = gql`
  mutation Logout {
    logout
  }
`;
