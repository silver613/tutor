/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createSeminar = /* GraphQL */ `
  mutation CreateSeminar(
    $input: CreateSeminarInput!
    $condition: ModelSeminarConditionInput
  ) {
    createSeminar(input: $input, condition: $condition) {
      id
      userID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateSeminar = /* GraphQL */ `
  mutation UpdateSeminar(
    $input: UpdateSeminarInput!
    $condition: ModelSeminarConditionInput
  ) {
    updateSeminar(input: $input, condition: $condition) {
      id
      userID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteSeminar = /* GraphQL */ `
  mutation DeleteSeminar(
    $input: DeleteSeminarInput!
    $condition: ModelSeminarConditionInput
  ) {
    deleteSeminar(input: $input, condition: $condition) {
      id
      userID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createLesson = /* GraphQL */ `
  mutation CreateLesson(
    $input: CreateLessonInput!
    $condition: ModelLessonConditionInput
  ) {
    createLesson(input: $input, condition: $condition) {
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
export const updateLesson = /* GraphQL */ `
  mutation UpdateLesson(
    $input: UpdateLessonInput!
    $condition: ModelLessonConditionInput
  ) {
    updateLesson(input: $input, condition: $condition) {
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
export const deleteLesson = /* GraphQL */ `
  mutation DeleteLesson(
    $input: DeleteLessonInput!
    $condition: ModelLessonConditionInput
  ) {
    deleteLesson(input: $input, condition: $condition) {
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
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
