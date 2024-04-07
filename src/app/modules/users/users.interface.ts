import { Model } from 'mongoose'

export type IUser = {
  id: string
  role: string
  password: string
}

// export type UserMethods = {
//   fullName: () => void
// }

// export type UserModel = Model<IUser, object, UserMethods>
export type UserModel = Model<IUser, object>
