import jwt from 'jsonwebtoken';
import User from '../interfaces/users.interface';

const Token = (user: User) => {
  const token = jwt.sign({ data: user }, 'secret', {
    expiresIn: '1d',
    algorithm: 'HS256',
  });

  return token;
};

export default Token;
