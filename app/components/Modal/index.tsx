'use client'

import { updateUserFx } from '@/app/api/user'
import { useRouter, usePathname } from 'next/navigation'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

const Modal = ({ show = false, setShowProfileModal, profile }) => {
  const [showModal, setShowModal] = useState(show)
  const [showError, setShowError] = useState(false)
  const router = useRouter()
  const pathname = usePathname()
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm()

  const onClose = () => {
    setShowProfileModal(false)
    setShowModal(false)
  }

  const onSubmit = async (data, event) => {
    if (JSON.stringify(errors) !== '{}') {
      setShowError(true)
    }
    event.preventDefault()

    console.log(data)
    const updateUser = await updateUserFx({ url: `/users/update`, ...data })

    if (updateUser) {
      setShowModal(false)
      // window.location.reload()
    }

    return () => setShowError(false)
  }

  return (
    <>
      {showModal ? (
        <>
          <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="mt-96 md:w-[500px] sm:w-[500px] xs:w-[400px]  border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
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
                      <input
                        type="text"
                        className="block p-3 w-full text-sm text-gray-900 bg-gray-50
                      rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500
                         dark:placeholder-gray-400 dark:text-gray-700
                        dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                        defaultValue={profile.sex}
                        {...register('sex', {
                          required: true,
                        })}
                      />
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
                    <label className="block text-black text-sm font-bold mb-1">
                      Подписчики
                    </label>
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
