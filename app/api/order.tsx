import { createEffect } from 'effector'
import api from './axiosClient'
import { AxiosError } from 'axios'
import { toast } from 'react-toastify'



interface IorderFx {
  order: string
  order_inner: string
  total_price: string
  description: string
  owner: string
  gift: string
  data: string
  status: string
  recipient: string
}

interface IgetOrderFx {
  url: string
}

export const createOrderFx = createEffect(
  async ({
    order,
    order_inner,
    total_price,
    description,
    owner,
    gift,
    data,
    status,
    recipient,
  }: IorderFx) => {
    const { item } = await api.post(url, {
      order,
      order_inner,
      total_price,
      description,
      owner,
      gift,
      data,
      status,
      recipient,
    })

    if (item.warningMessage) {
      toast.warning(item.warningMessage)
      return
    }

    toast.success('Успешно создан заказ')
    return item
  }
)

export const getOrderFx = createEffect(async ({ url }: IgetOrderFx) => {
  try {
    const { data } = await api.get(url)

    if (data.warningMessage) {
      toast.warning(data.warningMessage)
      return
    }

    return { order: data || '' }

  } catch (error) {
    const axiosError = error as AxiosError

    if (axiosError.response) {
      if (axiosError.response.status === 403) {
        return false
      }
    }
  }
})
