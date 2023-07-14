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
    subscribers,
    password,
  }) => {
    const { user } = await api.patch(url, {
      username,
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
      subscribers,
      password,
    })

    if (user?.warningMessage) {
      toast.warning(user.warningMessage)
      return
    }

    toast.success('Данные успешно обновленны')

    return true
  }
)
