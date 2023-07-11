'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { loginFx } from '../api/auth'
import { SubmitHandler, useForm } from 'react-hook-form'
import { setUser } from '../context/user'
import { toast } from 'react-toastify'
import Image from 'next/image'

interface IFormInputs {
  username: string
  password: string
}

export default function Login() {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false)
  const router = useRouter()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputs>()

  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prevState) => !prevState)
  }

  const redirectToSignUp = () => {
    router.push('/signup')
  }

  const onSubmit: SubmitHandler<IFormInputs> = async (data) => {
    event.preventDefault()

    const { username, password } = data
    try {
      const userData = await loginFx({
        url: '/users/login',
        username: username,
        password: password,
      })

      if (!userData) {
        return
      }

      setUser(userData)

      router.push(`/profile/${username}`)
    } catch (error) {
      if (error.response.status === 401) {
        toast.warning('Пользователь не найден')
      } else {
        toast.warning(error.message)
      }
    }
  }

  return (
    <div className="flex min-h-screen">
      <div className="flex flex-row w-full">
        <div
          className="hidden lg:flex flex-col justify-between
        bg-[#85a5b870] lg:p-8 xl:p-12 lg:max-w-sm xl:max-w-lg"
        >
          <div className="flex items-center justify-start space-x-3">
            <Image
              width={50}
              height={50}
              src={'/img/logo_gift.svg'}
              alt="logo"
            ></Image>
            <a href="/" className="font-medium text-5xl pt-2">
              ONLIGIFTS
            </a>
          </div>
          <div className="space-y-5">
            <h1 className="lg:text-3xl xl:text-5xl xl:leading-snug font-extrabold">
              Войдите в свою учетную запись и откройте для себя новые
              впечатления
            </h1>
            <p className="text-lg">У вас нет учетной записи?</p>
            <button
              className="inline-block flex-none px-4 py-3
              border-2 rounded-lg font-medium border-black
             bg-black text-white"
              onClick={redirectToSignUp}
            >
              Создайте учетную запись здесь
            </button>
          </div>
          <p className="font-medium" />
        </div>

        <div className="flex flex-1 flex-col items-center justify-center px-10 relative">
          <div className="flex lg:hidden justify-between items-center w-full py-4 flex-wrap">
            <div className="flex items-center justify-start space-x-3">
              <Image
                width={30}
                height={30}
                src={'/img/logo_gift.svg'}
                alt="logo"
              ></Image>
              <a href="/" className="font-medium text-2xl pt-2">
                ONLYGIFTS
              </a>
            </div>
            <div className="flex flex-wrap items-center space-x-2 justify-center">
              <span>Еще не зарегистрированы? </span>
              <a
                href="/signup"
                className="underline font-medium text-[#070eff]"
              >
                Регистрация
              </a>
            </div>
          </div>

          <div className="flex flex-1 flex-col  justify-center space-y-5 max-w-md">
            <form className="" method="post" onSubmit={handleSubmit(onSubmit)}>
              <div className="flex flex-col space-y-2 text-center mb-5">
                <h2 className="text-3xl md:text-4xl font-bold">
                  Войти в аккаунт
                </h2>
                <p className="text-md md:text-xl">
                  Зарегистрируйтесь или войдите в систему, чтобы разместить свой
                  список подарков
                </p>
              </div>
              <div className="flex flex-col max-w-md space-y-3">
                <input
                  type="text"
                  placeholder="логин"
                  className="flex px-3 py-2 md:px-4 md:py-3 border-2
                border-black rounded-lg font-medium placeholder:font-normal
                  focus:ring-0"
                  {...register('username', {
                    required: true,
                  })}
                />
                {errors.username && (
                  <span className="mb-1 text-normal text-red-500">
                    {errors.username.message
                      ? String(errors.username.message)
                      : 'Обязательное поле'}
                  </span>
                )}
                <div className="relative w-full">
                  <input
                    type={isPasswordVisible ? 'text' : 'password'}
                    placeholder="пароль"
                    className="flex px-3 md:px-4 md:py-3 border-2
                    w-full border-black rounded-lg font-medium
                    placeholder:font-normal  focus:ring-0"
                    {...register('password', {
                      required: true,
                    })}
                  />
                  <div
                    className="absolute inset-y-0 right-2 flex items-center px-4 text-gray-600"
                    onClick={togglePasswordVisibility}
                  >
                    {isPasswordVisible ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3.98 8.223A10.477 10.477 0 001.934
                          12C3.226 16.338 7.244 19.5 12 19.5c.993 0
                          1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0
                          0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523
                          0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894
                          7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M2.036 12.322a1.012 1.012 0 010-.639C3.423
                          7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431
                          0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    )}
                  </div>
                </div>
                {errors.password && (
                  <span className="mb-1 mt-0 text-normal text-red-500">
                    {errors.password.message
                      ? String(errors.password.message)
                      : 'Обязательное поле'}
                  </span>
                )}
                <button
                  className="flex items-center justify-center flex-none px-3 py-2
                  md:px-4 md:py-3 border-2 rounded-lg font-medium
                border-black bg-black text-white "
                  type="submit"
                >
                  Войти
                </button>
                <div className="flex justify-center items-center">
                  <span className="w-full border border-black" />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
