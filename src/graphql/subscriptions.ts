/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUserModel = /* GraphQL */ `
  subscription OnCreateUserModel(
    $filter: ModelSubscriptionUserModelFilterInput
  ) {
    onCreateUserModel(filter: $filter) {
      id
      cognitoUserID
      Lessons {
        items {
          id
          title
          categoryID
          price
          type
          description
          ownerID
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
export const onUpdateUserModel = /* GraphQL */ `
  subscription OnUpdateUserModel(
    $filter: ModelSubscriptionUserModelFilterInput
  ) {
    onUpdateUserModel(filter: $filter) {
      id
      cognitoUserID
      Lessons {
        items {
          id
          title
          categoryID
          price
          type
          description
          ownerID
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
export const onDeleteUserModel = /* GraphQL */ `
  subscription OnDeleteUserModel(
    $filter: ModelSubscriptionUserModelFilterInput
  ) {
    onDeleteUserModel(filter: $filter) {
      id
      cognitoUserID
      Lessons {
        items {
          id
          title
          categoryID
          price
          type
          description
          ownerID
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
export const onCreateLesson = /* GraphQL */ `
  subscription OnCreateLesson($filter: ModelSubscriptionLessonFilterInput) {
    onCreateLesson(filter: $filter) {
      id
      title
      categoryID
      price
      type
      description
      ownerID
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
      title
      categoryID
      price
      type
      description
      ownerID
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
      title
      categoryID
      price
      type
      description
      ownerID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreateCategory = /* GraphQL */ `
  subscription OnCreateCategory($filter: ModelSubscriptionCategoryFilterInput) {
    onCreateCategory(filter: $filter) {
      id
      label
      Lessons {
        items {
          id
          title
          categoryID
          price
          type
          description
          ownerID
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
export const onUpdateCategory = /* GraphQL */ `
  subscription OnUpdateCategory($filter: ModelSubscriptionCategoryFilterInput) {
    onUpdateCategory(filter: $filter) {
      id
      label
      Lessons {
        items {
          id
          title
          categoryID
          price
          type
          description
          ownerID
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
export const onDeleteCategory = /* GraphQL */ `
  subscription OnDeleteCategory($filter: ModelSubscriptionCategoryFilterInput) {
    onDeleteCategory(filter: $filter) {
      id
      label
      Lessons {
        items {
          id
          title
          categoryID
          price
          type
          description
          ownerID
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
