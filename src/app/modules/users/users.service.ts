import { User } from './users.model';
import { IUser } from './users.interface';
import { generateUserId } from './users.utils';
import config from '../../../config';

const createUser = async (payload: IUser): Promise<IUser | null> => {
  const currentId = await generateUserId();
  payload.id = currentId;

  if (!payload.password) {
    payload.password = config.default_user_pass as string;
  }

  const user = await User.create(payload);
  if (!user) throw new Error('Failed to create user !');

  return user;
};

export default {
  createUser,
};
