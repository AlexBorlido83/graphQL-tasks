import { ApolloServer } from 'apollo-server';
import mongoose from 'mongoose';
import typeDefs from './src/schema.js';
import resolvers from './src/resolver.js';
import 'dotenv/config';

// const MONGODB_URI="mongodb+srv://alexborlido:qbFJe5spxiOIyUmx@cluster-alex.8xpkbyg.mongodb.net/";

const uri = process.env.MONGODB_URI

const server = new ApolloServer({
  typeDefs,
  resolvers
});

mongoose.connect(uri, {useNewUrlParser: true})
  .then(() => {
    console.log('MongoDB Connection Successfully!');
    return server.listen({port: 4000});
  })
  .then((res) => {
    console.log(`Server running at ${res.url}`)
  })