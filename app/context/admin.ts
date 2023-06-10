import { createDomain } from 'effector-next'

export interface IAdmin {
  username: string
}

const admin = createDomain()

export const setAdmin = admin.createEvent<IAdmin>()

export const $admin = admin
  .createStore<IAdmin>({} as IAdmin)
  .on(setAdmin, (_, admin) => admin)
