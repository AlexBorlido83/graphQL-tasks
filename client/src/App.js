import React from 'react';
import Tasks from './components/Tasks/Tasks';
import NewTask from './components/NewTask/NewTask';
import { useQuery, gql } from "@apollo/client";

const TRACKS = gql`
  query getTasks {
    getTasks {
      id
      title
    }
  }
`;

function App() {
  const { loading, error, data } = useQuery(TRACKS);

  return (
    <React.Fragment>
      {loading && "Loading..."}
      {error && `Error {error.message}`}
      {!loading && !error && (
        <>
          <NewTask />
          <Tasks
            items={data.getTasks}
            loading={loading}
            error={error}
          />
        </>
      )}
    </React.Fragment>
  );
}

export default App;
