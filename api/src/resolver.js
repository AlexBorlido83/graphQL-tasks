import Task from "./models.js";

const resolvers = {
    Query: {
      getTasks: async () => {
        // return dataSources.getTasks();
        return await Task.find();
      }
    },
    Mutation: {
      addTask: async (_, {title}) => {
        const createTask = new Task({
          title: title
        });
        const res = await createTask.save();

        return res;
      },
      removeTask: async (_, {id}) => {
        return await Task.findByIdAndRemove(id);
      }
    }
  }

  export default resolvers;