import { createEffect } from 'effector'
// import api from './axiosClient'
import { toast } from 'react-toastify'
import axios from 'axios'

export const uploadImageFx = createEffect(async (form) => {
  const { data } = await axios.post(
    'https://api.cloudinary.com/v1_1/unilfo/image/upload?api_key=433129767476515',
    form
  )

  if (data.warningMessage) {
    toast.warning(data.warningMessage)
    return
  }

  return data
})
