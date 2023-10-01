import classes from './TaskItem.module.css';
import { gql, useMutation } from '@apollo/client';

const TASK_RM = gql`
  mutation RemoveTask($removeTaskId: ID!) {
    removeTask(id: $removeTaskId) {
      id
    }
  }
`;

const TaskItem = (props) => {
  // const {isLoading, error, sendRequest: removeTaskRequest} = useHttp();
  const [removeTask] = useMutation(TASK_RM);

  const deleteTaskHandler = async () => {
    await removeTask({
      variables: {
        removeTaskId: props.id,
      },
      // Update the cache after a successful mutation
      update: (cache, { data }) => {
        const removeTask = data.removeTask;
        cache.modify({
          fields: {
            getTasks(existingTasks = []) {
              return [...existingTasks, removeTask];
            },
          },
        });
      },
    });
  } 
  

  return <li className={classes.task}>
    {props.children}
    <button onClick={deleteTaskHandler}>X</button>
    </li>
};

export default TaskItem;