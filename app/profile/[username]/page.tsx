'use client'

import { UserFx } from '@/app/api/user'
import Image from 'next/image'
import { useEffect } from 'react'

export default async function ProfilePage() {
  useEffect(() => {
    getUserProfile()
  }, [])

  const getUserProfile = async () => {
    try {
      const userProfile = await UserFx({
        url: '/profile?id=1',
      })

      if (!userProfile) {
        return
      }

      console.log(userProfile)

      return userProfile
    } catch (error) {
      console.log(error)
    }
  }

  return (
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
                <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                  <div className="relative">
                    <Image
                      alt="avatar"
                      width={800}
                      height={800}
                      src="/img/gerl.jpg"
                      className="shadow-xl rounded-full h-auto align-middle
                       border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px"
                    />
                  </div>
                </div>
                <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                  <div className="py-6 px-3 mt-32 sm:mt-0" />
                </div>
                <div className="w-full lg:w-4/12 px-4 lg:order-1">
                  <div className="flex justify-center py-4 lg:pt-4 pt-8">
                    <div className="mr-4 p-3 text-center">
                      <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                        22
                      </span>
                      <span className="text-sm text-blueGray-400">Friends</span>
                    </div>
                    <div className="mr-4 p-3 text-center">
                      <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                        10
                      </span>
                      <span className="text-sm text-blueGray-400">Photos</span>
                    </div>
                    <div className="lg:mr-4 p-3 text-center">
                      <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                        89
                      </span>
                      <span className="text-sm text-blueGray-400">
                        Comments
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center mt-12">
                <h3 className="text-4xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
                  +++++
                </h3>
                <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
                  <i className="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400" />
                  Los Angeles, California
                </div>
                <div className="mb-2 text-blueGray-600 mt-10">
                  <i className="fas fa-briefcase mr-2 text-lg text-blueGray-400" />
                  Solution Manager - Creative Tim Officer
                </div>
                <div className="mb-2 text-blueGray-600">
                  <i className="fas fa-university mr-2 text-lg text-blueGray-400" />
                  University of Computer Science
                </div>
              </div>
              <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
                <div className="flex flex-wrap justify-center">
                  <div className="w-full lg:w-9/12 px-4">
                    <p className="mb-4 text-lg leading-relaxed text-blueGray-700">
                      An artist of considerable range, Jenna the name taken by
                      Melbourne-raised, Brooklyn-based Nick Murphy writes,
                      performs and records all of his own music, giving it a
                      warm, intimate feel with a solid groove structure. An
                      artist of considerable range.
                    </p>
                  </div>
                </div>
              </div>
              <div className="py-10 border-t border-blueGray-200 text-center">
                <div className="flex flex-wrap justify-center">
                  <div className="w-full lg:w-9/12 px-4">
                    <p className="text-4xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
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
                          <div
                            className=" md:flex-row flex-col flex
                                      justify-between items-start w-full
                                      pb-8 space-y-4 md:space-y-0"
                          >
                            <div className="w-full flex flex-col justify-start items-start space-y-8">
                              <h3 className="text-xl text-blueGray-700 xl:text-2xl font-semibold leading-6 ">
                                Premium Quaility Dress
                              </h3>
                              <div className="flex justify-start items-start flex-col space-y-2">
                                <p className="text-sm text-blueGray-700 leading-none text-gray-800">
                                  <span className="dark:text-gray-400 text-gray-300">
                                    Style:
                                  </span>
                                  Italic Minimal Design
                                </p>
                                <p className="text-sm text-blueGray-700 leading-none text-gray-800">
                                  <span className="dark:text-gray-400 text-gray-300">
                                    Size:{' '}
                                  </span>{' '}
                                  Small
                                </p>
                                <p className="text-sm text-blueGray-700 leading-none text-gray-800">
                                  <span className="dark:text-gray-400 text-gray-300">
                                    Color:{' '}
                                  </span>{' '}
                                  Light Blue
                                </p>
                              </div>
                            </div>
                            <div className="flex justify-between space-x-8 items-start w-full">
                              <p className="text-base text-blueGray-700 xl:text-lg leading-6">
                                $36.00
                              </p>
                            </div>
                            <button
                              className="text-lg block font-semibold py-2 px-6
                                         text-green-100 hover:text-white bg-green-400
                                          rounded-lg shadow hover:shadow-md transition duration-300 focus:outline-none"
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
                  Made by Unilfo
                </div>
              </div>
            </div>
          </div>
        </footer>
      </section>
    </main>
  )
}
