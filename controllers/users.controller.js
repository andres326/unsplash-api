import { UserModel } from '../models/user.js';

import { scrypt as _scrypt, randomBytes } from 'crypto';
import { promisify } from 'util';

const scrypt = promisify(_scrypt);

export const signup = async (req, res, next) => {
  const { email, password } = req.body;

  const existingUser = await UserModel.findOne({ email });

  if (existingUser) {
    return res.status(400).send({ errors: ['Email in use'] });
  }

  const salt = randomBytes(8).toString('hex');
  const buf = await scrypt(password, salt, 64);

  const hashPassword = `${buf.toString('hex')}.${salt}`;

  const user = new UserModel({ email, password: hashPassword });
  await user.save();

  res.status(201).send(user);
};

export const signin = async (req, res, next) => {
  const { email, password } = req.body;

  const existingUser = await UserModel.findOne({ email });
  if (!existingUser) {
    return res.status(400).send({ errors: ['Invalid credentials'] });
  }

  const [hashedPassword, salt] = existingUser.password.split('.');
  const buf = await scrypt(password, salt, 64);

  if (buf.toString('hex') !== hashedPassword) {
    return res.status(400).send({ errors: ['Invalid credentials'] });
  }

  res.status(200).send(existingUser);
};
