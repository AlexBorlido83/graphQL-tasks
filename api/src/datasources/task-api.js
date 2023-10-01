// import { RESTDataSource } from "@apollo/datasource-rest";

// export class TaskAPI extends RESTDataSource {
//     baseURL = "http://localhost:4000/";

//     getTasks() {
//         return this.get('task');
//     }

//     addTask() {
//         const randomId = Math.random().toString().split('.')[1];
//         const newMovie = { ...args, _id: randomId }
//         movies.push(newMovie);
//         return newMovie;
//     }
// }

import { MongoDataSource } from 'apollo-datasource-mongodb'

export default class TaskAPI extends MongoDataSource {
  async getTasks() {
    return await this.model.find();
  }

  async addTask({ title }) {
    return await this.model.create({ title });
  }
}