/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateSeminarInput = {
  id?: string | null,
  teacherID: string,
  topic?: string | null,
  seminarCategoryId?: string | null,
};

export type ModelSeminarConditionInput = {
  teacherID?: ModelIDInput | null,
  topic?: ModelStringInput | null,
  and?: Array< ModelSeminarConditionInput | null > | null,
  or?: Array< ModelSeminarConditionInput | null > | null,
  not?: ModelSeminarConditionInput | null,
  seminarCategoryId?: ModelIDInput | null,
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

export type Seminar = {
  __typename: "Seminar",
  id: string,
  teacherID: string,
  topic?: string | null,
  Category?: Category | null,
  createdAt: string,
  updatedAt: string,
  seminarCategoryId?: string | null,
};

export type Category = {
  __typename: "Category",
  id: string,
  label: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateSeminarInput = {
  id: string,
  teacherID?: string | null,
  topic?: string | null,
  seminarCategoryId?: string | null,
};

export type DeleteSeminarInput = {
  id: string,
};

export type CreateTransactionInput = {
  id?: string | null,
  studentID: string,
  teacherID: string,
  amount?: number | null,
  gateway?: string | null,
};

export type ModelTransactionConditionInput = {
  studentID?: ModelIDInput | null,
  teacherID?: ModelIDInput | null,
  amount?: ModelFloatInput | null,
  gateway?: ModelStringInput | null,
  and?: Array< ModelTransactionConditionInput | null > | null,
  or?: Array< ModelTransactionConditionInput | null > | null,
  not?: ModelTransactionConditionInput | null,
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

export type Transaction = {
  __typename: "Transaction",
  id: string,
  studentID: string,
  teacherID: string,
  amount?: number | null,
  gateway?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateTransactionInput = {
  id: string,
  studentID?: string | null,
  teacherID?: string | null,
  amount?: number | null,
  gateway?: string | null,
};

export type DeleteTransactionInput = {
  id: string,
};

export type CreateContractInput = {
  id?: string | null,
  teacherID: string,
  studentID: string,
  status?: string | null,
  channelType?: string | null,
  channelURL?: string | null,
  fromTime?: string | null,
  toTime?: string | null,
  packCount?: string | null,
  feedback?: string | null,
  quality?: string | null,
  clarity?: string | null,
  communication?: string | null,
  kindness?: string | null,
  contractLessonId?: string | null,
};

export type ModelContractConditionInput = {
  teacherID?: ModelIDInput | null,
  studentID?: ModelIDInput | null,
  status?: ModelStringInput | null,
  channelType?: ModelStringInput | null,
  channelURL?: ModelStringInput | null,
  fromTime?: ModelStringInput | null,
  toTime?: ModelStringInput | null,
  packCount?: ModelStringInput | null,
  feedback?: ModelStringInput | null,
  quality?: ModelStringInput | null,
  clarity?: ModelStringInput | null,
  communication?: ModelStringInput | null,
  kindness?: ModelStringInput | null,
  and?: Array< ModelContractConditionInput | null > | null,
  or?: Array< ModelContractConditionInput | null > | null,
  not?: ModelContractConditionInput | null,
  contractLessonId?: ModelIDInput | null,
};

export type Contract = {
  __typename: "Contract",
  id: string,
  teacherID: string,
  studentID: string,
  Lesson?: Lesson | null,
  status?: string | null,
  channelType?: string | null,
  channelURL?: string | null,
  fromTime?: string | null,
  toTime?: string | null,
  packCount?: string | null,
  feedback?: string | null,
  quality?: string | null,
  clarity?: string | null,
  communication?: string | null,
  kindness?: string | null,
  createdAt: string,
  updatedAt: string,
  contractLessonId?: string | null,
};

export type Lesson = {
  __typename: "Lesson",
  id: string,
  title: string,
  price: number,
  type: string,
  description: string,
  teacherID: string,
  Category?: Category | null,
  createdAt: string,
  updatedAt: string,
  lessonCategoryId?: string | null,
};

export type UpdateContractInput = {
  id: string,
  teacherID?: string | null,
  studentID?: string | null,
  status?: string | null,
  channelType?: string | null,
  channelURL?: string | null,
  fromTime?: string | null,
  toTime?: string | null,
  packCount?: string | null,
  feedback?: string | null,
  quality?: string | null,
  clarity?: string | null,
  communication?: string | null,
  kindness?: string | null,
  contractLessonId?: string | null,
};

export type DeleteContractInput = {
  id: string,
};

export type CreateStudentInput = {
  id?: string | null,
};

export type ModelStudentConditionInput = {
  and?: Array< ModelStudentConditionInput | null > | null,
  or?: Array< ModelStudentConditionInput | null > | null,
  not?: ModelStudentConditionInput | null,
};

export type Student = {
  __typename: "Student",
  id: string,
  Contracts?: ModelContractConnection | null,
  Transactions?: ModelTransactionConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelContractConnection = {
  __typename: "ModelContractConnection",
  items:  Array<Contract | null >,
  nextToken?: string | null,
};

export type ModelTransactionConnection = {
  __typename: "ModelTransactionConnection",
  items:  Array<Transaction | null >,
  nextToken?: string | null,
};

export type UpdateStudentInput = {
  id: string,
};

export type DeleteStudentInput = {
  id: string,
};

export type CreateTeacherInput = {
  id?: string | null,
};

export type ModelTeacherConditionInput = {
  and?: Array< ModelTeacherConditionInput | null > | null,
  or?: Array< ModelTeacherConditionInput | null > | null,
  not?: ModelTeacherConditionInput | null,
};

export type Teacher = {
  __typename: "Teacher",
  id: string,
  Lessons?: ModelLessonConnection | null,
  Contracts?: ModelContractConnection | null,
  Transactions?: ModelTransactionConnection | null,
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

export type UpdateTeacherInput = {
  id: string,
};

export type DeleteTeacherInput = {
  id: string,
};

export type CreateUserInput = {
  id?: string | null,
  cognitoUserID: string,
  userStudentId?: string | null,
  userTeacherId?: string | null,
};

export type ModelUserConditionInput = {
  cognitoUserID?: ModelIDInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
  userStudentId?: ModelIDInput | null,
  userTeacherId?: ModelIDInput | null,
};

export type User = {
  __typename: "User",
  id: string,
  cognitoUserID: string,
  Student?: Student | null,
  Teacher?: Teacher | null,
  createdAt: string,
  updatedAt: string,
  userStudentId?: string | null,
  userTeacherId?: string | null,
};

export type UpdateUserInput = {
  id: string,
  cognitoUserID?: string | null,
  userStudentId?: string | null,
  userTeacherId?: string | null,
};

export type DeleteUserInput = {
  id: string,
};

export type CreateLessonInput = {
  id?: string | null,
  title: string,
  price: number,
  type: string,
  description: string,
  teacherID: string,
  lessonCategoryId?: string | null,
};

export type ModelLessonConditionInput = {
  title?: ModelStringInput | null,
  price?: ModelFloatInput | null,
  type?: ModelStringInput | null,
  description?: ModelStringInput | null,
  teacherID?: ModelIDInput | null,
  and?: Array< ModelLessonConditionInput | null > | null,
  or?: Array< ModelLessonConditionInput | null > | null,
  not?: ModelLessonConditionInput | null,
  lessonCategoryId?: ModelIDInput | null,
};

export type UpdateLessonInput = {
  id: string,
  title?: string | null,
  price?: number | null,
  type?: string | null,
  description?: string | null,
  teacherID?: string | null,
  lessonCategoryId?: string | null,
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

export type UpdateCategoryInput = {
  id: string,
  label?: string | null,
};

export type DeleteCategoryInput = {
  id: string,
};

export type ModelSeminarFilterInput = {
  id?: ModelIDInput | null,
  teacherID?: ModelIDInput | null,
  topic?: ModelStringInput | null,
  and?: Array< ModelSeminarFilterInput | null > | null,
  or?: Array< ModelSeminarFilterInput | null > | null,
  not?: ModelSeminarFilterInput | null,
  seminarCategoryId?: ModelIDInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelTransactionFilterInput = {
  id?: ModelIDInput | null,
  studentID?: ModelIDInput | null,
  teacherID?: ModelIDInput | null,
  amount?: ModelFloatInput | null,
  gateway?: ModelStringInput | null,
  and?: Array< ModelTransactionFilterInput | null > | null,
  or?: Array< ModelTransactionFilterInput | null > | null,
  not?: ModelTransactionFilterInput | null,
};

export type ModelContractFilterInput = {
  id?: ModelIDInput | null,
  teacherID?: ModelIDInput | null,
  studentID?: ModelIDInput | null,
  status?: ModelStringInput | null,
  channelType?: ModelStringInput | null,
  channelURL?: ModelStringInput | null,
  fromTime?: ModelStringInput | null,
  toTime?: ModelStringInput | null,
  packCount?: ModelStringInput | null,
  feedback?: ModelStringInput | null,
  quality?: ModelStringInput | null,
  clarity?: ModelStringInput | null,
  communication?: ModelStringInput | null,
  kindness?: ModelStringInput | null,
  and?: Array< ModelContractFilterInput | null > | null,
  or?: Array< ModelContractFilterInput | null > | null,
  not?: ModelContractFilterInput | null,
  contractLessonId?: ModelIDInput | null,
};

export type ModelStudentFilterInput = {
  id?: ModelIDInput | null,
  and?: Array< ModelStudentFilterInput | null > | null,
  or?: Array< ModelStudentFilterInput | null > | null,
  not?: ModelStudentFilterInput | null,
};

export type ModelStudentConnection = {
  __typename: "ModelStudentConnection",
  items:  Array<Student | null >,
  nextToken?: string | null,
};

export type ModelTeacherFilterInput = {
  id?: ModelIDInput | null,
  and?: Array< ModelTeacherFilterInput | null > | null,
  or?: Array< ModelTeacherFilterInput | null > | null,
  not?: ModelTeacherFilterInput | null,
};

export type ModelTeacherConnection = {
  __typename: "ModelTeacherConnection",
  items:  Array<Teacher | null >,
  nextToken?: string | null,
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null,
  cognitoUserID?: ModelIDInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
  userStudentId?: ModelIDInput | null,
  userTeacherId?: ModelIDInput | null,
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection",
  items:  Array<User | null >,
  nextToken?: string | null,
};

export type ModelLessonFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  price?: ModelFloatInput | null,
  type?: ModelStringInput | null,
  description?: ModelStringInput | null,
  teacherID?: ModelIDInput | null,
  and?: Array< ModelLessonFilterInput | null > | null,
  or?: Array< ModelLessonFilterInput | null > | null,
  not?: ModelLessonFilterInput | null,
  lessonCategoryId?: ModelIDInput | null,
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

export type ModelSubscriptionSeminarFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  teacherID?: ModelSubscriptionIDInput | null,
  topic?: ModelSubscriptionStringInput | null,
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

export type ModelSubscriptionTransactionFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  studentID?: ModelSubscriptionIDInput | null,
  teacherID?: ModelSubscriptionIDInput | null,
  amount?: ModelSubscriptionFloatInput | null,
  gateway?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionTransactionFilterInput | null > | null,
  or?: Array< ModelSubscriptionTransactionFilterInput | null > | null,
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

export type ModelSubscriptionContractFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  teacherID?: ModelSubscriptionIDInput | null,
  studentID?: ModelSubscriptionIDInput | null,
  status?: ModelSubscriptionStringInput | null,
  channelType?: ModelSubscriptionStringInput | null,
  channelURL?: ModelSubscriptionStringInput | null,
  fromTime?: ModelSubscriptionStringInput | null,
  toTime?: ModelSubscriptionStringInput | null,
  packCount?: ModelSubscriptionStringInput | null,
  feedback?: ModelSubscriptionStringInput | null,
  quality?: ModelSubscriptionStringInput | null,
  clarity?: ModelSubscriptionStringInput | null,
  communication?: ModelSubscriptionStringInput | null,
  kindness?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionContractFilterInput | null > | null,
  or?: Array< ModelSubscriptionContractFilterInput | null > | null,
};

export type ModelSubscriptionStudentFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionStudentFilterInput | null > | null,
  or?: Array< ModelSubscriptionStudentFilterInput | null > | null,
};

export type ModelSubscriptionTeacherFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionTeacherFilterInput | null > | null,
  or?: Array< ModelSubscriptionTeacherFilterInput | null > | null,
};

export type ModelSubscriptionUserFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  cognitoUserID?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionUserFilterInput | null > | null,
  or?: Array< ModelSubscriptionUserFilterInput | null > | null,
};

export type ModelSubscriptionLessonFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  title?: ModelSubscriptionStringInput | null,
  price?: ModelSubscriptionFloatInput | null,
  type?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  teacherID?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionLessonFilterInput | null > | null,
  or?: Array< ModelSubscriptionLessonFilterInput | null > | null,
};

export type ModelSubscriptionCategoryFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  label?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionCategoryFilterInput | null > | null,
  or?: Array< ModelSubscriptionCategoryFilterInput | null > | null,
};

export type CreateSeminarMutationVariables = {
  input: CreateSeminarInput,
  condition?: ModelSeminarConditionInput | null,
};

export type CreateSeminarMutation = {
  createSeminar?:  {
    __typename: "Seminar",
    id: string,
    teacherID: string,
    topic?: string | null,
    Category?:  {
      __typename: "Category",
      id: string,
      label: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    seminarCategoryId?: string | null,
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
    teacherID: string,
    topic?: string | null,
    Category?:  {
      __typename: "Category",
      id: string,
      label: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    seminarCategoryId?: string | null,
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
    teacherID: string,
    topic?: string | null,
    Category?:  {
      __typename: "Category",
      id: string,
      label: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    seminarCategoryId?: string | null,
  } | null,
};

export type CreateTransactionMutationVariables = {
  input: CreateTransactionInput,
  condition?: ModelTransactionConditionInput | null,
};

export type CreateTransactionMutation = {
  createTransaction?:  {
    __typename: "Transaction",
    id: string,
    studentID: string,
    teacherID: string,
    amount?: number | null,
    gateway?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateTransactionMutationVariables = {
  input: UpdateTransactionInput,
  condition?: ModelTransactionConditionInput | null,
};

export type UpdateTransactionMutation = {
  updateTransaction?:  {
    __typename: "Transaction",
    id: string,
    studentID: string,
    teacherID: string,
    amount?: number | null,
    gateway?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteTransactionMutationVariables = {
  input: DeleteTransactionInput,
  condition?: ModelTransactionConditionInput | null,
};

export type DeleteTransactionMutation = {
  deleteTransaction?:  {
    __typename: "Transaction",
    id: string,
    studentID: string,
    teacherID: string,
    amount?: number | null,
    gateway?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateContractMutationVariables = {
  input: CreateContractInput,
  condition?: ModelContractConditionInput | null,
};

export type CreateContractMutation = {
  createContract?:  {
    __typename: "Contract",
    id: string,
    teacherID: string,
    studentID: string,
    Lesson?:  {
      __typename: "Lesson",
      id: string,
      title: string,
      price: number,
      type: string,
      description: string,
      teacherID: string,
      Category?:  {
        __typename: "Category",
        id: string,
        label: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
      lessonCategoryId?: string | null,
    } | null,
    status?: string | null,
    channelType?: string | null,
    channelURL?: string | null,
    fromTime?: string | null,
    toTime?: string | null,
    packCount?: string | null,
    feedback?: string | null,
    quality?: string | null,
    clarity?: string | null,
    communication?: string | null,
    kindness?: string | null,
    createdAt: string,
    updatedAt: string,
    contractLessonId?: string | null,
  } | null,
};

export type UpdateContractMutationVariables = {
  input: UpdateContractInput,
  condition?: ModelContractConditionInput | null,
};

export type UpdateContractMutation = {
  updateContract?:  {
    __typename: "Contract",
    id: string,
    teacherID: string,
    studentID: string,
    Lesson?:  {
      __typename: "Lesson",
      id: string,
      title: string,
      price: number,
      type: string,
      description: string,
      teacherID: string,
      Category?:  {
        __typename: "Category",
        id: string,
        label: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
      lessonCategoryId?: string | null,
    } | null,
    status?: string | null,
    channelType?: string | null,
    channelURL?: string | null,
    fromTime?: string | null,
    toTime?: string | null,
    packCount?: string | null,
    feedback?: string | null,
    quality?: string | null,
    clarity?: string | null,
    communication?: string | null,
    kindness?: string | null,
    createdAt: string,
    updatedAt: string,
    contractLessonId?: string | null,
  } | null,
};

export type DeleteContractMutationVariables = {
  input: DeleteContractInput,
  condition?: ModelContractConditionInput | null,
};

export type DeleteContractMutation = {
  deleteContract?:  {
    __typename: "Contract",
    id: string,
    teacherID: string,
    studentID: string,
    Lesson?:  {
      __typename: "Lesson",
      id: string,
      title: string,
      price: number,
      type: string,
      description: string,
      teacherID: string,
      Category?:  {
        __typename: "Category",
        id: string,
        label: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
      lessonCategoryId?: string | null,
    } | null,
    status?: string | null,
    channelType?: string | null,
    channelURL?: string | null,
    fromTime?: string | null,
    toTime?: string | null,
    packCount?: string | null,
    feedback?: string | null,
    quality?: string | null,
    clarity?: string | null,
    communication?: string | null,
    kindness?: string | null,
    createdAt: string,
    updatedAt: string,
    contractLessonId?: string | null,
  } | null,
};

export type CreateStudentMutationVariables = {
  input: CreateStudentInput,
  condition?: ModelStudentConditionInput | null,
};

export type CreateStudentMutation = {
  createStudent?:  {
    __typename: "Student",
    id: string,
    Contracts?:  {
      __typename: "ModelContractConnection",
      items:  Array< {
        __typename: "Contract",
        id: string,
        teacherID: string,
        studentID: string,
        Lesson?:  {
          __typename: "Lesson",
          id: string,
          title: string,
          price: number,
          type: string,
          description: string,
          teacherID: string,
          createdAt: string,
          updatedAt: string,
          lessonCategoryId?: string | null,
        } | null,
        status?: string | null,
        channelType?: string | null,
        channelURL?: string | null,
        fromTime?: string | null,
        toTime?: string | null,
        packCount?: string | null,
        feedback?: string | null,
        quality?: string | null,
        clarity?: string | null,
        communication?: string | null,
        kindness?: string | null,
        createdAt: string,
        updatedAt: string,
        contractLessonId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    Transactions?:  {
      __typename: "ModelTransactionConnection",
      items:  Array< {
        __typename: "Transaction",
        id: string,
        studentID: string,
        teacherID: string,
        amount?: number | null,
        gateway?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateStudentMutationVariables = {
  input: UpdateStudentInput,
  condition?: ModelStudentConditionInput | null,
};

export type UpdateStudentMutation = {
  updateStudent?:  {
    __typename: "Student",
    id: string,
    Contracts?:  {
      __typename: "ModelContractConnection",
      items:  Array< {
        __typename: "Contract",
        id: string,
        teacherID: string,
        studentID: string,
        Lesson?:  {
          __typename: "Lesson",
          id: string,
          title: string,
          price: number,
          type: string,
          description: string,
          teacherID: string,
          createdAt: string,
          updatedAt: string,
          lessonCategoryId?: string | null,
        } | null,
        status?: string | null,
        channelType?: string | null,
        channelURL?: string | null,
        fromTime?: string | null,
        toTime?: string | null,
        packCount?: string | null,
        feedback?: string | null,
        quality?: string | null,
        clarity?: string | null,
        communication?: string | null,
        kindness?: string | null,
        createdAt: string,
        updatedAt: string,
        contractLessonId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    Transactions?:  {
      __typename: "ModelTransactionConnection",
      items:  Array< {
        __typename: "Transaction",
        id: string,
        studentID: string,
        teacherID: string,
        amount?: number | null,
        gateway?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteStudentMutationVariables = {
  input: DeleteStudentInput,
  condition?: ModelStudentConditionInput | null,
};

export type DeleteStudentMutation = {
  deleteStudent?:  {
    __typename: "Student",
    id: string,
    Contracts?:  {
      __typename: "ModelContractConnection",
      items:  Array< {
        __typename: "Contract",
        id: string,
        teacherID: string,
        studentID: string,
        Lesson?:  {
          __typename: "Lesson",
          id: string,
          title: string,
          price: number,
          type: string,
          description: string,
          teacherID: string,
          createdAt: string,
          updatedAt: string,
          lessonCategoryId?: string | null,
        } | null,
        status?: string | null,
        channelType?: string | null,
        channelURL?: string | null,
        fromTime?: string | null,
        toTime?: string | null,
        packCount?: string | null,
        feedback?: string | null,
        quality?: string | null,
        clarity?: string | null,
        communication?: string | null,
        kindness?: string | null,
        createdAt: string,
        updatedAt: string,
        contractLessonId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    Transactions?:  {
      __typename: "ModelTransactionConnection",
      items:  Array< {
        __typename: "Transaction",
        id: string,
        studentID: string,
        teacherID: string,
        amount?: number | null,
        gateway?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateTeacherMutationVariables = {
  input: CreateTeacherInput,
  condition?: ModelTeacherConditionInput | null,
};

export type CreateTeacherMutation = {
  createTeacher?:  {
    __typename: "Teacher",
    id: string,
    Lessons?:  {
      __typename: "ModelLessonConnection",
      items:  Array< {
        __typename: "Lesson",
        id: string,
        title: string,
        price: number,
        type: string,
        description: string,
        teacherID: string,
        Category?:  {
          __typename: "Category",
          id: string,
          label: string,
          createdAt: string,
          updatedAt: string,
        } | null,
        createdAt: string,
        updatedAt: string,
        lessonCategoryId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    Contracts?:  {
      __typename: "ModelContractConnection",
      items:  Array< {
        __typename: "Contract",
        id: string,
        teacherID: string,
        studentID: string,
        Lesson?:  {
          __typename: "Lesson",
          id: string,
          title: string,
          price: number,
          type: string,
          description: string,
          teacherID: string,
          createdAt: string,
          updatedAt: string,
          lessonCategoryId?: string | null,
        } | null,
        status?: string | null,
        channelType?: string | null,
        channelURL?: string | null,
        fromTime?: string | null,
        toTime?: string | null,
        packCount?: string | null,
        feedback?: string | null,
        quality?: string | null,
        clarity?: string | null,
        communication?: string | null,
        kindness?: string | null,
        createdAt: string,
        updatedAt: string,
        contractLessonId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    Transactions?:  {
      __typename: "ModelTransactionConnection",
      items:  Array< {
        __typename: "Transaction",
        id: string,
        studentID: string,
        teacherID: string,
        amount?: number | null,
        gateway?: string | null,
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
        teacherID: string,
        topic?: string | null,
        Category?:  {
          __typename: "Category",
          id: string,
          label: string,
          createdAt: string,
          updatedAt: string,
        } | null,
        createdAt: string,
        updatedAt: string,
        seminarCategoryId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateTeacherMutationVariables = {
  input: UpdateTeacherInput,
  condition?: ModelTeacherConditionInput | null,
};

export type UpdateTeacherMutation = {
  updateTeacher?:  {
    __typename: "Teacher",
    id: string,
    Lessons?:  {
      __typename: "ModelLessonConnection",
      items:  Array< {
        __typename: "Lesson",
        id: string,
        title: string,
        price: number,
        type: string,
        description: string,
        teacherID: string,
        Category?:  {
          __typename: "Category",
          id: string,
          label: string,
          createdAt: string,
          updatedAt: string,
        } | null,
        createdAt: string,
        updatedAt: string,
        lessonCategoryId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    Contracts?:  {
      __typename: "ModelContractConnection",
      items:  Array< {
        __typename: "Contract",
        id: string,
        teacherID: string,
        studentID: string,
        Lesson?:  {
          __typename: "Lesson",
          id: string,
          title: string,
          price: number,
          type: string,
          description: string,
          teacherID: string,
          createdAt: string,
          updatedAt: string,
          lessonCategoryId?: string | null,
        } | null,
        status?: string | null,
        channelType?: string | null,
        channelURL?: string | null,
        fromTime?: string | null,
        toTime?: string | null,
        packCount?: string | null,
        feedback?: string | null,
        quality?: string | null,
        clarity?: string | null,
        communication?: string | null,
        kindness?: string | null,
        createdAt: string,
        updatedAt: string,
        contractLessonId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    Transactions?:  {
      __typename: "ModelTransactionConnection",
      items:  Array< {
        __typename: "Transaction",
        id: string,
        studentID: string,
        teacherID: string,
        amount?: number | null,
        gateway?: string | null,
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
        teacherID: string,
        topic?: string | null,
        Category?:  {
          __typename: "Category",
          id: string,
          label: string,
          createdAt: string,
          updatedAt: string,
        } | null,
        createdAt: string,
        updatedAt: string,
        seminarCategoryId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteTeacherMutationVariables = {
  input: DeleteTeacherInput,
  condition?: ModelTeacherConditionInput | null,
};

export type DeleteTeacherMutation = {
  deleteTeacher?:  {
    __typename: "Teacher",
    id: string,
    Lessons?:  {
      __typename: "ModelLessonConnection",
      items:  Array< {
        __typename: "Lesson",
        id: string,
        title: string,
        price: number,
        type: string,
        description: string,
        teacherID: string,
        Category?:  {
          __typename: "Category",
          id: string,
          label: string,
          createdAt: string,
          updatedAt: string,
        } | null,
        createdAt: string,
        updatedAt: string,
        lessonCategoryId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    Contracts?:  {
      __typename: "ModelContractConnection",
      items:  Array< {
        __typename: "Contract",
        id: string,
        teacherID: string,
        studentID: string,
        Lesson?:  {
          __typename: "Lesson",
          id: string,
          title: string,
          price: number,
          type: string,
          description: string,
          teacherID: string,
          createdAt: string,
          updatedAt: string,
          lessonCategoryId?: string | null,
        } | null,
        status?: string | null,
        channelType?: string | null,
        channelURL?: string | null,
        fromTime?: string | null,
        toTime?: string | null,
        packCount?: string | null,
        feedback?: string | null,
        quality?: string | null,
        clarity?: string | null,
        communication?: string | null,
        kindness?: string | null,
        createdAt: string,
        updatedAt: string,
        contractLessonId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    Transactions?:  {
      __typename: "ModelTransactionConnection",
      items:  Array< {
        __typename: "Transaction",
        id: string,
        studentID: string,
        teacherID: string,
        amount?: number | null,
        gateway?: string | null,
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
        teacherID: string,
        topic?: string | null,
        Category?:  {
          __typename: "Category",
          id: string,
          label: string,
          createdAt: string,
          updatedAt: string,
        } | null,
        createdAt: string,
        updatedAt: string,
        seminarCategoryId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
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
    Student?:  {
      __typename: "Student",
      id: string,
      Contracts?:  {
        __typename: "ModelContractConnection",
        items:  Array< {
          __typename: "Contract",
          id: string,
          teacherID: string,
          studentID: string,
          status?: string | null,
          channelType?: string | null,
          channelURL?: string | null,
          fromTime?: string | null,
          toTime?: string | null,
          packCount?: string | null,
          feedback?: string | null,
          quality?: string | null,
          clarity?: string | null,
          communication?: string | null,
          kindness?: string | null,
          createdAt: string,
          updatedAt: string,
          contractLessonId?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      Transactions?:  {
        __typename: "ModelTransactionConnection",
        items:  Array< {
          __typename: "Transaction",
          id: string,
          studentID: string,
          teacherID: string,
          amount?: number | null,
          gateway?: string | null,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    Teacher?:  {
      __typename: "Teacher",
      id: string,
      Lessons?:  {
        __typename: "ModelLessonConnection",
        items:  Array< {
          __typename: "Lesson",
          id: string,
          title: string,
          price: number,
          type: string,
          description: string,
          teacherID: string,
          createdAt: string,
          updatedAt: string,
          lessonCategoryId?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      Contracts?:  {
        __typename: "ModelContractConnection",
        items:  Array< {
          __typename: "Contract",
          id: string,
          teacherID: string,
          studentID: string,
          status?: string | null,
          channelType?: string | null,
          channelURL?: string | null,
          fromTime?: string | null,
          toTime?: string | null,
          packCount?: string | null,
          feedback?: string | null,
          quality?: string | null,
          clarity?: string | null,
          communication?: string | null,
          kindness?: string | null,
          createdAt: string,
          updatedAt: string,
          contractLessonId?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      Transactions?:  {
        __typename: "ModelTransactionConnection",
        items:  Array< {
          __typename: "Transaction",
          id: string,
          studentID: string,
          teacherID: string,
          amount?: number | null,
          gateway?: string | null,
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
          teacherID: string,
          topic?: string | null,
          createdAt: string,
          updatedAt: string,
          seminarCategoryId?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    userStudentId?: string | null,
    userTeacherId?: string | null,
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
    Student?:  {
      __typename: "Student",
      id: string,
      Contracts?:  {
        __typename: "ModelContractConnection",
        items:  Array< {
          __typename: "Contract",
          id: string,
          teacherID: string,
          studentID: string,
          status?: string | null,
          channelType?: string | null,
          channelURL?: string | null,
          fromTime?: string | null,
          toTime?: string | null,
          packCount?: string | null,
          feedback?: string | null,
          quality?: string | null,
          clarity?: string | null,
          communication?: string | null,
          kindness?: string | null,
          createdAt: string,
          updatedAt: string,
          contractLessonId?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      Transactions?:  {
        __typename: "ModelTransactionConnection",
        items:  Array< {
          __typename: "Transaction",
          id: string,
          studentID: string,
          teacherID: string,
          amount?: number | null,
          gateway?: string | null,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    Teacher?:  {
      __typename: "Teacher",
      id: string,
      Lessons?:  {
        __typename: "ModelLessonConnection",
        items:  Array< {
          __typename: "Lesson",
          id: string,
          title: string,
          price: number,
          type: string,
          description: string,
          teacherID: string,
          createdAt: string,
          updatedAt: string,
          lessonCategoryId?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      Contracts?:  {
        __typename: "ModelContractConnection",
        items:  Array< {
          __typename: "Contract",
          id: string,
          teacherID: string,
          studentID: string,
          status?: string | null,
          channelType?: string | null,
          channelURL?: string | null,
          fromTime?: string | null,
          toTime?: string | null,
          packCount?: string | null,
          feedback?: string | null,
          quality?: string | null,
          clarity?: string | null,
          communication?: string | null,
          kindness?: string | null,
          createdAt: string,
          updatedAt: string,
          contractLessonId?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      Transactions?:  {
        __typename: "ModelTransactionConnection",
        items:  Array< {
          __typename: "Transaction",
          id: string,
          studentID: string,
          teacherID: string,
          amount?: number | null,
          gateway?: string | null,
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
          teacherID: string,
          topic?: string | null,
          createdAt: string,
          updatedAt: string,
          seminarCategoryId?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    userStudentId?: string | null,
    userTeacherId?: string | null,
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
    Student?:  {
      __typename: "Student",
      id: string,
      Contracts?:  {
        __typename: "ModelContractConnection",
        items:  Array< {
          __typename: "Contract",
          id: string,
          teacherID: string,
          studentID: string,
          status?: string | null,
          channelType?: string | null,
          channelURL?: string | null,
          fromTime?: string | null,
          toTime?: string | null,
          packCount?: string | null,
          feedback?: string | null,
          quality?: string | null,
          clarity?: string | null,
          communication?: string | null,
          kindness?: string | null,
          createdAt: string,
          updatedAt: string,
          contractLessonId?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      Transactions?:  {
        __typename: "ModelTransactionConnection",
        items:  Array< {
          __typename: "Transaction",
          id: string,
          studentID: string,
          teacherID: string,
          amount?: number | null,
          gateway?: string | null,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    Teacher?:  {
      __typename: "Teacher",
      id: string,
      Lessons?:  {
        __typename: "ModelLessonConnection",
        items:  Array< {
          __typename: "Lesson",
          id: string,
          title: string,
          price: number,
          type: string,
          description: string,
          teacherID: string,
          createdAt: string,
          updatedAt: string,
          lessonCategoryId?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      Contracts?:  {
        __typename: "ModelContractConnection",
        items:  Array< {
          __typename: "Contract",
          id: string,
          teacherID: string,
          studentID: string,
          status?: string | null,
          channelType?: string | null,
          channelURL?: string | null,
          fromTime?: string | null,
          toTime?: string | null,
          packCount?: string | null,
          feedback?: string | null,
          quality?: string | null,
          clarity?: string | null,
          communication?: string | null,
          kindness?: string | null,
          createdAt: string,
          updatedAt: string,
          contractLessonId?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      Transactions?:  {
        __typename: "ModelTransactionConnection",
        items:  Array< {
          __typename: "Transaction",
          id: string,
          studentID: string,
          teacherID: string,
          amount?: number | null,
          gateway?: string | null,
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
          teacherID: string,
          topic?: string | null,
          createdAt: string,
          updatedAt: string,
          seminarCategoryId?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    userStudentId?: string | null,
    userTeacherId?: string | null,
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
    price: number,
    type: string,
    description: string,
    teacherID: string,
    Category?:  {
      __typename: "Category",
      id: string,
      label: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    lessonCategoryId?: string | null,
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
    price: number,
    type: string,
    description: string,
    teacherID: string,
    Category?:  {
      __typename: "Category",
      id: string,
      label: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    lessonCategoryId?: string | null,
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
    price: number,
    type: string,
    description: string,
    teacherID: string,
    Category?:  {
      __typename: "Category",
      id: string,
      label: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    lessonCategoryId?: string | null,
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
    teacherID: string,
    topic?: string | null,
    Category?:  {
      __typename: "Category",
      id: string,
      label: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    seminarCategoryId?: string | null,
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
      teacherID: string,
      topic?: string | null,
      Category?:  {
        __typename: "Category",
        id: string,
        label: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
      seminarCategoryId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type SeminarsByTeacherIDQueryVariables = {
  teacherID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelSeminarFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type SeminarsByTeacherIDQuery = {
  seminarsByTeacherID?:  {
    __typename: "ModelSeminarConnection",
    items:  Array< {
      __typename: "Seminar",
      id: string,
      teacherID: string,
      topic?: string | null,
      Category?:  {
        __typename: "Category",
        id: string,
        label: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
      seminarCategoryId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetTransactionQueryVariables = {
  id: string,
};

export type GetTransactionQuery = {
  getTransaction?:  {
    __typename: "Transaction",
    id: string,
    studentID: string,
    teacherID: string,
    amount?: number | null,
    gateway?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListTransactionsQueryVariables = {
  filter?: ModelTransactionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTransactionsQuery = {
  listTransactions?:  {
    __typename: "ModelTransactionConnection",
    items:  Array< {
      __typename: "Transaction",
      id: string,
      studentID: string,
      teacherID: string,
      amount?: number | null,
      gateway?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type TransactionsByStudentIDQueryVariables = {
  studentID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelTransactionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type TransactionsByStudentIDQuery = {
  transactionsByStudentID?:  {
    __typename: "ModelTransactionConnection",
    items:  Array< {
      __typename: "Transaction",
      id: string,
      studentID: string,
      teacherID: string,
      amount?: number | null,
      gateway?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type TransactionsByTeacherIDQueryVariables = {
  teacherID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelTransactionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type TransactionsByTeacherIDQuery = {
  transactionsByTeacherID?:  {
    __typename: "ModelTransactionConnection",
    items:  Array< {
      __typename: "Transaction",
      id: string,
      studentID: string,
      teacherID: string,
      amount?: number | null,
      gateway?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetContractQueryVariables = {
  id: string,
};

export type GetContractQuery = {
  getContract?:  {
    __typename: "Contract",
    id: string,
    teacherID: string,
    studentID: string,
    Lesson?:  {
      __typename: "Lesson",
      id: string,
      title: string,
      price: number,
      type: string,
      description: string,
      teacherID: string,
      Category?:  {
        __typename: "Category",
        id: string,
        label: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
      lessonCategoryId?: string | null,
    } | null,
    status?: string | null,
    channelType?: string | null,
    channelURL?: string | null,
    fromTime?: string | null,
    toTime?: string | null,
    packCount?: string | null,
    feedback?: string | null,
    quality?: string | null,
    clarity?: string | null,
    communication?: string | null,
    kindness?: string | null,
    createdAt: string,
    updatedAt: string,
    contractLessonId?: string | null,
  } | null,
};

export type ListContractsQueryVariables = {
  filter?: ModelContractFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListContractsQuery = {
  listContracts?:  {
    __typename: "ModelContractConnection",
    items:  Array< {
      __typename: "Contract",
      id: string,
      teacherID: string,
      studentID: string,
      Lesson?:  {
        __typename: "Lesson",
        id: string,
        title: string,
        price: number,
        type: string,
        description: string,
        teacherID: string,
        Category?:  {
          __typename: "Category",
          id: string,
          label: string,
          createdAt: string,
          updatedAt: string,
        } | null,
        createdAt: string,
        updatedAt: string,
        lessonCategoryId?: string | null,
      } | null,
      status?: string | null,
      channelType?: string | null,
      channelURL?: string | null,
      fromTime?: string | null,
      toTime?: string | null,
      packCount?: string | null,
      feedback?: string | null,
      quality?: string | null,
      clarity?: string | null,
      communication?: string | null,
      kindness?: string | null,
      createdAt: string,
      updatedAt: string,
      contractLessonId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ContractsByTeacherIDQueryVariables = {
  teacherID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelContractFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ContractsByTeacherIDQuery = {
  contractsByTeacherID?:  {
    __typename: "ModelContractConnection",
    items:  Array< {
      __typename: "Contract",
      id: string,
      teacherID: string,
      studentID: string,
      Lesson?:  {
        __typename: "Lesson",
        id: string,
        title: string,
        price: number,
        type: string,
        description: string,
        teacherID: string,
        Category?:  {
          __typename: "Category",
          id: string,
          label: string,
          createdAt: string,
          updatedAt: string,
        } | null,
        createdAt: string,
        updatedAt: string,
        lessonCategoryId?: string | null,
      } | null,
      status?: string | null,
      channelType?: string | null,
      channelURL?: string | null,
      fromTime?: string | null,
      toTime?: string | null,
      packCount?: string | null,
      feedback?: string | null,
      quality?: string | null,
      clarity?: string | null,
      communication?: string | null,
      kindness?: string | null,
      createdAt: string,
      updatedAt: string,
      contractLessonId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ContractsByStudentIDQueryVariables = {
  studentID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelContractFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ContractsByStudentIDQuery = {
  contractsByStudentID?:  {
    __typename: "ModelContractConnection",
    items:  Array< {
      __typename: "Contract",
      id: string,
      teacherID: string,
      studentID: string,
      Lesson?:  {
        __typename: "Lesson",
        id: string,
        title: string,
        price: number,
        type: string,
        description: string,
        teacherID: string,
        Category?:  {
          __typename: "Category",
          id: string,
          label: string,
          createdAt: string,
          updatedAt: string,
        } | null,
        createdAt: string,
        updatedAt: string,
        lessonCategoryId?: string | null,
      } | null,
      status?: string | null,
      channelType?: string | null,
      channelURL?: string | null,
      fromTime?: string | null,
      toTime?: string | null,
      packCount?: string | null,
      feedback?: string | null,
      quality?: string | null,
      clarity?: string | null,
      communication?: string | null,
      kindness?: string | null,
      createdAt: string,
      updatedAt: string,
      contractLessonId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetStudentQueryVariables = {
  id: string,
};

export type GetStudentQuery = {
  getStudent?:  {
    __typename: "Student",
    id: string,
    Contracts?:  {
      __typename: "ModelContractConnection",
      items:  Array< {
        __typename: "Contract",
        id: string,
        teacherID: string,
        studentID: string,
        Lesson?:  {
          __typename: "Lesson",
          id: string,
          title: string,
          price: number,
          type: string,
          description: string,
          teacherID: string,
          createdAt: string,
          updatedAt: string,
          lessonCategoryId?: string | null,
        } | null,
        status?: string | null,
        channelType?: string | null,
        channelURL?: string | null,
        fromTime?: string | null,
        toTime?: string | null,
        packCount?: string | null,
        feedback?: string | null,
        quality?: string | null,
        clarity?: string | null,
        communication?: string | null,
        kindness?: string | null,
        createdAt: string,
        updatedAt: string,
        contractLessonId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    Transactions?:  {
      __typename: "ModelTransactionConnection",
      items:  Array< {
        __typename: "Transaction",
        id: string,
        studentID: string,
        teacherID: string,
        amount?: number | null,
        gateway?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListStudentsQueryVariables = {
  filter?: ModelStudentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListStudentsQuery = {
  listStudents?:  {
    __typename: "ModelStudentConnection",
    items:  Array< {
      __typename: "Student",
      id: string,
      Contracts?:  {
        __typename: "ModelContractConnection",
        items:  Array< {
          __typename: "Contract",
          id: string,
          teacherID: string,
          studentID: string,
          status?: string | null,
          channelType?: string | null,
          channelURL?: string | null,
          fromTime?: string | null,
          toTime?: string | null,
          packCount?: string | null,
          feedback?: string | null,
          quality?: string | null,
          clarity?: string | null,
          communication?: string | null,
          kindness?: string | null,
          createdAt: string,
          updatedAt: string,
          contractLessonId?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      Transactions?:  {
        __typename: "ModelTransactionConnection",
        items:  Array< {
          __typename: "Transaction",
          id: string,
          studentID: string,
          teacherID: string,
          amount?: number | null,
          gateway?: string | null,
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

export type GetTeacherQueryVariables = {
  id: string,
};

export type GetTeacherQuery = {
  getTeacher?:  {
    __typename: "Teacher",
    id: string,
    Lessons?:  {
      __typename: "ModelLessonConnection",
      items:  Array< {
        __typename: "Lesson",
        id: string,
        title: string,
        price: number,
        type: string,
        description: string,
        teacherID: string,
        Category?:  {
          __typename: "Category",
          id: string,
          label: string,
          createdAt: string,
          updatedAt: string,
        } | null,
        createdAt: string,
        updatedAt: string,
        lessonCategoryId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    Contracts?:  {
      __typename: "ModelContractConnection",
      items:  Array< {
        __typename: "Contract",
        id: string,
        teacherID: string,
        studentID: string,
        Lesson?:  {
          __typename: "Lesson",
          id: string,
          title: string,
          price: number,
          type: string,
          description: string,
          teacherID: string,
          createdAt: string,
          updatedAt: string,
          lessonCategoryId?: string | null,
        } | null,
        status?: string | null,
        channelType?: string | null,
        channelURL?: string | null,
        fromTime?: string | null,
        toTime?: string | null,
        packCount?: string | null,
        feedback?: string | null,
        quality?: string | null,
        clarity?: string | null,
        communication?: string | null,
        kindness?: string | null,
        createdAt: string,
        updatedAt: string,
        contractLessonId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    Transactions?:  {
      __typename: "ModelTransactionConnection",
      items:  Array< {
        __typename: "Transaction",
        id: string,
        studentID: string,
        teacherID: string,
        amount?: number | null,
        gateway?: string | null,
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
        teacherID: string,
        topic?: string | null,
        Category?:  {
          __typename: "Category",
          id: string,
          label: string,
          createdAt: string,
          updatedAt: string,
        } | null,
        createdAt: string,
        updatedAt: string,
        seminarCategoryId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListTeachersQueryVariables = {
  filter?: ModelTeacherFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTeachersQuery = {
  listTeachers?:  {
    __typename: "ModelTeacherConnection",
    items:  Array< {
      __typename: "Teacher",
      id: string,
      Lessons?:  {
        __typename: "ModelLessonConnection",
        items:  Array< {
          __typename: "Lesson",
          id: string,
          title: string,
          price: number,
          type: string,
          description: string,
          teacherID: string,
          createdAt: string,
          updatedAt: string,
          lessonCategoryId?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      Contracts?:  {
        __typename: "ModelContractConnection",
        items:  Array< {
          __typename: "Contract",
          id: string,
          teacherID: string,
          studentID: string,
          status?: string | null,
          channelType?: string | null,
          channelURL?: string | null,
          fromTime?: string | null,
          toTime?: string | null,
          packCount?: string | null,
          feedback?: string | null,
          quality?: string | null,
          clarity?: string | null,
          communication?: string | null,
          kindness?: string | null,
          createdAt: string,
          updatedAt: string,
          contractLessonId?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      Transactions?:  {
        __typename: "ModelTransactionConnection",
        items:  Array< {
          __typename: "Transaction",
          id: string,
          studentID: string,
          teacherID: string,
          amount?: number | null,
          gateway?: string | null,
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
          teacherID: string,
          topic?: string | null,
          createdAt: string,
          updatedAt: string,
          seminarCategoryId?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
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
    Student?:  {
      __typename: "Student",
      id: string,
      Contracts?:  {
        __typename: "ModelContractConnection",
        items:  Array< {
          __typename: "Contract",
          id: string,
          teacherID: string,
          studentID: string,
          status?: string | null,
          channelType?: string | null,
          channelURL?: string | null,
          fromTime?: string | null,
          toTime?: string | null,
          packCount?: string | null,
          feedback?: string | null,
          quality?: string | null,
          clarity?: string | null,
          communication?: string | null,
          kindness?: string | null,
          createdAt: string,
          updatedAt: string,
          contractLessonId?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      Transactions?:  {
        __typename: "ModelTransactionConnection",
        items:  Array< {
          __typename: "Transaction",
          id: string,
          studentID: string,
          teacherID: string,
          amount?: number | null,
          gateway?: string | null,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    Teacher?:  {
      __typename: "Teacher",
      id: string,
      Lessons?:  {
        __typename: "ModelLessonConnection",
        items:  Array< {
          __typename: "Lesson",
          id: string,
          title: string,
          price: number,
          type: string,
          description: string,
          teacherID: string,
          createdAt: string,
          updatedAt: string,
          lessonCategoryId?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      Contracts?:  {
        __typename: "ModelContractConnection",
        items:  Array< {
          __typename: "Contract",
          id: string,
          teacherID: string,
          studentID: string,
          status?: string | null,
          channelType?: string | null,
          channelURL?: string | null,
          fromTime?: string | null,
          toTime?: string | null,
          packCount?: string | null,
          feedback?: string | null,
          quality?: string | null,
          clarity?: string | null,
          communication?: string | null,
          kindness?: string | null,
          createdAt: string,
          updatedAt: string,
          contractLessonId?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      Transactions?:  {
        __typename: "ModelTransactionConnection",
        items:  Array< {
          __typename: "Transaction",
          id: string,
          studentID: string,
          teacherID: string,
          amount?: number | null,
          gateway?: string | null,
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
          teacherID: string,
          topic?: string | null,
          createdAt: string,
          updatedAt: string,
          seminarCategoryId?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    userStudentId?: string | null,
    userTeacherId?: string | null,
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
      Student?:  {
        __typename: "Student",
        id: string,
        Contracts?:  {
          __typename: "ModelContractConnection",
          nextToken?: string | null,
        } | null,
        Transactions?:  {
          __typename: "ModelTransactionConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      Teacher?:  {
        __typename: "Teacher",
        id: string,
        Lessons?:  {
          __typename: "ModelLessonConnection",
          nextToken?: string | null,
        } | null,
        Contracts?:  {
          __typename: "ModelContractConnection",
          nextToken?: string | null,
        } | null,
        Transactions?:  {
          __typename: "ModelTransactionConnection",
          nextToken?: string | null,
        } | null,
        Seminars?:  {
          __typename: "ModelSeminarConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
      userStudentId?: string | null,
      userTeacherId?: string | null,
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
    price: number,
    type: string,
    description: string,
    teacherID: string,
    Category?:  {
      __typename: "Category",
      id: string,
      label: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    lessonCategoryId?: string | null,
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
      price: number,
      type: string,
      description: string,
      teacherID: string,
      Category?:  {
        __typename: "Category",
        id: string,
        label: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
      lessonCategoryId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type LessonsByTeacherIDQueryVariables = {
  teacherID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelLessonFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type LessonsByTeacherIDQuery = {
  lessonsByTeacherID?:  {
    __typename: "ModelLessonConnection",
    items:  Array< {
      __typename: "Lesson",
      id: string,
      title: string,
      price: number,
      type: string,
      description: string,
      teacherID: string,
      Category?:  {
        __typename: "Category",
        id: string,
        label: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
      lessonCategoryId?: string | null,
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
    teacherID: string,
    topic?: string | null,
    Category?:  {
      __typename: "Category",
      id: string,
      label: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    seminarCategoryId?: string | null,
  } | null,
};

export type OnUpdateSeminarSubscriptionVariables = {
  filter?: ModelSubscriptionSeminarFilterInput | null,
};

export type OnUpdateSeminarSubscription = {
  onUpdateSeminar?:  {
    __typename: "Seminar",
    id: string,
    teacherID: string,
    topic?: string | null,
    Category?:  {
      __typename: "Category",
      id: string,
      label: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    seminarCategoryId?: string | null,
  } | null,
};

export type OnDeleteSeminarSubscriptionVariables = {
  filter?: ModelSubscriptionSeminarFilterInput | null,
};

export type OnDeleteSeminarSubscription = {
  onDeleteSeminar?:  {
    __typename: "Seminar",
    id: string,
    teacherID: string,
    topic?: string | null,
    Category?:  {
      __typename: "Category",
      id: string,
      label: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    seminarCategoryId?: string | null,
  } | null,
};

export type OnCreateTransactionSubscriptionVariables = {
  filter?: ModelSubscriptionTransactionFilterInput | null,
};

export type OnCreateTransactionSubscription = {
  onCreateTransaction?:  {
    __typename: "Transaction",
    id: string,
    studentID: string,
    teacherID: string,
    amount?: number | null,
    gateway?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateTransactionSubscriptionVariables = {
  filter?: ModelSubscriptionTransactionFilterInput | null,
};

export type OnUpdateTransactionSubscription = {
  onUpdateTransaction?:  {
    __typename: "Transaction",
    id: string,
    studentID: string,
    teacherID: string,
    amount?: number | null,
    gateway?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteTransactionSubscriptionVariables = {
  filter?: ModelSubscriptionTransactionFilterInput | null,
};

export type OnDeleteTransactionSubscription = {
  onDeleteTransaction?:  {
    __typename: "Transaction",
    id: string,
    studentID: string,
    teacherID: string,
    amount?: number | null,
    gateway?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateContractSubscriptionVariables = {
  filter?: ModelSubscriptionContractFilterInput | null,
};

export type OnCreateContractSubscription = {
  onCreateContract?:  {
    __typename: "Contract",
    id: string,
    teacherID: string,
    studentID: string,
    Lesson?:  {
      __typename: "Lesson",
      id: string,
      title: string,
      price: number,
      type: string,
      description: string,
      teacherID: string,
      Category?:  {
        __typename: "Category",
        id: string,
        label: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
      lessonCategoryId?: string | null,
    } | null,
    status?: string | null,
    channelType?: string | null,
    channelURL?: string | null,
    fromTime?: string | null,
    toTime?: string | null,
    packCount?: string | null,
    feedback?: string | null,
    quality?: string | null,
    clarity?: string | null,
    communication?: string | null,
    kindness?: string | null,
    createdAt: string,
    updatedAt: string,
    contractLessonId?: string | null,
  } | null,
};

export type OnUpdateContractSubscriptionVariables = {
  filter?: ModelSubscriptionContractFilterInput | null,
};

export type OnUpdateContractSubscription = {
  onUpdateContract?:  {
    __typename: "Contract",
    id: string,
    teacherID: string,
    studentID: string,
    Lesson?:  {
      __typename: "Lesson",
      id: string,
      title: string,
      price: number,
      type: string,
      description: string,
      teacherID: string,
      Category?:  {
        __typename: "Category",
        id: string,
        label: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
      lessonCategoryId?: string | null,
    } | null,
    status?: string | null,
    channelType?: string | null,
    channelURL?: string | null,
    fromTime?: string | null,
    toTime?: string | null,
    packCount?: string | null,
    feedback?: string | null,
    quality?: string | null,
    clarity?: string | null,
    communication?: string | null,
    kindness?: string | null,
    createdAt: string,
    updatedAt: string,
    contractLessonId?: string | null,
  } | null,
};

export type OnDeleteContractSubscriptionVariables = {
  filter?: ModelSubscriptionContractFilterInput | null,
};

export type OnDeleteContractSubscription = {
  onDeleteContract?:  {
    __typename: "Contract",
    id: string,
    teacherID: string,
    studentID: string,
    Lesson?:  {
      __typename: "Lesson",
      id: string,
      title: string,
      price: number,
      type: string,
      description: string,
      teacherID: string,
      Category?:  {
        __typename: "Category",
        id: string,
        label: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
      lessonCategoryId?: string | null,
    } | null,
    status?: string | null,
    channelType?: string | null,
    channelURL?: string | null,
    fromTime?: string | null,
    toTime?: string | null,
    packCount?: string | null,
    feedback?: string | null,
    quality?: string | null,
    clarity?: string | null,
    communication?: string | null,
    kindness?: string | null,
    createdAt: string,
    updatedAt: string,
    contractLessonId?: string | null,
  } | null,
};

export type OnCreateStudentSubscriptionVariables = {
  filter?: ModelSubscriptionStudentFilterInput | null,
};

export type OnCreateStudentSubscription = {
  onCreateStudent?:  {
    __typename: "Student",
    id: string,
    Contracts?:  {
      __typename: "ModelContractConnection",
      items:  Array< {
        __typename: "Contract",
        id: string,
        teacherID: string,
        studentID: string,
        Lesson?:  {
          __typename: "Lesson",
          id: string,
          title: string,
          price: number,
          type: string,
          description: string,
          teacherID: string,
          createdAt: string,
          updatedAt: string,
          lessonCategoryId?: string | null,
        } | null,
        status?: string | null,
        channelType?: string | null,
        channelURL?: string | null,
        fromTime?: string | null,
        toTime?: string | null,
        packCount?: string | null,
        feedback?: string | null,
        quality?: string | null,
        clarity?: string | null,
        communication?: string | null,
        kindness?: string | null,
        createdAt: string,
        updatedAt: string,
        contractLessonId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    Transactions?:  {
      __typename: "ModelTransactionConnection",
      items:  Array< {
        __typename: "Transaction",
        id: string,
        studentID: string,
        teacherID: string,
        amount?: number | null,
        gateway?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateStudentSubscriptionVariables = {
  filter?: ModelSubscriptionStudentFilterInput | null,
};

export type OnUpdateStudentSubscription = {
  onUpdateStudent?:  {
    __typename: "Student",
    id: string,
    Contracts?:  {
      __typename: "ModelContractConnection",
      items:  Array< {
        __typename: "Contract",
        id: string,
        teacherID: string,
        studentID: string,
        Lesson?:  {
          __typename: "Lesson",
          id: string,
          title: string,
          price: number,
          type: string,
          description: string,
          teacherID: string,
          createdAt: string,
          updatedAt: string,
          lessonCategoryId?: string | null,
        } | null,
        status?: string | null,
        channelType?: string | null,
        channelURL?: string | null,
        fromTime?: string | null,
        toTime?: string | null,
        packCount?: string | null,
        feedback?: string | null,
        quality?: string | null,
        clarity?: string | null,
        communication?: string | null,
        kindness?: string | null,
        createdAt: string,
        updatedAt: string,
        contractLessonId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    Transactions?:  {
      __typename: "ModelTransactionConnection",
      items:  Array< {
        __typename: "Transaction",
        id: string,
        studentID: string,
        teacherID: string,
        amount?: number | null,
        gateway?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteStudentSubscriptionVariables = {
  filter?: ModelSubscriptionStudentFilterInput | null,
};

export type OnDeleteStudentSubscription = {
  onDeleteStudent?:  {
    __typename: "Student",
    id: string,
    Contracts?:  {
      __typename: "ModelContractConnection",
      items:  Array< {
        __typename: "Contract",
        id: string,
        teacherID: string,
        studentID: string,
        Lesson?:  {
          __typename: "Lesson",
          id: string,
          title: string,
          price: number,
          type: string,
          description: string,
          teacherID: string,
          createdAt: string,
          updatedAt: string,
          lessonCategoryId?: string | null,
        } | null,
        status?: string | null,
        channelType?: string | null,
        channelURL?: string | null,
        fromTime?: string | null,
        toTime?: string | null,
        packCount?: string | null,
        feedback?: string | null,
        quality?: string | null,
        clarity?: string | null,
        communication?: string | null,
        kindness?: string | null,
        createdAt: string,
        updatedAt: string,
        contractLessonId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    Transactions?:  {
      __typename: "ModelTransactionConnection",
      items:  Array< {
        __typename: "Transaction",
        id: string,
        studentID: string,
        teacherID: string,
        amount?: number | null,
        gateway?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateTeacherSubscriptionVariables = {
  filter?: ModelSubscriptionTeacherFilterInput | null,
};

export type OnCreateTeacherSubscription = {
  onCreateTeacher?:  {
    __typename: "Teacher",
    id: string,
    Lessons?:  {
      __typename: "ModelLessonConnection",
      items:  Array< {
        __typename: "Lesson",
        id: string,
        title: string,
        price: number,
        type: string,
        description: string,
        teacherID: string,
        Category?:  {
          __typename: "Category",
          id: string,
          label: string,
          createdAt: string,
          updatedAt: string,
        } | null,
        createdAt: string,
        updatedAt: string,
        lessonCategoryId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    Contracts?:  {
      __typename: "ModelContractConnection",
      items:  Array< {
        __typename: "Contract",
        id: string,
        teacherID: string,
        studentID: string,
        Lesson?:  {
          __typename: "Lesson",
          id: string,
          title: string,
          price: number,
          type: string,
          description: string,
          teacherID: string,
          createdAt: string,
          updatedAt: string,
          lessonCategoryId?: string | null,
        } | null,
        status?: string | null,
        channelType?: string | null,
        channelURL?: string | null,
        fromTime?: string | null,
        toTime?: string | null,
        packCount?: string | null,
        feedback?: string | null,
        quality?: string | null,
        clarity?: string | null,
        communication?: string | null,
        kindness?: string | null,
        createdAt: string,
        updatedAt: string,
        contractLessonId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    Transactions?:  {
      __typename: "ModelTransactionConnection",
      items:  Array< {
        __typename: "Transaction",
        id: string,
        studentID: string,
        teacherID: string,
        amount?: number | null,
        gateway?: string | null,
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
        teacherID: string,
        topic?: string | null,
        Category?:  {
          __typename: "Category",
          id: string,
          label: string,
          createdAt: string,
          updatedAt: string,
        } | null,
        createdAt: string,
        updatedAt: string,
        seminarCategoryId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateTeacherSubscriptionVariables = {
  filter?: ModelSubscriptionTeacherFilterInput | null,
};

export type OnUpdateTeacherSubscription = {
  onUpdateTeacher?:  {
    __typename: "Teacher",
    id: string,
    Lessons?:  {
      __typename: "ModelLessonConnection",
      items:  Array< {
        __typename: "Lesson",
        id: string,
        title: string,
        price: number,
        type: string,
        description: string,
        teacherID: string,
        Category?:  {
          __typename: "Category",
          id: string,
          label: string,
          createdAt: string,
          updatedAt: string,
        } | null,
        createdAt: string,
        updatedAt: string,
        lessonCategoryId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    Contracts?:  {
      __typename: "ModelContractConnection",
      items:  Array< {
        __typename: "Contract",
        id: string,
        teacherID: string,
        studentID: string,
        Lesson?:  {
          __typename: "Lesson",
          id: string,
          title: string,
          price: number,
          type: string,
          description: string,
          teacherID: string,
          createdAt: string,
          updatedAt: string,
          lessonCategoryId?: string | null,
        } | null,
        status?: string | null,
        channelType?: string | null,
        channelURL?: string | null,
        fromTime?: string | null,
        toTime?: string | null,
        packCount?: string | null,
        feedback?: string | null,
        quality?: string | null,
        clarity?: string | null,
        communication?: string | null,
        kindness?: string | null,
        createdAt: string,
        updatedAt: string,
        contractLessonId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    Transactions?:  {
      __typename: "ModelTransactionConnection",
      items:  Array< {
        __typename: "Transaction",
        id: string,
        studentID: string,
        teacherID: string,
        amount?: number | null,
        gateway?: string | null,
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
        teacherID: string,
        topic?: string | null,
        Category?:  {
          __typename: "Category",
          id: string,
          label: string,
          createdAt: string,
          updatedAt: string,
        } | null,
        createdAt: string,
        updatedAt: string,
        seminarCategoryId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteTeacherSubscriptionVariables = {
  filter?: ModelSubscriptionTeacherFilterInput | null,
};

export type OnDeleteTeacherSubscription = {
  onDeleteTeacher?:  {
    __typename: "Teacher",
    id: string,
    Lessons?:  {
      __typename: "ModelLessonConnection",
      items:  Array< {
        __typename: "Lesson",
        id: string,
        title: string,
        price: number,
        type: string,
        description: string,
        teacherID: string,
        Category?:  {
          __typename: "Category",
          id: string,
          label: string,
          createdAt: string,
          updatedAt: string,
        } | null,
        createdAt: string,
        updatedAt: string,
        lessonCategoryId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    Contracts?:  {
      __typename: "ModelContractConnection",
      items:  Array< {
        __typename: "Contract",
        id: string,
        teacherID: string,
        studentID: string,
        Lesson?:  {
          __typename: "Lesson",
          id: string,
          title: string,
          price: number,
          type: string,
          description: string,
          teacherID: string,
          createdAt: string,
          updatedAt: string,
          lessonCategoryId?: string | null,
        } | null,
        status?: string | null,
        channelType?: string | null,
        channelURL?: string | null,
        fromTime?: string | null,
        toTime?: string | null,
        packCount?: string | null,
        feedback?: string | null,
        quality?: string | null,
        clarity?: string | null,
        communication?: string | null,
        kindness?: string | null,
        createdAt: string,
        updatedAt: string,
        contractLessonId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    Transactions?:  {
      __typename: "ModelTransactionConnection",
      items:  Array< {
        __typename: "Transaction",
        id: string,
        studentID: string,
        teacherID: string,
        amount?: number | null,
        gateway?: string | null,
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
        teacherID: string,
        topic?: string | null,
        Category?:  {
          __typename: "Category",
          id: string,
          label: string,
          createdAt: string,
          updatedAt: string,
        } | null,
        createdAt: string,
        updatedAt: string,
        seminarCategoryId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
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
    Student?:  {
      __typename: "Student",
      id: string,
      Contracts?:  {
        __typename: "ModelContractConnection",
        items:  Array< {
          __typename: "Contract",
          id: string,
          teacherID: string,
          studentID: string,
          status?: string | null,
          channelType?: string | null,
          channelURL?: string | null,
          fromTime?: string | null,
          toTime?: string | null,
          packCount?: string | null,
          feedback?: string | null,
          quality?: string | null,
          clarity?: string | null,
          communication?: string | null,
          kindness?: string | null,
          createdAt: string,
          updatedAt: string,
          contractLessonId?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      Transactions?:  {
        __typename: "ModelTransactionConnection",
        items:  Array< {
          __typename: "Transaction",
          id: string,
          studentID: string,
          teacherID: string,
          amount?: number | null,
          gateway?: string | null,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    Teacher?:  {
      __typename: "Teacher",
      id: string,
      Lessons?:  {
        __typename: "ModelLessonConnection",
        items:  Array< {
          __typename: "Lesson",
          id: string,
          title: string,
          price: number,
          type: string,
          description: string,
          teacherID: string,
          createdAt: string,
          updatedAt: string,
          lessonCategoryId?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      Contracts?:  {
        __typename: "ModelContractConnection",
        items:  Array< {
          __typename: "Contract",
          id: string,
          teacherID: string,
          studentID: string,
          status?: string | null,
          channelType?: string | null,
          channelURL?: string | null,
          fromTime?: string | null,
          toTime?: string | null,
          packCount?: string | null,
          feedback?: string | null,
          quality?: string | null,
          clarity?: string | null,
          communication?: string | null,
          kindness?: string | null,
          createdAt: string,
          updatedAt: string,
          contractLessonId?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      Transactions?:  {
        __typename: "ModelTransactionConnection",
        items:  Array< {
          __typename: "Transaction",
          id: string,
          studentID: string,
          teacherID: string,
          amount?: number | null,
          gateway?: string | null,
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
          teacherID: string,
          topic?: string | null,
          createdAt: string,
          updatedAt: string,
          seminarCategoryId?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    userStudentId?: string | null,
    userTeacherId?: string | null,
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
    Student?:  {
      __typename: "Student",
      id: string,
      Contracts?:  {
        __typename: "ModelContractConnection",
        items:  Array< {
          __typename: "Contract",
          id: string,
          teacherID: string,
          studentID: string,
          status?: string | null,
          channelType?: string | null,
          channelURL?: string | null,
          fromTime?: string | null,
          toTime?: string | null,
          packCount?: string | null,
          feedback?: string | null,
          quality?: string | null,
          clarity?: string | null,
          communication?: string | null,
          kindness?: string | null,
          createdAt: string,
          updatedAt: string,
          contractLessonId?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      Transactions?:  {
        __typename: "ModelTransactionConnection",
        items:  Array< {
          __typename: "Transaction",
          id: string,
          studentID: string,
          teacherID: string,
          amount?: number | null,
          gateway?: string | null,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    Teacher?:  {
      __typename: "Teacher",
      id: string,
      Lessons?:  {
        __typename: "ModelLessonConnection",
        items:  Array< {
          __typename: "Lesson",
          id: string,
          title: string,
          price: number,
          type: string,
          description: string,
          teacherID: string,
          createdAt: string,
          updatedAt: string,
          lessonCategoryId?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      Contracts?:  {
        __typename: "ModelContractConnection",
        items:  Array< {
          __typename: "Contract",
          id: string,
          teacherID: string,
          studentID: string,
          status?: string | null,
          channelType?: string | null,
          channelURL?: string | null,
          fromTime?: string | null,
          toTime?: string | null,
          packCount?: string | null,
          feedback?: string | null,
          quality?: string | null,
          clarity?: string | null,
          communication?: string | null,
          kindness?: string | null,
          createdAt: string,
          updatedAt: string,
          contractLessonId?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      Transactions?:  {
        __typename: "ModelTransactionConnection",
        items:  Array< {
          __typename: "Transaction",
          id: string,
          studentID: string,
          teacherID: string,
          amount?: number | null,
          gateway?: string | null,
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
          teacherID: string,
          topic?: string | null,
          createdAt: string,
          updatedAt: string,
          seminarCategoryId?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    userStudentId?: string | null,
    userTeacherId?: string | null,
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
    Student?:  {
      __typename: "Student",
      id: string,
      Contracts?:  {
        __typename: "ModelContractConnection",
        items:  Array< {
          __typename: "Contract",
          id: string,
          teacherID: string,
          studentID: string,
          status?: string | null,
          channelType?: string | null,
          channelURL?: string | null,
          fromTime?: string | null,
          toTime?: string | null,
          packCount?: string | null,
          feedback?: string | null,
          quality?: string | null,
          clarity?: string | null,
          communication?: string | null,
          kindness?: string | null,
          createdAt: string,
          updatedAt: string,
          contractLessonId?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      Transactions?:  {
        __typename: "ModelTransactionConnection",
        items:  Array< {
          __typename: "Transaction",
          id: string,
          studentID: string,
          teacherID: string,
          amount?: number | null,
          gateway?: string | null,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    Teacher?:  {
      __typename: "Teacher",
      id: string,
      Lessons?:  {
        __typename: "ModelLessonConnection",
        items:  Array< {
          __typename: "Lesson",
          id: string,
          title: string,
          price: number,
          type: string,
          description: string,
          teacherID: string,
          createdAt: string,
          updatedAt: string,
          lessonCategoryId?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      Contracts?:  {
        __typename: "ModelContractConnection",
        items:  Array< {
          __typename: "Contract",
          id: string,
          teacherID: string,
          studentID: string,
          status?: string | null,
          channelType?: string | null,
          channelURL?: string | null,
          fromTime?: string | null,
          toTime?: string | null,
          packCount?: string | null,
          feedback?: string | null,
          quality?: string | null,
          clarity?: string | null,
          communication?: string | null,
          kindness?: string | null,
          createdAt: string,
          updatedAt: string,
          contractLessonId?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      Transactions?:  {
        __typename: "ModelTransactionConnection",
        items:  Array< {
          __typename: "Transaction",
          id: string,
          studentID: string,
          teacherID: string,
          amount?: number | null,
          gateway?: string | null,
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
          teacherID: string,
          topic?: string | null,
          createdAt: string,
          updatedAt: string,
          seminarCategoryId?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    userStudentId?: string | null,
    userTeacherId?: string | null,
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
    price: number,
    type: string,
    description: string,
    teacherID: string,
    Category?:  {
      __typename: "Category",
      id: string,
      label: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    lessonCategoryId?: string | null,
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
    price: number,
    type: string,
    description: string,
    teacherID: string,
    Category?:  {
      __typename: "Category",
      id: string,
      label: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    lessonCategoryId?: string | null,
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
    price: number,
    type: string,
    description: string,
    teacherID: string,
    Category?:  {
      __typename: "Category",
      id: string,
      label: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    lessonCategoryId?: string | null,
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
    createdAt: string,
    updatedAt: string,
  } | null,
};
