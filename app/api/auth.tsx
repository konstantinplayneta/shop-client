import { createEffect } from 'effector'
import api from './axiosClient'

interface IsignUpFx {
  url: string
  username: string
  password: string
  email: string
}

export const signUpFx = createEffect(
  async ({ url, username, password, email }: IsignUpFx) => {
    const { data } = await api.post(url, { username, password, email })

    console.log(data)

    if (data.warningMessage) {
      console.log(data.warningMessage)
      return
    }

    return data
  }
)
