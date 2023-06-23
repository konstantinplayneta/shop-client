/* eslint-disable max-len */
'use client'
import { useForm, SubmitHandler } from 'react-hook-form'
import { signUpFx } from '../api/auth'
import { useRouter } from 'next/navigation'

interface IFormInputs {
  name: string
  email: string
  password: string
  confirmPassword: string
}

export default function Registration() {
  const router = useRouter()

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<IFormInputs>()

  const onSubmit: SubmitHandler<IFormInputs> = async (data) => {
    event?.preventDefault()

    const { email, name, password } = data

    try {
      const userData = await signUpFx({
        url: '/users/signup',
        username: name,
        password: password,
        email: email,
      })

      if (!userData) {
        return
      }

      router.push('/login')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="flex min-h-screen justify-center items-center bg-white">
      <div className="container mx-auto py-8">
        <h1 className="text-2xl font-bold mb-6 text-center text-black-90">
          Регистрация аккаунта
        </h1>
        <form
          className="w-full max-w-sm mx-auto bg-white p-8 rounded-md shadow-2xl"
          method="post"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="name"
            >
              Логин
            </label>
            <input
              className={`w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none`}
              type="text"
              id="name"
              placeholder="login"
              {...register('name', {
                required: true,
                pattern: {
                  value: /^[a-zA-Z](.[a-zA-Z0-9_-]*)$/,
                  message: 'Пароль должен содержать минимум 6 символов и состоять из латиницы',
                },
              })}
            />
            {errors.name && (
              <span className="mb-3 text-normal text-red-500">
                {errors.name.message
                  ? String(errors.name.message)
                  : 'Обязательное поле'}
              </span>
            )}
          </div>
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
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
              type="password"
              id="password"
              placeholder="********"
              {...register('password', {
                required: true,
                pattern: {
                  value: /[0-9a-zA-Z!@#$%^&*]{6,}/,
                  message: 'Минимум 6 символов',
                },
              })}
            />
            {errors.password && (
              <span className="mb-3 text-normal text-red-500">
                {errors.password.message
                  ? String(errors.password.message)
                  : 'Обязательное поле'}
              </span>
            )}
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="confirm-password"
            >
              Confirm Password
            </label>
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
              type="password"
              id="confirm-password"
              placeholder="********"
              {...register('confirmPassword', {
                required: true,
                validate: (val: string) => {
                  if (watch('password') != val) {
                    return 'Ваши пароли не совпадают'
                  }
                },
              })}
            />
            {errors.confirmPassword && (
              <span className="mb-3 text-normal text-red-500">
                {errors.confirmPassword.message
                  ? String(errors.confirmPassword.message)
                  : 'Обязательное поле'}
              </span>
            )}
          </div>
          <button
            className="w-full font-medium border-black bg-black text-white text-sm
                      py-2 px-4 rounded-md hover:bg-black-50 transition duration-300"
            type="submit"
          >
            Создать
          </button>
        </form>
      </div>
    </div>
  )
}
