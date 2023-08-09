/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUserModel = /* GraphQL */ `
  query GetUserModel($id: ID!) {
    getUserModel(id: $id) {
      id
      cognitoUserID
      Lessons {
        items {
          id
          lessonTitle
          lessonCategoryID
          lessonPrice
          lessonType
          lessonDesc
          lessonOwnerID
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
export const listUserModels = /* GraphQL */ `
  query ListUserModels(
    $filter: ModelUserModelFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserModels(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        cognitoUserID
        Lessons {
          items {
            id
            lessonTitle
            lessonCategoryID
            lessonPrice
            lessonType
            lessonDesc
            lessonOwnerID
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
export const getLesson = /* GraphQL */ `
  query GetLesson($id: ID!) {
    getLesson(id: $id) {
      id
      lessonTitle
      lessonCategoryID
      lessonPrice
      lessonType
      lessonDesc
      lessonOwnerID
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
        lessonTitle
        lessonCategoryID
        lessonPrice
        lessonType
        lessonDesc
        lessonOwnerID
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const lessonsByLessonCategoryID = /* GraphQL */ `
  query LessonsByLessonCategoryID(
    $lessonCategoryID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelLessonFilterInput
    $limit: Int
    $nextToken: String
  ) {
    lessonsByLessonCategoryID(
      lessonCategoryID: $lessonCategoryID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        lessonTitle
        lessonCategoryID
        lessonPrice
        lessonType
        lessonDesc
        lessonOwnerID
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const lessonsByLessonOwnerID = /* GraphQL */ `
  query LessonsByLessonOwnerID(
    $lessonOwnerID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelLessonFilterInput
    $limit: Int
    $nextToken: String
  ) {
    lessonsByLessonOwnerID(
      lessonOwnerID: $lessonOwnerID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        lessonTitle
        lessonCategoryID
        lessonPrice
        lessonType
        lessonDesc
        lessonOwnerID
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getCategory = /* GraphQL */ `
  query GetCategory($id: ID!) {
    getCategory(id: $id) {
      id
      categoryLabel
      Lessons {
        items {
          id
          lessonTitle
          lessonCategoryID
          lessonPrice
          lessonType
          lessonDesc
          lessonOwnerID
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
export const listCategories = /* GraphQL */ `
  query ListCategories(
    $filter: ModelCategoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCategories(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        categoryLabel
        Lessons {
          items {
            id
            lessonTitle
            lessonCategoryID
            lessonPrice
            lessonType
            lessonDesc
            lessonOwnerID
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
