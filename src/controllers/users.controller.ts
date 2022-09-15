import { Request, Response } from 'express';
import UserService from '../services/users.service';

class UserController {
  constructor(private userService = new UserService()) { }

  public create = async (req: Request, res: Response) => {
    const user = req.body;

    await this.userService.create(user);
    // const token = await this.userService.create(user);
    // res.status(201).json({ token });
    // FUNCIONA SEM TOKEN
    res.status(201).json({ token: 'token' });
  };
}

export default UserController;