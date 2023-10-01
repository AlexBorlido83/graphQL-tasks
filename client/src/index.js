import ReactDOM from 'react-dom/client';
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client';

import './index.css';
import App from './App';

const httpLink = createHttpLink({
    uri: 'http://localhost:4000', // Use 'http' for local development
    useGETForQueries: true, // Send queries as GET requests
  });
  
  const client = new ApolloClient({
    link: httpLink, // Use the HTTP link
    cache: new InMemoryCache(),
  });

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>
);
