'use client'

import { updateUserFx } from '@/app/api/user'
import { useRouter, usePathname } from 'next/navigation'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

const Modal = ({ show = false, showProfileModalFn, profile }) => {
  const [showModal, setShowModal] = useState(show)
  const [showError, setShowError] = useState(false)
  const router = useRouter()
  const pathname = usePathname()
  const [isPasswordVisible, setIsPasswordVisible] = useState(false)

  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm()

  const onClose = () => {
    showProfileModalFn(false, false)
  }

  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prevState) => !prevState)
  }

  const onSubmit = async (data, event) => {
    if (JSON.stringify(errors) !== '{}') {
      setShowError(true)
    }
    event.preventDefault()

    console.log(data)
    const updateUser = await updateUserFx({ url: `/users/update`, ...data })

    if (updateUser) {
      showProfileModalFn(false, true)
    }

    return () => setShowError(false)
  }

  const [myValue, setMyValue] = useState('')

  return (
    <>
      {showModal ? (
        <>
          <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="mt-[550px] md:w-[500px] sm:w-[500px] xs:w-[400px]  border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
                  <h3 className="text-3xl font=semibold items-center text-center w-full">
                    Редактирование аккаунта
                  </h3>
                </div>
                <div className="relative p-6 flex-auto">
                  <form
                    action="#"
                    method="post"
                    className="px-8 pt-6 w-full flex gap-1 flex-wrap"
                    onSubmit={handleSubmit(onSubmit)}
                  >
                    <div className="relative w-full">
                      <label
                        className="block text-black text-sm font-bold mb-1"
                        htmlFor="password"
                      >
                        Пароль
                      </label>
                      <input
                        type={isPasswordVisible ? 'text' : 'password'}
                        placeholder="пароль"
                        className="block p-3 w-full text-sm text-gray-900 bg-gray-50
                        rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500
                           dark:placeholder-gray-400 dark:text-gray-700
                          dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                          defaultValue={''}
                        {...register('password', {
                          required: false,
                        })}
                      />
                      <div
                        className="absolute inset-y-0 right-2 flex items-end px-4 text-gray-600"
                        onClick={togglePasswordVisibility}
                      >
                        {isPasswordVisible ? (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-5 h-5 mb-3"
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
                            className="w-5 h-5 mb-3"
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
                    <div className="flex flex-col max-w-md space-y-3 w-full">
                      <label
                        className="block text-black text-sm font-bold mb-1"
                        htmlFor="username"
                      >
                        Имя
                      </label>
                      <input
                        type="text"
                        {...register('username', {
                          required: true,
                        })}
                        className="block p-3 w-full text-sm text-gray-900 bg-gray-50
                      rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500
                         dark:placeholder-gray-400 dark:text-gray-700
                        dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                        defaultValue={profile.username}
                      />
                      {errors.username && (
                        <span className="mb-1 text-normal text-red-500">
                          {errors.username.message
                            ? String(errors.username.message)
                            : 'Обязательное поле'}
                        </span>
                      )}
                    </div>
                    <div className="flex flex-col max-w-md space-y-3 w-full">
                      <label
                        className="block text-black text-sm font-bold mb-1"
                        htmlFor="email"
                      >
                        Email
                      </label>
                      <input
                        type="text"
                        className="block p-3 w-full text-sm text-gray-900 bg-gray-50
                      rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500
                         dark:placeholder-gray-400 dark:text-gray-700
                        dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                        defaultValue={profile.email}
                        {...register('email', {
                          required: true,
                        })}
                      />
                      {errors.email && (
                        <span className="mb-1 text-normal text-red-500">
                          {errors.email.message
                            ? String(errors.email.message)
                            : 'Обязательное поле'}
                        </span>
                      )}
                    </div>
                    <div className="flex flex-col max-w-md space-y-3 w-full">
                      <label
                        className="block text-black text-sm font-bold mb-1"
                        htmlFor="sex"
                      >
                        Sex
                      </label>
                      <select
                        {...register('sex', {
                          required: true,
                        })}
                        id="sex"
                        className="block p-3 w-full text-sm text-gray-900 bg-gray-50
                      rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500
                         dark:placeholder-gray-400 dark:text-gray-700
                        dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                        defaultValue={profile?.sex}
                        onChange={(e) => setMyValue(e.target.value)}
                      >
                        <option value="male">м</option>
                        <option value="female">ж</option>
                      </select>
                      {errors.sex && (
                        <span className="mb-1 text-normal text-red-500">
                          {errors.sex.message
                            ? String(errors.sex.message)
                            : 'Обязательное поле'}
                        </span>
                      )}
                    </div>
                    <div className="flex flex-col max-w-md space-y-3 w-full">
                      <label
                        className="block text-black text-sm font-bold mb-1"
                        htmlFor="age"
                      >
                        Age
                      </label>
                      <input
                        type="text"
                        className="block p-3 w-full text-sm text-gray-900 bg-gray-50
                      rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500
                         dark:placeholder-gray-400 dark:text-gray-700
                        dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                        defaultValue={profile.age}
                        {...register('age', {
                          required: true,
                        })}
                      />
                      {errors.age && (
                        <span className="mb-1 text-normal text-red-500">
                          {errors.age.message
                            ? String(errors.age.message)
                            : 'Обязательное поле'}
                        </span>
                      )}
                    </div>
                    <div className="flex flex-col max-w-md space-y-3 w-full">
                      <label
                        className="block text-black text-sm font-bold mb-1"
                        htmlFor="sity"
                      >
                        Город
                      </label>
                      <input
                        type="text"
                        className="block p-3 w-full text-sm text-gray-900 bg-gray-50
                      rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500
                         dark:placeholder-gray-400 dark:text-gray-700
                        dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                        defaultValue={profile.sity}
                        {...register('sity', {
                          required: true,
                        })}
                      />
                      {errors.sity && (
                        <span className="mb-1 text-normal text-red-500">
                          {errors.sity.message
                            ? String(errors.sity.message)
                            : 'Обязательное поле'}
                        </span>
                      )}
                    </div>
                    <div className="flex flex-col max-w-md space-y-3 w-full">
                      <label
                        className="block text-black text-sm font-bold mb-1"
                        htmlFor="description"
                      >
                        Расскажи о себе
                      </label>
                      <textarea
                        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg
                      shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500
                       dark:text-gray-700 h-36
                       dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        defaultValue={profile.description}
                        {...register('description', {
                          required: true,
                        })}
                      />
                      {errors.description && (
                        <span className="mb-1 text-normal text-red-500">
                          {errors.description.message
                            ? String(errors.description.message)
                            : 'Обязательное поле'}
                        </span>
                      )}
                    </div>
                    <div className="flex flex-col max-w-md space-y-3 w-full">
                      <label
                        className="block text-black text-sm font-bold mb-1"
                        htmlFor="sity"
                      >
                        Инстаграм
                      </label>
                      <input
                        type="text"
                        className="block p-3 w-full text-sm text-gray-900 bg-gray-50
                      rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500
                         dark:placeholder-gray-400 dark:text-gray-700
                        dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                        defaultValue={profile.instagram}
                        {...register('instagram')}
                      />
                    </div>
                    <div className="flex flex-col max-w-md space-y-3 w-full">
                      <label
                        className="block text-black text-sm font-bold mb-1"
                        htmlFor="onlyfans"
                      >
                        onlyfans
                      </label>
                      <input
                        type="text"
                        className="block p-3 w-full text-sm text-gray-900 bg-gray-50
                      rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500
                         dark:placeholder-gray-400 dark:text-gray-700
                        dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                        defaultValue={profile.onlyfans}
                        {...register('onlyfans')}
                      />
                    </div>
                    <div className="flex flex-col max-w-md space-y-3 w-full">
                      <label
                        className="block text-black text-sm font-bold mb-1"
                        htmlFor="youtube"
                      >
                        youtube
                      </label>
                      <input
                        type="text"
                        className="block p-3 w-full text-sm text-gray-900 bg-gray-50
                      rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500
                         dark:placeholder-gray-400 dark:text-gray-700
                        dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                        defaultValue={profile.youtube}
                        {...register('youtube')}
                      />
                    </div>
                    <div className="flex flex-col max-w-md space-y-3 w-full">
                      <label
                        className="block text-black text-sm font-bold mb-1"
                        htmlFor="twitch"
                      >
                        twitch
                      </label>
                      <input
                        type="text"
                        className="block p-3 w-full text-sm text-gray-900 bg-gray-50
                      rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500
                         dark:placeholder-gray-400 dark:text-gray-700
                        dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                        defaultValue={profile.twitch}
                        {...register('twitch')}
                      />
                    </div>
                    <div className="flex flex-col max-w-md space-y-3 w-full">
                      <label
                        className="block text-black text-sm font-bold mb-1"
                        htmlFor="subscribers"
                      >
                        Подписчики
                      </label>
                      <input
                        type="text"
                        className="block p-3 w-full text-sm text-gray-900 bg-gray-50
                      rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500
                         dark:placeholder-gray-400 dark:text-gray-700
                        dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                        defaultValue={profile.subscribers}
                        {...register('subscribers')}
                      />
                    </div>
                    <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b w-full">
                      <button
                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                        onClick={onClose}
                      >
                        Закрыть
                      </button>
                      <button
                        className="flex items-center justify-center flex-none px-3 py-2
                    md:px-4 md:py-3 border-2 rounded-lg font-medium
                  border-black bg-black text-white"
                        type="submit"
                      >
                        Сохранить
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  )
}

export default Modal
