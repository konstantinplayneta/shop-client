import { createEffect } from 'effector'
import api from './axiosClient'
import { AxiosError } from 'axios'

interface IsignUpFx {
  url: string
  username: string
  password: string
  email: string
}

interface IloginFx {
  url: string
  password: string
  username: string
}
export const signUpFx = createEffect(
  async ({ url, username, password, email }: IsignUpFx) => {
    const { data } = await api.post(url, { username, password, email })

    if (data.warningMessage) {
      console.log(data.warningMessage)
      return
    }

    return data
  }
)

export const loginFx = createEffect(
  async ({ url, username, password }: IloginFx) => {
    const { data } = await api.post(url, { username, password })

    if (data.warningMessage) {
      console.log(data.warningMessage)
      return
    }

    return { username: data.username }
  }
)

export const checkUserAuthFx = createEffect(async (url: string) => {
  try {
    const { data } = await api.get(url)

    return data
  } catch (error) {
    const axiosError = error as AxiosError

    if (axiosError.response) {
      if (axiosError.response.status === 403) {
        return false
      }
    }
  }
})
