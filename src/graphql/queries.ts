/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getSeminar = /* GraphQL */ `
  query GetSeminar($id: ID!) {
    getSeminar(id: $id) {
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
export const listSeminars = /* GraphQL */ `
  query ListSeminars(
    $filter: ModelSeminarFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSeminars(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
  }
`;
export const seminarsByTeacherID = /* GraphQL */ `
  query SeminarsByTeacherID(
    $teacherID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelSeminarFilterInput
    $limit: Int
    $nextToken: String
  ) {
    seminarsByTeacherID(
      teacherID: $teacherID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
  }
`;
export const getTransaction = /* GraphQL */ `
  query GetTransaction($id: ID!) {
    getTransaction(id: $id) {
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
export const listTransactions = /* GraphQL */ `
  query ListTransactions(
    $filter: ModelTransactionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTransactions(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
  }
`;
export const transactionsByStudentID = /* GraphQL */ `
  query TransactionsByStudentID(
    $studentID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelTransactionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    transactionsByStudentID(
      studentID: $studentID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
  }
`;
export const transactionsByTeacherID = /* GraphQL */ `
  query TransactionsByTeacherID(
    $teacherID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelTransactionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    transactionsByTeacherID(
      teacherID: $teacherID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
  }
`;
export const getContract = /* GraphQL */ `
  query GetContract($id: ID!) {
    getContract(id: $id) {
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
export const listContracts = /* GraphQL */ `
  query ListContracts(
    $filter: ModelContractFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listContracts(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
      nextToken
      __typename
    }
  }
`;
export const contractsByTeacherID = /* GraphQL */ `
  query ContractsByTeacherID(
    $teacherID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelContractFilterInput
    $limit: Int
    $nextToken: String
  ) {
    contractsByTeacherID(
      teacherID: $teacherID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
      nextToken
      __typename
    }
  }
`;
export const contractsByStudentID = /* GraphQL */ `
  query ContractsByStudentID(
    $studentID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelContractFilterInput
    $limit: Int
    $nextToken: String
  ) {
    contractsByStudentID(
      studentID: $studentID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
      nextToken
      __typename
    }
  }
`;
export const getStudent = /* GraphQL */ `
  query GetStudent($id: ID!) {
    getStudent(id: $id) {
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
export const listStudents = /* GraphQL */ `
  query ListStudents(
    $filter: ModelStudentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStudents(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const getTeacher = /* GraphQL */ `
  query GetTeacher($id: ID!) {
    getTeacher(id: $id) {
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
export const listTeachers = /* GraphQL */ `
  query ListTeachers(
    $filter: ModelTeacherFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTeachers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
        Student {
          id
          Contracts {
            nextToken
            __typename
          }
          Transactions {
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
            nextToken
            __typename
          }
          Contracts {
            nextToken
            __typename
          }
          Transactions {
            nextToken
            __typename
          }
          Seminars {
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
      nextToken
      __typename
    }
  }
`;
export const getLesson = /* GraphQL */ `
  query GetLesson($id: ID!) {
    getLesson(id: $id) {
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
export const listLessons = /* GraphQL */ `
  query ListLessons(
    $filter: ModelLessonFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLessons(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
  }
`;
export const lessonsByTeacherID = /* GraphQL */ `
  query LessonsByTeacherID(
    $teacherID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelLessonFilterInput
    $limit: Int
    $nextToken: String
  ) {
    lessonsByTeacherID(
      teacherID: $teacherID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
  }
`;
export const getCategory = /* GraphQL */ `
  query GetCategory($id: ID!) {
    getCategory(id: $id) {
      id
      label
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
        label
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
