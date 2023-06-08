import { createDomain } from 'effector-next'

export interface IAdmin {
  username: string
  userId: number | string
}

const admin = createDomain()

export const setAdmin = admin.createEvent<IAdmin>()

export const $admin = admin
  .createStore<IAdmin>({} as IAdmin)
  .on(setAdmin, (_, admin) => admin)
