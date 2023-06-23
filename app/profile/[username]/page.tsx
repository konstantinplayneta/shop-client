'use client'

import { makePaymentFx } from '@/app/api/payment'
import { getUserFx } from '@/app/api/user'
import Header from '@/app/components/Header'
import SocialList from '@/app/components/SocialList'
import { $user } from '@/app/context/user'
import useRedirectByUserCheck from '@/app/hooks/useRedirectByUserCheck'
import { useStore } from 'effector-react'
import Image from 'next/image'
import { usePathname, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'

export default function ProfilePage() {
  useRedirectByUserCheck(true)

  const profile = useStore($user)

  const [user, setUser] = useState('')
  const pathname = usePathname()
  const router = useRouter()
  const [canEdit, setCanEdit] = useState(false)

  const getUserProfile = async (id: string) => {
    try {
      const userProfile = await getUserFx({
        url: `/users/profile/${id}`,
      })

      if (!userProfile) {
        console.log('not found')
        router.push('/')
      }

      setUser(userProfile)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    if (!user) {
      getUserProfile(pathname.split('/')[2])
    }
  }, [])

  useEffect(() => {
    if (user && profile && user.username === profile.username) {
      setCanEdit(true)
    }
  }, [user])

  if (!user) {
    return <div />
  }
  const links = [
    { plapform: 'instagram', url: user?.instagram },
    { plapform: 'onlyfans', url: user?.onlyfans },
    { plapform: 'youtube', url: user?.youtube },
    { plapform: 'twitch', url: user?.twitch },
  ]

  const makePay = async (price, item) => {
    console.log(user, profile)

    try {
      const data = await makePaymentFx({
        url: '/payment',
        amount: price,
        description: `Заказ №1 rrr${item} fggfg`,
        return_url: `http://localhost:3001/profile/${user.username}`,
      })

      console.log(
        'data.confirmation.confirmation_url',
        data.confirmation.confirmation_url
      )

      router.push(data.confirmation.confirmation_url)
    } catch (error) {
      toast.warning((error as Error).message)
    }
  }
  return (
    <>
      <Header />
      <main className="profile-page">
        <section className="relative block h-500-px">
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage:
                // eslint-disable-next-line max-len
                "url('https://images.unsplash.com/photo-1499336315816-097655dcfbda?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=2710&amp;q=80')",
            }}
          >
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-50 bg-black"
            />
            {canEdit && (
              <div className="absolute top-4 right-4 cursor-pointer w-8 mt-20">
                <svg
                  fill="none"
                  stroke="#eaeaea"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
                  />
                </svg>
              </div>
            )}
          </div>
          <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px"
            style={{ transform: 'translateZ(0px)' }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-blueGray-200 fill-current"
                points="2560 0 2560 100 0 100"
              />
            </svg>
          </div>
        </section>
        <section className="relative py-16 bg-blueGray-200">
          <div className="container mx-auto px-4">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
              <div className="px-6">
                <div className="flex flex-wrap justify-center">
                  <div className="w-full lg:w-3/12 h-full px-4 lg:order-2 flex justify-center">
                    <div className="relative flex justify-center items-center">
                      {canEdit && (
                        <div className="absolute z-2 w-10 h-10 cursor-pointer pr-1">
                          <svg
                            fill="none"
                            stroke="#eaeaea"
                            strokeWidth="1.5"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                            aria-hidden="true"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M9 8.25H7.5a2.25 2.25 0 00-2.25 2.25v9a2.25 2.25 0 002.25 2.25h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25H15M9 12l3 3m0 0l3-3m-3 3V2.25"
                            />
                          </svg>
                        </div>
                      )}
                      <Image
                        alt="avatar"
                        width={200}
                        height={200}
                        src={user?.image}
                        className="shadow-xl rounded-full align-middle
                       border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px h-[150px] object-cover"
                      />
                    </div>
                  </div>
                  <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                    <div className="py-6 px-3 md:mt-20 sm:mt-0 xs:mt-0" />
                  </div>
                  <div className="w-full lg:w-4/12 px-4 lg:order-1">
                    <div className="flex justify-center py-4 lg:pt-4 pt-8">
                      <div className="mr-4 p-3 text-center">
                        <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                          1M
                        </span>
                        <span className="text-sm text-blueGray-400">
                          Подпищики
                        </span>
                      </div>
                      <div className="mr-4 p-3 text-center">
                        <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                          10
                        </span>
                        <span className="text-sm text-blueGray-400">Фото</span>
                      </div>
                      <div className="lg:mr-4 p-3 text-center">
                        <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                          89
                        </span>
                        <span className="text-sm text-blueGray-400">
                          Комментарии
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-center mt-12">
                  <h3 className="text-4xl font-semibold leading-normal mb-2 text-blueGray-700">
                    {user?.username ? (
                      <div>{user?.username}</div>
                    ) : (
                      <div>упс пусто</div>
                    )}
                  </h3>
                  <div className="text-sm leading-normal mt-0 mb-5 text-blueGray-400 font-bold uppercase">
                    <i className="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400 cursor-pointer" />
                    {user?.sity}
                  </div>
                  <SocialList links={links} />
                </div>
                <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
                  <div className="flex flex-wrap justify-center">
                    <div className="w-full lg:w-9/12 px-4">
                      <p className="mb-4 text-lg leading-relaxed text-center text-blueGray-700">
                        {user?.description}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="py-10 border-t border-blueGray-200 text-center">
                  <div className="flex flex-wrap justify-center">
                    <div className="w-full lg:w-9/12 px-4">
                      <p className="text-4xl font-semibold leading-normal mb-2 text-blueGray-700">
                        Список желаний
                      </p>
                    </div>
                  </div>
                </div>
                <div className="">
                  <div
                    className="flex flex-col xl:flex-row jusitfy-center
                              items-stretch w-full xl:space-x-8 space-y-4
                              md:space-y-6 xl:space-y-0"
                  >
                    <div className="flex flex-col justify-start items-start w-full space-y-2 md:space-y-2 xl:space-y-4">
                      {[1, 2, 3].map((el) => (
                        <div
                          className="flex flex-col justify-start items-start
                                  bg-white rounded-xl px-4 py-4
                                  md:py-6 md:p-6 xl:p-8 w-full"
                          key={el}
                        >
                          <div
                            className="mt-4 py-6 px-6 md:mt-6 flex flex-col
                                    md:flex-row hover:shadow-2xl hover:scale-105
                                    transition-all transform duration-500 justify-start
                                    items-start md:items-center md:space-x-6
                                    xl:space-x-8 w-full"
                          >
                            <div className="pb-4 md:pb-8 md:w-40">
                              <Image
                                className="w-full hidden md:block"
                                src="https://i.ibb.co/84qQR4p/Rectangle-10.png"
                                alt="dress"
                                width={400}
                                height={400}
                              />
                              <Image
                                className="w-full md:hidden"
                                src="https://i.ibb.co/L039qbN/Rectangle-10.png"
                                alt="dress"
                                width={400}
                                height={400}
                              />
                            </div>
                            {canEdit && (
                              <div className="absolute z-2 w-10 h-10 cursor-pointer right-1 xs:left-6">
                                <svg
                                  fill="none"
                                  stroke="#eaeaea"
                                  strokeWidth="1.5"
                                  viewBox="0 0 24 24"
                                  xmlns="http://www.w3.org/2000/svg"
                                  aria-hidden="true"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
                                  />
                                </svg>
                              </div>
                            )}
                            <div
                              className=" md:flex-row flex-col flex
                                      justify-between items-start w-full
                                      pb-8 space-y-4 md:space-y-0"
                            >
                              <div className="w-full flex flex-col justify-start items-start space-y-8">
                                <h3 className="text-xl text-blueGray-700 xl:text-2xl font-semibold leading-6 ">
                                  Платье
                                </h3>
                                <div className="flex justify-start items-start flex-col space-y-2">
                                  <p className="text-sm text-blueGray-700 leading-none text-gray-800">
                                    <span className="dark:text-gray-400 text-gray-300">
                                      Стиль:
                                    </span>
                                    Итальянский дизайн
                                  </p>
                                  <p className="text-sm text-blueGray-700 leading-none text-gray-800">
                                    <span className="dark:text-gray-400 text-gray-300">
                                      Размер:
                                    </span>
                                    xs
                                  </p>
                                  <p className="text-sm text-blueGray-700 leading-none text-gray-800">
                                    <span className="dark:text-gray-400 text-gray-300">
                                      Цвет:
                                    </span>
                                    Розовый
                                  </p>
                                </div>
                              </div>
                              <div className="flex justify-between space-x-8 items-start w-full">
                                <p className="text-base text-blueGray-700 xl:text-lg leading-6">
                                  1000.00р
                                </p>
                              </div>
                              <button
                                className="text-lg block font-semibold py-2 px-6
                                         text-green-100 hover:text-white bg-green-400
                                          rounded-lg shadow hover:shadow-md transition duration-300
                                          focus:outline-none self-end"
                                onClick={() =>
                                  makePay('100', '23Premium Quaility Dress')
                                }
                              >
                                Подарить
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <footer className="relative bg-blueGray-200 pt-8 pb-6 mt-8">
            <div className="container mx-auto px-4">
              <div className="flex flex-wrap items-center md:justify-between justify-center">
                <div className="w-full md:w-6/12 px-4 mx-auto text-center">
                  <div className="text-sm text-blueGray-500 font-semibold py-1">
                    Made by ONLYFANS
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </section>
      </main>
    </>
  )
}
