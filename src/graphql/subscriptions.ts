/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateSeminar = /* GraphQL */ `
  subscription OnCreateSeminar($filter: ModelSubscriptionSeminarFilterInput) {
    onCreateSeminar(filter: $filter) {
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
export const onUpdateSeminar = /* GraphQL */ `
  subscription OnUpdateSeminar($filter: ModelSubscriptionSeminarFilterInput) {
    onUpdateSeminar(filter: $filter) {
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
export const onDeleteSeminar = /* GraphQL */ `
  subscription OnDeleteSeminar($filter: ModelSubscriptionSeminarFilterInput) {
    onDeleteSeminar(filter: $filter) {
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
export const onCreateTransaction = /* GraphQL */ `
  subscription OnCreateTransaction(
    $filter: ModelSubscriptionTransactionFilterInput
  ) {
    onCreateTransaction(filter: $filter) {
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
export const onUpdateTransaction = /* GraphQL */ `
  subscription OnUpdateTransaction(
    $filter: ModelSubscriptionTransactionFilterInput
  ) {
    onUpdateTransaction(filter: $filter) {
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
export const onDeleteTransaction = /* GraphQL */ `
  subscription OnDeleteTransaction(
    $filter: ModelSubscriptionTransactionFilterInput
  ) {
    onDeleteTransaction(filter: $filter) {
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
export const onCreateContract = /* GraphQL */ `
  subscription OnCreateContract($filter: ModelSubscriptionContractFilterInput) {
    onCreateContract(filter: $filter) {
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
export const onUpdateContract = /* GraphQL */ `
  subscription OnUpdateContract($filter: ModelSubscriptionContractFilterInput) {
    onUpdateContract(filter: $filter) {
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
export const onDeleteContract = /* GraphQL */ `
  subscription OnDeleteContract($filter: ModelSubscriptionContractFilterInput) {
    onDeleteContract(filter: $filter) {
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
export const onCreateStudent = /* GraphQL */ `
  subscription OnCreateStudent($filter: ModelSubscriptionStudentFilterInput) {
    onCreateStudent(filter: $filter) {
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
export const onUpdateStudent = /* GraphQL */ `
  subscription OnUpdateStudent($filter: ModelSubscriptionStudentFilterInput) {
    onUpdateStudent(filter: $filter) {
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
export const onDeleteStudent = /* GraphQL */ `
  subscription OnDeleteStudent($filter: ModelSubscriptionStudentFilterInput) {
    onDeleteStudent(filter: $filter) {
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
export const onCreateTeacher = /* GraphQL */ `
  subscription OnCreateTeacher($filter: ModelSubscriptionTeacherFilterInput) {
    onCreateTeacher(filter: $filter) {
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
export const onUpdateTeacher = /* GraphQL */ `
  subscription OnUpdateTeacher($filter: ModelSubscriptionTeacherFilterInput) {
    onUpdateTeacher(filter: $filter) {
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
export const onDeleteTeacher = /* GraphQL */ `
  subscription OnDeleteTeacher($filter: ModelSubscriptionTeacherFilterInput) {
    onDeleteTeacher(filter: $filter) {
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
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
    onCreateUser(filter: $filter) {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
    onUpdateUser(filter: $filter) {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
    onDeleteUser(filter: $filter) {
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
export const onCreateLesson = /* GraphQL */ `
  subscription OnCreateLesson($filter: ModelSubscriptionLessonFilterInput) {
    onCreateLesson(filter: $filter) {
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
export const onUpdateLesson = /* GraphQL */ `
  subscription OnUpdateLesson($filter: ModelSubscriptionLessonFilterInput) {
    onUpdateLesson(filter: $filter) {
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
export const onDeleteLesson = /* GraphQL */ `
  subscription OnDeleteLesson($filter: ModelSubscriptionLessonFilterInput) {
    onDeleteLesson(filter: $filter) {
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
export const onCreateCategory = /* GraphQL */ `
  subscription OnCreateCategory($filter: ModelSubscriptionCategoryFilterInput) {
    onCreateCategory(filter: $filter) {
      id
      label
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
      createdAt
      updatedAt
      __typename
    }
  }
`;
