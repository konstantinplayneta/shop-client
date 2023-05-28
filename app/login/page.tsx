/* eslint-disable max-len */
'use client'

import { useState } from 'react'
import { signUpFx } from '../api/auth'

export default function Login() {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false)

  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prevState) => !prevState)
  }

  const onClick = async () => {
    try {
      const userData = await signUpFx({
        url: '/users/signup',
        username: '111',
        password: '123123',
        email: '123@gmail.com',
      })

      console.log('userData', userData)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="flex min-h-screen">
      <div className="flex flex-row w-full">
        <div className="hidden lg:flex flex-col justify-between bg-[#ffe85c] lg:p-8 xl:p-12 lg:max-w-sm xl:max-w-lg">
          <div className="flex items-center justify-start space-x-3">
            <span className="bg-black rounded-full w-8 h-8" />
            <a href="#" className="font-medium text-xl">
              Unilfo
            </a>
          </div>
          <div className="space-y-5">
            <h1 className="lg:text-3xl xl:text-5xl xl:leading-snug font-extrabold">
              Enter your account and discover new experiences
            </h1>
            <p className="text-lg">You do not have an account?</p>
            <button className="inline-block flex-none px-4 py-3 border-2 rounded-lg font-medium border-black bg-black text-white">
              Create account here
            </button>
          </div>
          <p className="font-medium" />
        </div>

        <div className="flex flex-1 flex-col items-center justify-center px-10 relative">
          <div className="flex lg:hidden justify-between items-center w-full py-4">
            <div className="flex items-center justify-start space-x-3">
              <span className="bg-black rounded-full w-6 h-6" />
              <a href="#" className="font-medium text-lg">
                Unilfo
              </a>
            </div>
            <div className="flex flex-wrap items-center space-x-2 justify-center">
              <span>Not a member? </span>
              <a href="#" className="underline font-medium text-[#070eff]">
                Sign up now
              </a>
            </div>
          </div>

          <div className="flex flex-1 flex-col  justify-center space-y-5 max-w-md">
            <div className="flex flex-col space-y-2 text-center">
              <h2 className="text-3xl md:text-4xl font-bold">
                Sign in to account
              </h2>
              <p className="text-md md:text-xl">
                Sign up or log in to place the order,no password require!
              </p>
            </div>
            <div className="flex flex-col max-w-md space-y-5">
              <input
                type="text"
                placeholder="email"
                className="flex px-3 py-2 md:px-4 md:py-3 border-2 border-black rounded-lg font-medium placeholder:font-normal border-transparent focus:border-transparent focus:ring-0"
              />
              <div className="relative w-full">
                <input
                  type={isPasswordVisible ? 'text' : 'password'}
                  placeholder="password"
                  className="flex px-3 md:px-4 md:py-3 border-2 w-full border-black rounded-lg font-medium placeholder:font-normal border-transparent focus:border-transparent focus:ring-0"
                />
                <button
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
                        d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
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
                        d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  )}
                </button>
              </div>

              <button
                className="flex items-center justify-center flex-none px-3 py-2 md:px-4 md:py-3 border-2 rounded-lg font-medium border-black bg-black text-white"
                onClick={() => onClick()}
              >
                Войти
              </button>
              <div className="flex justify-center items-center">
                <span className="w-full border border-black" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
