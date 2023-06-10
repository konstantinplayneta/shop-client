'use client'

import { useStore } from 'effector-react'
import { useState } from 'react'
import { $user } from '../context/user'

export default function Header() {
  const [navbarOpen, setNavbarOpen] = useState(false)
  const user = useStore($user)
  console.log(user)

  return (
    <div className="fixed top-0 w-full z-30 clearNav md:bg-opacity-90 transition duration-300 ease-in-out">
      <div
        className="flex flex-col max-w-6xl px-4 mx-auto
      md:items-center md:justify-between md:flex-row md:px-6 lg:px-8"
      >
        <div className="flex flex-row items-center justify-between p-4">
          <a
            href="/"
            className="text-lg font-semibold rounded-lg tracking-widest focus:outline-none focus:shadow-outline"
          >
            <h1 className="text-4xl Avenir tracking-tighter text-gray-900 md:text-4x1 lg:text-3xl">
              ONLYGIFTS
            </h1>
          </a>
          <button
            className="text-white cursor-pointer leading-none px-3 py-1 md:hidden outline-none focus:outline-none "
            type="button"
            aria-label="button"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#191919"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-menu"
            >
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>
        </div>
        <div
          className={
            'md:flex flex-grow items-center' +
            (navbarOpen ? ' flex' : ' hidden')
          }
        >
          <nav className="flex-col flex-grow ">
            <ul className="flex flex-grow justify-end flex-wrap items-center">
              {!user ? (
                <>
                  <li>
                    <a
                      href="/login"
                      className="font-medium text-gray-600 hover:text-gray-900
                  px-5 py-3 flex items-center transition duration-150 ease-in-out"
                    >
                      Войти
                    </a>
                  </li>
                  <li>
                    <a
                      href="/signup"
                      className="font-medium text-gray-600 hover:text-gray-900
                  px-5 py-3 flex items-center transition duration-150 ease-in-out"
                    >
                      Регистрация
                    </a>
                  </li>
                </>
              ) : (
                <li>
                  <a
                    href={`/profile/${user.username}`}
                    className="font-medium text-gray-600 hover:text-gray-900
                  px-5 py-3 flex items-center transition duration-150 ease-in-out"
                  >
                    Мой профиль
                  </a>
                </li>
              )}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  )
}
