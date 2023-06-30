import { createEffect } from 'effector'
import api from './axiosClient'
import { AxiosError } from 'axios'
import { toast } from 'react-toastify'

interface IsignUpFx {
  url: string
  username: string
  password: string
  email: string
  sex: string
  age: string
  sity: string
  status: string
  description: string
  instagram: string
  onlyfans: string
  youtube: string
  image: string
}

interface IloginFx {
  url: string
  password: string
  username: string
}
export const signUpFx = createEffect(
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
    image,
  }: IsignUpFx) => {
    const { data } = await api.post(url, {
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
      image,
    })

    if (data.warningMessage) {
      toast.warning(data.warningMessage)
      return
    }

    toast.success('Регистрация прощла успешно!')
    return data
  }
)

export const loginFx = createEffect(
  async ({ url, username, password }: IloginFx) => {
    const { data } = await api.post(url, { username, password })

    if (data.warningMessage) {
      toast.warning(data.warningMessage)
      return
    }

    toast.success('Вход выполнен!')
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
    toast.error((error as Error).message)
  }
})

export const logoutFx = createEffect(async ({ url }) => {
  const { data } = await api.get(url)

  if (data.warningMessage) {
    toast.warning(data.warningMessage)
    return
  }

  toast.success('Успешно')
  return
})
