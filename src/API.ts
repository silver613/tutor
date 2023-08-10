/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateUserModelInput = {
  id?: string | null,
  cognitoUserID: string,
};

export type ModelUserModelConditionInput = {
  cognitoUserID?: ModelIDInput | null,
  and?: Array< ModelUserModelConditionInput | null > | null,
  or?: Array< ModelUserModelConditionInput | null > | null,
  not?: ModelUserModelConditionInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type UserModel = {
  __typename: "UserModel",
  id: string,
  cognitoUserID: string,
  Lessons?: ModelLessonConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelLessonConnection = {
  __typename: "ModelLessonConnection",
  items:  Array<Lesson | null >,
  nextToken?: string | null,
};

export type Lesson = {
  __typename: "Lesson",
  id: string,
  title: string,
  categoryID: string,
  price: number,
  type: LessonType,
  description: string,
  ownerID: string,
  createdAt: string,
  updatedAt: string,
};

export enum LessonType {
  SEMINAR = "SEMINAR",
  MIN30 = "MIN30",
  MIN60 = "MIN60",
}


export type UpdateUserModelInput = {
  id: string,
  cognitoUserID?: string | null,
};

export type DeleteUserModelInput = {
  id: string,
};

export type CreateLessonInput = {
  id?: string | null,
  title: string,
  categoryID: string,
  price: number,
  type: LessonType,
  description: string,
  ownerID: string,
};

export type ModelLessonConditionInput = {
  title?: ModelStringInput | null,
  categoryID?: ModelIDInput | null,
  price?: ModelFloatInput | null,
  type?: ModelLessonTypeInput | null,
  description?: ModelStringInput | null,
  ownerID?: ModelIDInput | null,
  and?: Array< ModelLessonConditionInput | null > | null,
  or?: Array< ModelLessonConditionInput | null > | null,
  not?: ModelLessonConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelLessonTypeInput = {
  eq?: LessonType | null,
  ne?: LessonType | null,
};

export type UpdateLessonInput = {
  id: string,
  title?: string | null,
  categoryID?: string | null,
  price?: number | null,
  type?: LessonType | null,
  description?: string | null,
  ownerID?: string | null,
};

export type DeleteLessonInput = {
  id: string,
};

export type CreateCategoryInput = {
  id?: string | null,
  label: string,
};

export type ModelCategoryConditionInput = {
  label?: ModelStringInput | null,
  and?: Array< ModelCategoryConditionInput | null > | null,
  or?: Array< ModelCategoryConditionInput | null > | null,
  not?: ModelCategoryConditionInput | null,
};

export type Category = {
  __typename: "Category",
  id: string,
  label: string,
  Lessons?: ModelLessonConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateCategoryInput = {
  id: string,
  label?: string | null,
};

export type DeleteCategoryInput = {
  id: string,
};

export type ModelUserModelFilterInput = {
  id?: ModelIDInput | null,
  cognitoUserID?: ModelIDInput | null,
  and?: Array< ModelUserModelFilterInput | null > | null,
  or?: Array< ModelUserModelFilterInput | null > | null,
  not?: ModelUserModelFilterInput | null,
};

export type ModelUserModelConnection = {
  __typename: "ModelUserModelConnection",
  items:  Array<UserModel | null >,
  nextToken?: string | null,
};

export type ModelLessonFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  categoryID?: ModelIDInput | null,
  price?: ModelFloatInput | null,
  type?: ModelLessonTypeInput | null,
  description?: ModelStringInput | null,
  ownerID?: ModelIDInput | null,
  and?: Array< ModelLessonFilterInput | null > | null,
  or?: Array< ModelLessonFilterInput | null > | null,
  not?: ModelLessonFilterInput | null,
};

export type ModelCategoryFilterInput = {
  id?: ModelIDInput | null,
  label?: ModelStringInput | null,
  and?: Array< ModelCategoryFilterInput | null > | null,
  or?: Array< ModelCategoryFilterInput | null > | null,
  not?: ModelCategoryFilterInput | null,
};

export type ModelCategoryConnection = {
  __typename: "ModelCategoryConnection",
  items:  Array<Category | null >,
  nextToken?: string | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelSubscriptionUserModelFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  cognitoUserID?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionUserModelFilterInput | null > | null,
  or?: Array< ModelSubscriptionUserModelFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionLessonFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  title?: ModelSubscriptionStringInput | null,
  categoryID?: ModelSubscriptionIDInput | null,
  price?: ModelSubscriptionFloatInput | null,
  type?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  ownerID?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionLessonFilterInput | null > | null,
  or?: Array< ModelSubscriptionLessonFilterInput | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionCategoryFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  label?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionCategoryFilterInput | null > | null,
  or?: Array< ModelSubscriptionCategoryFilterInput | null > | null,
};

export type CreateUserModelMutationVariables = {
  input: CreateUserModelInput,
  condition?: ModelUserModelConditionInput | null,
};

export type CreateUserModelMutation = {
  createUserModel?:  {
    __typename: "UserModel",
    id: string,
    cognitoUserID: string,
    Lessons?:  {
      __typename: "ModelLessonConnection",
      items:  Array< {
        __typename: "Lesson",
        id: string,
        title: string,
        categoryID: string,
        price: number,
        type: LessonType,
        description: string,
        ownerID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateUserModelMutationVariables = {
  input: UpdateUserModelInput,
  condition?: ModelUserModelConditionInput | null,
};

export type UpdateUserModelMutation = {
  updateUserModel?:  {
    __typename: "UserModel",
    id: string,
    cognitoUserID: string,
    Lessons?:  {
      __typename: "ModelLessonConnection",
      items:  Array< {
        __typename: "Lesson",
        id: string,
        title: string,
        categoryID: string,
        price: number,
        type: LessonType,
        description: string,
        ownerID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteUserModelMutationVariables = {
  input: DeleteUserModelInput,
  condition?: ModelUserModelConditionInput | null,
};

export type DeleteUserModelMutation = {
  deleteUserModel?:  {
    __typename: "UserModel",
    id: string,
    cognitoUserID: string,
    Lessons?:  {
      __typename: "ModelLessonConnection",
      items:  Array< {
        __typename: "Lesson",
        id: string,
        title: string,
        categoryID: string,
        price: number,
        type: LessonType,
        description: string,
        ownerID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateLessonMutationVariables = {
  input: CreateLessonInput,
  condition?: ModelLessonConditionInput | null,
};

export type CreateLessonMutation = {
  createLesson?:  {
    __typename: "Lesson",
    id: string,
    title: string,
    categoryID: string,
    price: number,
    type: LessonType,
    description: string,
    ownerID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateLessonMutationVariables = {
  input: UpdateLessonInput,
  condition?: ModelLessonConditionInput | null,
};

export type UpdateLessonMutation = {
  updateLesson?:  {
    __typename: "Lesson",
    id: string,
    title: string,
    categoryID: string,
    price: number,
    type: LessonType,
    description: string,
    ownerID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteLessonMutationVariables = {
  input: DeleteLessonInput,
  condition?: ModelLessonConditionInput | null,
};

export type DeleteLessonMutation = {
  deleteLesson?:  {
    __typename: "Lesson",
    id: string,
    title: string,
    categoryID: string,
    price: number,
    type: LessonType,
    description: string,
    ownerID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateCategoryMutationVariables = {
  input: CreateCategoryInput,
  condition?: ModelCategoryConditionInput | null,
};

export type CreateCategoryMutation = {
  createCategory?:  {
    __typename: "Category",
    id: string,
    label: string,
    Lessons?:  {
      __typename: "ModelLessonConnection",
      items:  Array< {
        __typename: "Lesson",
        id: string,
        title: string,
        categoryID: string,
        price: number,
        type: LessonType,
        description: string,
        ownerID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateCategoryMutationVariables = {
  input: UpdateCategoryInput,
  condition?: ModelCategoryConditionInput | null,
};

export type UpdateCategoryMutation = {
  updateCategory?:  {
    __typename: "Category",
    id: string,
    label: string,
    Lessons?:  {
      __typename: "ModelLessonConnection",
      items:  Array< {
        __typename: "Lesson",
        id: string,
        title: string,
        categoryID: string,
        price: number,
        type: LessonType,
        description: string,
        ownerID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteCategoryMutationVariables = {
  input: DeleteCategoryInput,
  condition?: ModelCategoryConditionInput | null,
};

export type DeleteCategoryMutation = {
  deleteCategory?:  {
    __typename: "Category",
    id: string,
    label: string,
    Lessons?:  {
      __typename: "ModelLessonConnection",
      items:  Array< {
        __typename: "Lesson",
        id: string,
        title: string,
        categoryID: string,
        price: number,
        type: LessonType,
        description: string,
        ownerID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetUserModelQueryVariables = {
  id: string,
};

export type GetUserModelQuery = {
  getUserModel?:  {
    __typename: "UserModel",
    id: string,
    cognitoUserID: string,
    Lessons?:  {
      __typename: "ModelLessonConnection",
      items:  Array< {
        __typename: "Lesson",
        id: string,
        title: string,
        categoryID: string,
        price: number,
        type: LessonType,
        description: string,
        ownerID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListUserModelsQueryVariables = {
  filter?: ModelUserModelFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUserModelsQuery = {
  listUserModels?:  {
    __typename: "ModelUserModelConnection",
    items:  Array< {
      __typename: "UserModel",
      id: string,
      cognitoUserID: string,
      Lessons?:  {
        __typename: "ModelLessonConnection",
        items:  Array< {
          __typename: "Lesson",
          id: string,
          title: string,
          categoryID: string,
          price: number,
          type: LessonType,
          description: string,
          ownerID: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetLessonQueryVariables = {
  id: string,
};

export type GetLessonQuery = {
  getLesson?:  {
    __typename: "Lesson",
    id: string,
    title: string,
    categoryID: string,
    price: number,
    type: LessonType,
    description: string,
    ownerID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListLessonsQueryVariables = {
  filter?: ModelLessonFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListLessonsQuery = {
  listLessons?:  {
    __typename: "ModelLessonConnection",
    items:  Array< {
      __typename: "Lesson",
      id: string,
      title: string,
      categoryID: string,
      price: number,
      type: LessonType,
      description: string,
      ownerID: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetCategoryQueryVariables = {
  id: string,
};

export type GetCategoryQuery = {
  getCategory?:  {
    __typename: "Category",
    id: string,
    label: string,
    Lessons?:  {
      __typename: "ModelLessonConnection",
      items:  Array< {
        __typename: "Lesson",
        id: string,
        title: string,
        categoryID: string,
        price: number,
        type: LessonType,
        description: string,
        ownerID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListCategoriesQueryVariables = {
  filter?: ModelCategoryFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCategoriesQuery = {
  listCategories?:  {
    __typename: "ModelCategoryConnection",
    items:  Array< {
      __typename: "Category",
      id: string,
      label: string,
      Lessons?:  {
        __typename: "ModelLessonConnection",
        items:  Array< {
          __typename: "Lesson",
          id: string,
          title: string,
          categoryID: string,
          price: number,
          type: LessonType,
          description: string,
          ownerID: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type LessonsByCategoryIDQueryVariables = {
  categoryID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelLessonFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type LessonsByCategoryIDQuery = {
  lessonsByCategoryID?:  {
    __typename: "ModelLessonConnection",
    items:  Array< {
      __typename: "Lesson",
      id: string,
      title: string,
      categoryID: string,
      price: number,
      type: LessonType,
      description: string,
      ownerID: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type LessonsByOwnerIDQueryVariables = {
  ownerID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelLessonFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type LessonsByOwnerIDQuery = {
  lessonsByOwnerID?:  {
    __typename: "ModelLessonConnection",
    items:  Array< {
      __typename: "Lesson",
      id: string,
      title: string,
      categoryID: string,
      price: number,
      type: LessonType,
      description: string,
      ownerID: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateUserModelSubscriptionVariables = {
  filter?: ModelSubscriptionUserModelFilterInput | null,
};

export type OnCreateUserModelSubscription = {
  onCreateUserModel?:  {
    __typename: "UserModel",
    id: string,
    cognitoUserID: string,
    Lessons?:  {
      __typename: "ModelLessonConnection",
      items:  Array< {
        __typename: "Lesson",
        id: string,
        title: string,
        categoryID: string,
        price: number,
        type: LessonType,
        description: string,
        ownerID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateUserModelSubscriptionVariables = {
  filter?: ModelSubscriptionUserModelFilterInput | null,
};

export type OnUpdateUserModelSubscription = {
  onUpdateUserModel?:  {
    __typename: "UserModel",
    id: string,
    cognitoUserID: string,
    Lessons?:  {
      __typename: "ModelLessonConnection",
      items:  Array< {
        __typename: "Lesson",
        id: string,
        title: string,
        categoryID: string,
        price: number,
        type: LessonType,
        description: string,
        ownerID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteUserModelSubscriptionVariables = {
  filter?: ModelSubscriptionUserModelFilterInput | null,
};

export type OnDeleteUserModelSubscription = {
  onDeleteUserModel?:  {
    __typename: "UserModel",
    id: string,
    cognitoUserID: string,
    Lessons?:  {
      __typename: "ModelLessonConnection",
      items:  Array< {
        __typename: "Lesson",
        id: string,
        title: string,
        categoryID: string,
        price: number,
        type: LessonType,
        description: string,
        ownerID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateLessonSubscriptionVariables = {
  filter?: ModelSubscriptionLessonFilterInput | null,
};

export type OnCreateLessonSubscription = {
  onCreateLesson?:  {
    __typename: "Lesson",
    id: string,
    title: string,
    categoryID: string,
    price: number,
    type: LessonType,
    description: string,
    ownerID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateLessonSubscriptionVariables = {
  filter?: ModelSubscriptionLessonFilterInput | null,
};

export type OnUpdateLessonSubscription = {
  onUpdateLesson?:  {
    __typename: "Lesson",
    id: string,
    title: string,
    categoryID: string,
    price: number,
    type: LessonType,
    description: string,
    ownerID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteLessonSubscriptionVariables = {
  filter?: ModelSubscriptionLessonFilterInput | null,
};

export type OnDeleteLessonSubscription = {
  onDeleteLesson?:  {
    __typename: "Lesson",
    id: string,
    title: string,
    categoryID: string,
    price: number,
    type: LessonType,
    description: string,
    ownerID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateCategorySubscriptionVariables = {
  filter?: ModelSubscriptionCategoryFilterInput | null,
};

export type OnCreateCategorySubscription = {
  onCreateCategory?:  {
    __typename: "Category",
    id: string,
    label: string,
    Lessons?:  {
      __typename: "ModelLessonConnection",
      items:  Array< {
        __typename: "Lesson",
        id: string,
        title: string,
        categoryID: string,
        price: number,
        type: LessonType,
        description: string,
        ownerID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateCategorySubscriptionVariables = {
  filter?: ModelSubscriptionCategoryFilterInput | null,
};

export type OnUpdateCategorySubscription = {
  onUpdateCategory?:  {
    __typename: "Category",
    id: string,
    label: string,
    Lessons?:  {
      __typename: "ModelLessonConnection",
      items:  Array< {
        __typename: "Lesson",
        id: string,
        title: string,
        categoryID: string,
        price: number,
        type: LessonType,
        description: string,
        ownerID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteCategorySubscriptionVariables = {
  filter?: ModelSubscriptionCategoryFilterInput | null,
};

export type OnDeleteCategorySubscription = {
  onDeleteCategory?:  {
    __typename: "Category",
    id: string,
    label: string,
    Lessons?:  {
      __typename: "ModelLessonConnection",
      items:  Array< {
        __typename: "Lesson",
        id: string,
        title: string,
        categoryID: string,
        price: number,
        type: LessonType,
        description: string,
        ownerID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};
