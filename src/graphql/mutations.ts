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
      teacherID
      topic
      Category {
        id
        label
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      seminarCategoryId
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
      teacherID
      topic
      Category {
        id
        label
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      seminarCategoryId
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
      teacherID
      topic
      Category {
        id
        label
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      seminarCategoryId
      __typename
    }
  }
`;
export const createTransaction = /* GraphQL */ `
  mutation CreateTransaction(
    $input: CreateTransactionInput!
    $condition: ModelTransactionConditionInput
  ) {
    createTransaction(input: $input, condition: $condition) {
      id
      studentID
      teacherID
      amount
      gateway
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateTransaction = /* GraphQL */ `
  mutation UpdateTransaction(
    $input: UpdateTransactionInput!
    $condition: ModelTransactionConditionInput
  ) {
    updateTransaction(input: $input, condition: $condition) {
      id
      studentID
      teacherID
      amount
      gateway
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteTransaction = /* GraphQL */ `
  mutation DeleteTransaction(
    $input: DeleteTransactionInput!
    $condition: ModelTransactionConditionInput
  ) {
    deleteTransaction(input: $input, condition: $condition) {
      id
      studentID
      teacherID
      amount
      gateway
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createContract = /* GraphQL */ `
  mutation CreateContract(
    $input: CreateContractInput!
    $condition: ModelContractConditionInput
  ) {
    createContract(input: $input, condition: $condition) {
      id
      teacherID
      studentID
      Lesson {
        id
        title
        price
        type
        description
        teacherID
        Category {
          id
          label
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        lessonCategoryId
        __typename
      }
      status
      channelType
      channelURL
      fromTime
      toTime
      packCount
      feedback
      quality
      clarity
      communication
      kindness
      createdAt
      updatedAt
      contractLessonId
      __typename
    }
  }
`;
export const updateContract = /* GraphQL */ `
  mutation UpdateContract(
    $input: UpdateContractInput!
    $condition: ModelContractConditionInput
  ) {
    updateContract(input: $input, condition: $condition) {
      id
      teacherID
      studentID
      Lesson {
        id
        title
        price
        type
        description
        teacherID
        Category {
          id
          label
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        lessonCategoryId
        __typename
      }
      status
      channelType
      channelURL
      fromTime
      toTime
      packCount
      feedback
      quality
      clarity
      communication
      kindness
      createdAt
      updatedAt
      contractLessonId
      __typename
    }
  }
`;
export const deleteContract = /* GraphQL */ `
  mutation DeleteContract(
    $input: DeleteContractInput!
    $condition: ModelContractConditionInput
  ) {
    deleteContract(input: $input, condition: $condition) {
      id
      teacherID
      studentID
      Lesson {
        id
        title
        price
        type
        description
        teacherID
        Category {
          id
          label
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        lessonCategoryId
        __typename
      }
      status
      channelType
      channelURL
      fromTime
      toTime
      packCount
      feedback
      quality
      clarity
      communication
      kindness
      createdAt
      updatedAt
      contractLessonId
      __typename
    }
  }
`;
export const createStudent = /* GraphQL */ `
  mutation CreateStudent(
    $input: CreateStudentInput!
    $condition: ModelStudentConditionInput
  ) {
    createStudent(input: $input, condition: $condition) {
      id
      Contracts {
        items {
          id
          teacherID
          studentID
          Lesson {
            id
            title
            price
            type
            description
            teacherID
            createdAt
            updatedAt
            lessonCategoryId
            __typename
          }
          status
          channelType
          channelURL
          fromTime
          toTime
          packCount
          feedback
          quality
          clarity
          communication
          kindness
          createdAt
          updatedAt
          contractLessonId
          __typename
        }
        nextToken
        __typename
      }
      Transactions {
        items {
          id
          studentID
          teacherID
          amount
          gateway
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
export const updateStudent = /* GraphQL */ `
  mutation UpdateStudent(
    $input: UpdateStudentInput!
    $condition: ModelStudentConditionInput
  ) {
    updateStudent(input: $input, condition: $condition) {
      id
      Contracts {
        items {
          id
          teacherID
          studentID
          Lesson {
            id
            title
            price
            type
            description
            teacherID
            createdAt
            updatedAt
            lessonCategoryId
            __typename
          }
          status
          channelType
          channelURL
          fromTime
          toTime
          packCount
          feedback
          quality
          clarity
          communication
          kindness
          createdAt
          updatedAt
          contractLessonId
          __typename
        }
        nextToken
        __typename
      }
      Transactions {
        items {
          id
          studentID
          teacherID
          amount
          gateway
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
export const deleteStudent = /* GraphQL */ `
  mutation DeleteStudent(
    $input: DeleteStudentInput!
    $condition: ModelStudentConditionInput
  ) {
    deleteStudent(input: $input, condition: $condition) {
      id
      Contracts {
        items {
          id
          teacherID
          studentID
          Lesson {
            id
            title
            price
            type
            description
            teacherID
            createdAt
            updatedAt
            lessonCategoryId
            __typename
          }
          status
          channelType
          channelURL
          fromTime
          toTime
          packCount
          feedback
          quality
          clarity
          communication
          kindness
          createdAt
          updatedAt
          contractLessonId
          __typename
        }
        nextToken
        __typename
      }
      Transactions {
        items {
          id
          studentID
          teacherID
          amount
          gateway
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
export const createTeacher = /* GraphQL */ `
  mutation CreateTeacher(
    $input: CreateTeacherInput!
    $condition: ModelTeacherConditionInput
  ) {
    createTeacher(input: $input, condition: $condition) {
      id
      Lessons {
        items {
          id
          title
          price
          type
          description
          teacherID
          Category {
            id
            label
            createdAt
            updatedAt
            __typename
          }
          createdAt
          updatedAt
          lessonCategoryId
          __typename
        }
        nextToken
        __typename
      }
      Contracts {
        items {
          id
          teacherID
          studentID
          Lesson {
            id
            title
            price
            type
            description
            teacherID
            createdAt
            updatedAt
            lessonCategoryId
            __typename
          }
          status
          channelType
          channelURL
          fromTime
          toTime
          packCount
          feedback
          quality
          clarity
          communication
          kindness
          createdAt
          updatedAt
          contractLessonId
          __typename
        }
        nextToken
        __typename
      }
      Transactions {
        items {
          id
          studentID
          teacherID
          amount
          gateway
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
          teacherID
          topic
          Category {
            id
            label
            createdAt
            updatedAt
            __typename
          }
          createdAt
          updatedAt
          seminarCategoryId
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
export const updateTeacher = /* GraphQL */ `
  mutation UpdateTeacher(
    $input: UpdateTeacherInput!
    $condition: ModelTeacherConditionInput
  ) {
    updateTeacher(input: $input, condition: $condition) {
      id
      Lessons {
        items {
          id
          title
          price
          type
          description
          teacherID
          Category {
            id
            label
            createdAt
            updatedAt
            __typename
          }
          createdAt
          updatedAt
          lessonCategoryId
          __typename
        }
        nextToken
        __typename
      }
      Contracts {
        items {
          id
          teacherID
          studentID
          Lesson {
            id
            title
            price
            type
            description
            teacherID
            createdAt
            updatedAt
            lessonCategoryId
            __typename
          }
          status
          channelType
          channelURL
          fromTime
          toTime
          packCount
          feedback
          quality
          clarity
          communication
          kindness
          createdAt
          updatedAt
          contractLessonId
          __typename
        }
        nextToken
        __typename
      }
      Transactions {
        items {
          id
          studentID
          teacherID
          amount
          gateway
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
          teacherID
          topic
          Category {
            id
            label
            createdAt
            updatedAt
            __typename
          }
          createdAt
          updatedAt
          seminarCategoryId
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
export const deleteTeacher = /* GraphQL */ `
  mutation DeleteTeacher(
    $input: DeleteTeacherInput!
    $condition: ModelTeacherConditionInput
  ) {
    deleteTeacher(input: $input, condition: $condition) {
      id
      Lessons {
        items {
          id
          title
          price
          type
          description
          teacherID
          Category {
            id
            label
            createdAt
            updatedAt
            __typename
          }
          createdAt
          updatedAt
          lessonCategoryId
          __typename
        }
        nextToken
        __typename
      }
      Contracts {
        items {
          id
          teacherID
          studentID
          Lesson {
            id
            title
            price
            type
            description
            teacherID
            createdAt
            updatedAt
            lessonCategoryId
            __typename
          }
          status
          channelType
          channelURL
          fromTime
          toTime
          packCount
          feedback
          quality
          clarity
          communication
          kindness
          createdAt
          updatedAt
          contractLessonId
          __typename
        }
        nextToken
        __typename
      }
      Transactions {
        items {
          id
          studentID
          teacherID
          amount
          gateway
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
          teacherID
          topic
          Category {
            id
            label
            createdAt
            updatedAt
            __typename
          }
          createdAt
          updatedAt
          seminarCategoryId
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
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      cognitoUserID
      Student {
        id
        Contracts {
          items {
            id
            teacherID
            studentID
            status
            channelType
            channelURL
            fromTime
            toTime
            packCount
            feedback
            quality
            clarity
            communication
            kindness
            createdAt
            updatedAt
            contractLessonId
            __typename
          }
          nextToken
          __typename
        }
        Transactions {
          items {
            id
            studentID
            teacherID
            amount
            gateway
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
      Teacher {
        id
        Lessons {
          items {
            id
            title
            price
            type
            description
            teacherID
            createdAt
            updatedAt
            lessonCategoryId
            __typename
          }
          nextToken
          __typename
        }
        Contracts {
          items {
            id
            teacherID
            studentID
            status
            channelType
            channelURL
            fromTime
            toTime
            packCount
            feedback
            quality
            clarity
            communication
            kindness
            createdAt
            updatedAt
            contractLessonId
            __typename
          }
          nextToken
          __typename
        }
        Transactions {
          items {
            id
            studentID
            teacherID
            amount
            gateway
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
            teacherID
            topic
            createdAt
            updatedAt
            seminarCategoryId
            __typename
          }
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      userStudentId
      userTeacherId
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
      Student {
        id
        Contracts {
          items {
            id
            teacherID
            studentID
            status
            channelType
            channelURL
            fromTime
            toTime
            packCount
            feedback
            quality
            clarity
            communication
            kindness
            createdAt
            updatedAt
            contractLessonId
            __typename
          }
          nextToken
          __typename
        }
        Transactions {
          items {
            id
            studentID
            teacherID
            amount
            gateway
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
      Teacher {
        id
        Lessons {
          items {
            id
            title
            price
            type
            description
            teacherID
            createdAt
            updatedAt
            lessonCategoryId
            __typename
          }
          nextToken
          __typename
        }
        Contracts {
          items {
            id
            teacherID
            studentID
            status
            channelType
            channelURL
            fromTime
            toTime
            packCount
            feedback
            quality
            clarity
            communication
            kindness
            createdAt
            updatedAt
            contractLessonId
            __typename
          }
          nextToken
          __typename
        }
        Transactions {
          items {
            id
            studentID
            teacherID
            amount
            gateway
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
            teacherID
            topic
            createdAt
            updatedAt
            seminarCategoryId
            __typename
          }
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      userStudentId
      userTeacherId
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
      Student {
        id
        Contracts {
          items {
            id
            teacherID
            studentID
            status
            channelType
            channelURL
            fromTime
            toTime
            packCount
            feedback
            quality
            clarity
            communication
            kindness
            createdAt
            updatedAt
            contractLessonId
            __typename
          }
          nextToken
          __typename
        }
        Transactions {
          items {
            id
            studentID
            teacherID
            amount
            gateway
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
      Teacher {
        id
        Lessons {
          items {
            id
            title
            price
            type
            description
            teacherID
            createdAt
            updatedAt
            lessonCategoryId
            __typename
          }
          nextToken
          __typename
        }
        Contracts {
          items {
            id
            teacherID
            studentID
            status
            channelType
            channelURL
            fromTime
            toTime
            packCount
            feedback
            quality
            clarity
            communication
            kindness
            createdAt
            updatedAt
            contractLessonId
            __typename
          }
          nextToken
          __typename
        }
        Transactions {
          items {
            id
            studentID
            teacherID
            amount
            gateway
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
            teacherID
            topic
            createdAt
            updatedAt
            seminarCategoryId
            __typename
          }
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      userStudentId
      userTeacherId
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
      title
      price
      type
      description
      teacherID
      Category {
        id
        label
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      lessonCategoryId
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
      title
      price
      type
      description
      teacherID
      Category {
        id
        label
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      lessonCategoryId
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
      title
      price
      type
      description
      teacherID
      Category {
        id
        label
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      lessonCategoryId
      __typename
    }
  }
`;
export const createCategory = /* GraphQL */ `
  mutation CreateCategory(
    $input: CreateCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    createCategory(input: $input, condition: $condition) {
      id
      label
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateCategory = /* GraphQL */ `
  mutation UpdateCategory(
    $input: UpdateCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    updateCategory(input: $input, condition: $condition) {
      id
      label
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteCategory = /* GraphQL */ `
  mutation DeleteCategory(
    $input: DeleteCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    deleteCategory(input: $input, condition: $condition) {
      id
      label
      createdAt
      updatedAt
      __typename
    }
  }
`;
