import { User } from './users.model';

export const lastUserId = async () => {
  const lastUser = await User.findOne({}, { id: 1, _id: 0 })
    .sort({ createdAt: -1 })
    .lean();
  return lastUser?.id;
};

export const generateUserId = async (): Promise<string> => {
  const currentId = (await lastUserId()) || (0).toString().padStart(5, '0');
  const id = (+currentId + 1).toString().padStart(5, '0');
  return id;
};
