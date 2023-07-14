/* eslint-disable max-len */
'use client'
import { useForm, SubmitHandler } from 'react-hook-form'
import { signUpFx } from '../api/auth'
import { useRouter } from 'next/navigation'
import emailjs from '@emailjs/browser'

export default function Registration() {
  const router = useRouter()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputs>()

  const onSubmit: SubmitHandler<IFormInputs> = async ({ email }) => {
    event?.preventDefault()

    console.log(email)

    if (!email) {
      return
    }

    try {
      emailjs
        .send(
          'service_zx3q48q',
          'template_k25xs4o',
          {
            from_name: 'ONLIGIFTS',
            message: 'https://localhost/',
          },
          'K0yTuZLo5WIQMiyS1'
        )
        .then((result) => {
          console.log('result', result)
        })
        .catch((error) => {
          console.log(error)
        })
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="flex min-h-screen justify-center items-center bg-white">
      <div className="container mx-auto py-8">
        <h1 className="text-2xl font-bold mb-6 text-center text-black-90">
          Восстановление пароля
        </h1>
        <form
          className="w-full max-w-sm mx-auto bg-white p-8 rounded-md shadow-2xl"
          method="post"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
              type="email"
              id="email"
              placeholder="example@example.com"
              {...register('email', {
                required: true,
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  message: 'Неверный адрес электронной почты',
                },
              })}
            />
            {errors.email && (
              <span className="mb-3 text-normal text-red-500">
                {errors.email.message
                  ? String(errors.email.message)
                  : 'Обязательное поле'}
              </span>
            )}
          </div>
          <button
            className="w-full font-medium border-black bg-black text-white text-sm
                      py-2 px-4 rounded-md hover:bg-black-50 transition duration-300"
            type="submit"
          >
            Отправить
          </button>
        </form>
      </div>
    </div>
  )
}
