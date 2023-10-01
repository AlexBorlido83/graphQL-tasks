import gql from "graphql-tag";

const typeDefs = gql`
    type Query {
        getTasks: [Task!]!
    },
    type Mutation {
        addTask(title: String!): Task!,
        removeTask(id: ID!): Task!
    }
    type Task {
        id: ID!,
        title: String!
    }
`;

export default typeDefs;