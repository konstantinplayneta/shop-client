import { createDomain } from 'effector-next'

export interface IUser {
  username: string
  userId: number | string
  email: string
}

const user = createDomain()

export const setUser = user.createEvent<IUser>()
export const setUserCity = user.createEvent<{ city: string; street: string }>()

export const $user = user
  .createStore<IUser>({} as IUser)
  .on(setUser, (_, user) => user)
