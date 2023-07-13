import { createEffect } from 'effector'
import api from './axiosClient'
import { toast } from 'react-toastify'

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

export const updateUserFx = createEffect(
  async ({
    url,
    username,
    password,
    email,
    sex,
    age,
    sity,
    status,
    description,
    instagram,
    onlyfans,
    youtube,
    twitch,
    image,
    background,
  }) => {
    const { user } = await api.patch(url, {
      username,
      password,
      email,
      sex,
      age,
      sity,
      status,
      description,
      instagram,
      onlyfans,
      youtube,
      twitch,
      image,
      background,
    })

    if (user?.warningMessage) {
      toast.warning(user.warningMessage)
      return
    }

    toast.success('Данные успешно обновленны')

    return true
  }
)
