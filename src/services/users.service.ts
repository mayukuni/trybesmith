import connection from '../models/connection';
import UserModel from '../models/users.model';
import User from '../interfaces/users.interface';
// import Token from '../helpers/jwt';

export default class UserService {
  public model: UserModel;

  constructor() {
    this.model = new UserModel(connection);
  }

  public async create(user: User) {
    // const token = Token(user);
    // return token;
    return this.model.create(user);
  }
}