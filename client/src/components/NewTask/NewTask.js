import Section from '../UI/Section';
import TaskForm from './TaskForm';
import { useMutation, gql } from "@apollo/client";

const NEW_TRACK = gql`
  mutation AddTask($title: String!) {
    addTask(title: $title) {
      id
      title
    }
  }
`;

const NewTask = () => {
  const [addTask, { loading, error }] = useMutation(NEW_TRACK);

  const addTaskHandler = async (task) => {
    try {
      const result = await addTask({
        variables: {
          title: task.toString(),
        },
        // Update the cache after a successful mutation
        update: (cache, { data }) => {
          const newTask = data.addTask;
          cache.modify({
            fields: {
              getTasks(existingTasks = []) {
                return [...existingTasks, newTask];
              },
            },
          });
        },
      });

      // Handle errors if needed
      if (error) {
        console.error(error);
      }
    } catch (err) {
      // Handle any other errors here
      console.error(err);
    }
  };

  return (
    <Section>
      <TaskForm onEnterTask={addTaskHandler} loading={loading} />
      {error && <p>{error}</p>}
    </Section>
  );
};

export default NewTask;
