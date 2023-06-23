import { createEffect } from 'effector'
import api from './axiosClient'

export interface IMakePayFx {
  url: string
  amount: number
  description: string
  return_url: string
}

export interface ICheckPayFx {
  url: string
  paymentId: string
}

export const makePaymentFx = createEffect(
  async ({ url, amount, description, return_url }: IMakePayFx) => {
    const { data } = await api.post(url, { amount, description, return_url })

    return data
  }
)

export const checkPaymentFx = createEffect(
  async ({ url, paymentId }: ICheckPayFx) => {
    const { data } = await api.post(url, { paymentId })

    return data
  }
)
