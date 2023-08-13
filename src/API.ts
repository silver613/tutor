/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateSeminarInput = {
  id?: string | null,
  userID: string,
};

export type ModelSeminarConditionInput = {
  userID?: ModelIDInput | null,
  and?: Array< ModelSeminarConditionInput | null > | null,
  or?: Array< ModelSeminarConditionInput | null > | null,
  not?: ModelSeminarConditionInput | null,
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

export type Seminar = {
  __typename: "Seminar",
  id: string,
  userID: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateSeminarInput = {
  id: string,
  userID?: string | null,
};

export type DeleteSeminarInput = {
  id: string,
};

export type CreateLessonInput = {
  id?: string | null,
  userID: string,
  title?: string | null,
  price?: number | null,
  currency?: string | null,
  type?: string | null,
  category?: string | null,
  description?: string | null,
  languages?: string | null,
};

export type ModelLessonConditionInput = {
  userID?: ModelIDInput | null,
  title?: ModelStringInput | null,
  price?: ModelFloatInput | null,
  currency?: ModelStringInput | null,
  type?: ModelStringInput | null,
  category?: ModelStringInput | null,
  description?: ModelStringInput | null,
  languages?: ModelStringInput | null,
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

export type Lesson = {
  __typename: "Lesson",
  id: string,
  userID: string,
  title?: string | null,
  price?: number | null,
  currency?: string | null,
  type?: string | null,
  category?: string | null,
  description?: string | null,
  languages?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateLessonInput = {
  id: string,
  userID?: string | null,
  title?: string | null,
  price?: number | null,
  currency?: string | null,
  type?: string | null,
  category?: string | null,
  description?: string | null,
  languages?: string | null,
};

export type DeleteLessonInput = {
  id: string,
};

export type CreateUserInput = {
  id?: string | null,
  cognitoUserID: string,
  balance?: number | null,
};

export type ModelUserConditionInput = {
  cognitoUserID?: ModelIDInput | null,
  balance?: ModelFloatInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
};

export type User = {
  __typename: "User",
  id: string,
  cognitoUserID: string,
  balance?: number | null,
  Lessons?: ModelLessonConnection | null,
  Seminars?: ModelSeminarConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelLessonConnection = {
  __typename: "ModelLessonConnection",
  items:  Array<Lesson | null >,
  nextToken?: string | null,
};

export type ModelSeminarConnection = {
  __typename: "ModelSeminarConnection",
  items:  Array<Seminar | null >,
  nextToken?: string | null,
};

export type UpdateUserInput = {
  id: string,
  cognitoUserID?: string | null,
  balance?: number | null,
};

export type DeleteUserInput = {
  id: string,
};

export type ModelSeminarFilterInput = {
  id?: ModelIDInput | null,
  userID?: ModelIDInput | null,
  and?: Array< ModelSeminarFilterInput | null > | null,
  or?: Array< ModelSeminarFilterInput | null > | null,
  not?: ModelSeminarFilterInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelLessonFilterInput = {
  id?: ModelIDInput | null,
  userID?: ModelIDInput | null,
  title?: ModelStringInput | null,
  price?: ModelFloatInput | null,
  currency?: ModelStringInput | null,
  type?: ModelStringInput | null,
  category?: ModelStringInput | null,
  description?: ModelStringInput | null,
  languages?: ModelStringInput | null,
  and?: Array< ModelLessonFilterInput | null > | null,
  or?: Array< ModelLessonFilterInput | null > | null,
  not?: ModelLessonFilterInput | null,
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null,
  cognitoUserID?: ModelIDInput | null,
  balance?: ModelFloatInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection",
  items:  Array<User | null >,
  nextToken?: string | null,
};

export type ModelSubscriptionSeminarFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  userID?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionSeminarFilterInput | null > | null,
  or?: Array< ModelSubscriptionSeminarFilterInput | null > | null,
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
  userID?: ModelSubscriptionIDInput | null,
  title?: ModelSubscriptionStringInput | null,
  price?: ModelSubscriptionFloatInput | null,
  currency?: ModelSubscriptionStringInput | null,
  type?: ModelSubscriptionStringInput | null,
  category?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  languages?: ModelSubscriptionStringInput | null,
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

export type ModelSubscriptionUserFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  cognitoUserID?: ModelSubscriptionIDInput | null,
  balance?: ModelSubscriptionFloatInput | null,
  and?: Array< ModelSubscriptionUserFilterInput | null > | null,
  or?: Array< ModelSubscriptionUserFilterInput | null > | null,
};

export type CreateSeminarMutationVariables = {
  input: CreateSeminarInput,
  condition?: ModelSeminarConditionInput | null,
};

export type CreateSeminarMutation = {
  createSeminar?:  {
    __typename: "Seminar",
    id: string,
    userID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateSeminarMutationVariables = {
  input: UpdateSeminarInput,
  condition?: ModelSeminarConditionInput | null,
};

export type UpdateSeminarMutation = {
  updateSeminar?:  {
    __typename: "Seminar",
    id: string,
    userID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteSeminarMutationVariables = {
  input: DeleteSeminarInput,
  condition?: ModelSeminarConditionInput | null,
};

export type DeleteSeminarMutation = {
  deleteSeminar?:  {
    __typename: "Seminar",
    id: string,
    userID: string,
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
    userID: string,
    title?: string | null,
    price?: number | null,
    currency?: string | null,
    type?: string | null,
    category?: string | null,
    description?: string | null,
    languages?: string | null,
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
    userID: string,
    title?: string | null,
    price?: number | null,
    currency?: string | null,
    type?: string | null,
    category?: string | null,
    description?: string | null,
    languages?: string | null,
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
    userID: string,
    title?: string | null,
    price?: number | null,
    currency?: string | null,
    type?: string | null,
    category?: string | null,
    description?: string | null,
    languages?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateUserMutationVariables = {
  input: CreateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type CreateUserMutation = {
  createUser?:  {
    __typename: "User",
    id: string,
    cognitoUserID: string,
    balance?: number | null,
    Lessons?:  {
      __typename: "ModelLessonConnection",
      items:  Array< {
        __typename: "Lesson",
        id: string,
        userID: string,
        title?: string | null,
        price?: number | null,
        currency?: string | null,
        type?: string | null,
        category?: string | null,
        description?: string | null,
        languages?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    Seminars?:  {
      __typename: "ModelSeminarConnection",
      items:  Array< {
        __typename: "Seminar",
        id: string,
        userID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type UpdateUserMutation = {
  updateUser?:  {
    __typename: "User",
    id: string,
    cognitoUserID: string,
    balance?: number | null,
    Lessons?:  {
      __typename: "ModelLessonConnection",
      items:  Array< {
        __typename: "Lesson",
        id: string,
        userID: string,
        title?: string | null,
        price?: number | null,
        currency?: string | null,
        type?: string | null,
        category?: string | null,
        description?: string | null,
        languages?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    Seminars?:  {
      __typename: "ModelSeminarConnection",
      items:  Array< {
        __typename: "Seminar",
        id: string,
        userID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteUserMutationVariables = {
  input: DeleteUserInput,
  condition?: ModelUserConditionInput | null,
};

export type DeleteUserMutation = {
  deleteUser?:  {
    __typename: "User",
    id: string,
    cognitoUserID: string,
    balance?: number | null,
    Lessons?:  {
      __typename: "ModelLessonConnection",
      items:  Array< {
        __typename: "Lesson",
        id: string,
        userID: string,
        title?: string | null,
        price?: number | null,
        currency?: string | null,
        type?: string | null,
        category?: string | null,
        description?: string | null,
        languages?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    Seminars?:  {
      __typename: "ModelSeminarConnection",
      items:  Array< {
        __typename: "Seminar",
        id: string,
        userID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetSeminarQueryVariables = {
  id: string,
};

export type GetSeminarQuery = {
  getSeminar?:  {
    __typename: "Seminar",
    id: string,
    userID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListSeminarsQueryVariables = {
  filter?: ModelSeminarFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListSeminarsQuery = {
  listSeminars?:  {
    __typename: "ModelSeminarConnection",
    items:  Array< {
      __typename: "Seminar",
      id: string,
      userID: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type SeminarsByUserIDQueryVariables = {
  userID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelSeminarFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type SeminarsByUserIDQuery = {
  seminarsByUserID?:  {
    __typename: "ModelSeminarConnection",
    items:  Array< {
      __typename: "Seminar",
      id: string,
      userID: string,
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
    userID: string,
    title?: string | null,
    price?: number | null,
    currency?: string | null,
    type?: string | null,
    category?: string | null,
    description?: string | null,
    languages?: string | null,
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
      userID: string,
      title?: string | null,
      price?: number | null,
      currency?: string | null,
      type?: string | null,
      category?: string | null,
      description?: string | null,
      languages?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type LessonsByUserIDQueryVariables = {
  userID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelLessonFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type LessonsByUserIDQuery = {
  lessonsByUserID?:  {
    __typename: "ModelLessonConnection",
    items:  Array< {
      __typename: "Lesson",
      id: string,
      userID: string,
      title?: string | null,
      price?: number | null,
      currency?: string | null,
      type?: string | null,
      category?: string | null,
      description?: string | null,
      languages?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser?:  {
    __typename: "User",
    id: string,
    cognitoUserID: string,
    balance?: number | null,
    Lessons?:  {
      __typename: "ModelLessonConnection",
      items:  Array< {
        __typename: "Lesson",
        id: string,
        userID: string,
        title?: string | null,
        price?: number | null,
        currency?: string | null,
        type?: string | null,
        category?: string | null,
        description?: string | null,
        languages?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    Seminars?:  {
      __typename: "ModelSeminarConnection",
      items:  Array< {
        __typename: "Seminar",
        id: string,
        userID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      cognitoUserID: string,
      balance?: number | null,
      Lessons?:  {
        __typename: "ModelLessonConnection",
        items:  Array< {
          __typename: "Lesson",
          id: string,
          userID: string,
          title?: string | null,
          price?: number | null,
          currency?: string | null,
          type?: string | null,
          category?: string | null,
          description?: string | null,
          languages?: string | null,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      Seminars?:  {
        __typename: "ModelSeminarConnection",
        items:  Array< {
          __typename: "Seminar",
          id: string,
          userID: string,
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

export type OnCreateSeminarSubscriptionVariables = {
  filter?: ModelSubscriptionSeminarFilterInput | null,
};

export type OnCreateSeminarSubscription = {
  onCreateSeminar?:  {
    __typename: "Seminar",
    id: string,
    userID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateSeminarSubscriptionVariables = {
  filter?: ModelSubscriptionSeminarFilterInput | null,
};

export type OnUpdateSeminarSubscription = {
  onUpdateSeminar?:  {
    __typename: "Seminar",
    id: string,
    userID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteSeminarSubscriptionVariables = {
  filter?: ModelSubscriptionSeminarFilterInput | null,
};

export type OnDeleteSeminarSubscription = {
  onDeleteSeminar?:  {
    __typename: "Seminar",
    id: string,
    userID: string,
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
    userID: string,
    title?: string | null,
    price?: number | null,
    currency?: string | null,
    type?: string | null,
    category?: string | null,
    description?: string | null,
    languages?: string | null,
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
    userID: string,
    title?: string | null,
    price?: number | null,
    currency?: string | null,
    type?: string | null,
    category?: string | null,
    description?: string | null,
    languages?: string | null,
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
    userID: string,
    title?: string | null,
    price?: number | null,
    currency?: string | null,
    type?: string | null,
    category?: string | null,
    description?: string | null,
    languages?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnCreateUserSubscription = {
  onCreateUser?:  {
    __typename: "User",
    id: string,
    cognitoUserID: string,
    balance?: number | null,
    Lessons?:  {
      __typename: "ModelLessonConnection",
      items:  Array< {
        __typename: "Lesson",
        id: string,
        userID: string,
        title?: string | null,
        price?: number | null,
        currency?: string | null,
        type?: string | null,
        category?: string | null,
        description?: string | null,
        languages?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    Seminars?:  {
      __typename: "ModelSeminarConnection",
      items:  Array< {
        __typename: "Seminar",
        id: string,
        userID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser?:  {
    __typename: "User",
    id: string,
    cognitoUserID: string,
    balance?: number | null,
    Lessons?:  {
      __typename: "ModelLessonConnection",
      items:  Array< {
        __typename: "Lesson",
        id: string,
        userID: string,
        title?: string | null,
        price?: number | null,
        currency?: string | null,
        type?: string | null,
        category?: string | null,
        description?: string | null,
        languages?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    Seminars?:  {
      __typename: "ModelSeminarConnection",
      items:  Array< {
        __typename: "Seminar",
        id: string,
        userID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser?:  {
    __typename: "User",
    id: string,
    cognitoUserID: string,
    balance?: number | null,
    Lessons?:  {
      __typename: "ModelLessonConnection",
      items:  Array< {
        __typename: "Lesson",
        id: string,
        userID: string,
        title?: string | null,
        price?: number | null,
        currency?: string | null,
        type?: string | null,
        category?: string | null,
        description?: string | null,
        languages?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    Seminars?:  {
      __typename: "ModelSeminarConnection",
      items:  Array< {
        __typename: "Seminar",
        id: string,
        userID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};
