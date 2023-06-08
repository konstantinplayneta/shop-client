import { createEffect } from 'effector'
import api from './axiosClient'

interface UserFx {
  url: string
}

export const getUserFx = createEffect(async ({ url }: UserFx) => {
  const { data } = await api.get(url)

  if (data.warningMessage) {
    console.log(data.warningMessage)
    return
  }

  return data
})
