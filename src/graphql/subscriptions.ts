/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateSeminar = /* GraphQL */ `
  subscription OnCreateSeminar($filter: ModelSubscriptionSeminarFilterInput) {
    onCreateSeminar(filter: $filter) {
      id
      userID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateSeminar = /* GraphQL */ `
  subscription OnUpdateSeminar($filter: ModelSubscriptionSeminarFilterInput) {
    onUpdateSeminar(filter: $filter) {
      id
      userID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteSeminar = /* GraphQL */ `
  subscription OnDeleteSeminar($filter: ModelSubscriptionSeminarFilterInput) {
    onDeleteSeminar(filter: $filter) {
      id
      userID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreateLesson = /* GraphQL */ `
  subscription OnCreateLesson($filter: ModelSubscriptionLessonFilterInput) {
    onCreateLesson(filter: $filter) {
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
export const onUpdateLesson = /* GraphQL */ `
  subscription OnUpdateLesson($filter: ModelSubscriptionLessonFilterInput) {
    onUpdateLesson(filter: $filter) {
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
export const onDeleteLesson = /* GraphQL */ `
  subscription OnDeleteLesson($filter: ModelSubscriptionLessonFilterInput) {
    onDeleteLesson(filter: $filter) {
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
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
    onCreateUser(filter: $filter) {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
    onUpdateUser(filter: $filter) {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
    onDeleteUser(filter: $filter) {
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
