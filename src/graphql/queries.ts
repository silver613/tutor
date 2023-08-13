/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getSeminar = /* GraphQL */ `
  query GetSeminar($id: ID!) {
    getSeminar(id: $id) {
      id
      userID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listSeminars = /* GraphQL */ `
  query ListSeminars(
    $filter: ModelSeminarFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSeminars(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userID
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const seminarsByUserID = /* GraphQL */ `
  query SeminarsByUserID(
    $userID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelSeminarFilterInput
    $limit: Int
    $nextToken: String
  ) {
    seminarsByUserID(
      userID: $userID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        userID
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getLesson = /* GraphQL */ `
  query GetLesson($id: ID!) {
    getLesson(id: $id) {
      id
      userID
      title
      price
      currency
      type
      category
      description
      languages
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listLessons = /* GraphQL */ `
  query ListLessons(
    $filter: ModelLessonFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLessons(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userID
        title
        price
        currency
        type
        category
        description
        languages
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const lessonsByUserID = /* GraphQL */ `
  query LessonsByUserID(
    $userID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelLessonFilterInput
    $limit: Int
    $nextToken: String
  ) {
    lessonsByUserID(
      userID: $userID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        userID
        title
        price
        currency
        type
        category
        description
        languages
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      cognitoUserID
      balance
      Lessons {
        items {
          id
          userID
          title
          price
          currency
          type
          category
          description
          languages
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      Seminars {
        items {
          id
          userID
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        cognitoUserID
        balance
        Lessons {
          items {
            id
            userID
            title
            price
            currency
            type
            category
            description
            languages
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        Seminars {
          items {
            id
            userID
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
