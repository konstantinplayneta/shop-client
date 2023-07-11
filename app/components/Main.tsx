'use client'

import Image from 'next/image'
import { $user } from '../context/user'
import { useRouter } from 'next/navigation'
import { useStore } from 'effector-react'

export default function Main() {
  const router = useRouter()
  const user = useStore($user)

  const handleCreateList = () => {
    if (user?.username) {
      console.log(user)

      router.push(`profile/${user?.username}`)
    } else {
      router.push('/login')
    }
  }

  return (
    <section className="text-gray-600 body-font">
      <form action="">
        <div
          className="max-w-7xl mx-auto flex px-5 xs:pt-28 md:py-28 
        md:flex-row flex-col items-start md:items-start xs:items-center md:w-full 
        md:justify-between md:gap-10"
        >
          <div className="lg:flex-grow md:w-1/2 w-600-px md:ml-24 pt-6 flex flex-col md:items-start md:mb-40 xs:mb-5 items-center text-center">
            <h1 className="mb-5 sm:text-6xl text-5xl items-center Avenir md:w-2/2 text-gray-900">
              Создайте свой уникальный список желаний, чтобы близкие и друзья
              дарили самые важные для вас подарки
            </h1>
            <p className="mb-4 xl:w-2/2 text-gray-600 text-lg">
              Просто составьте список желаний, отправьте ссылку друзьям через
              социальные сети, и получай только «те самые» подарки.
            </p>
          </div>
          <div className="xl:mr-44 sm:mr-0 sm:mb-28 mb-0 lg:mb-0 md:pl-10">
            <Image
              width={200}
              height={200}
              className="w-80 md:ml-1 ml-24 xs:ml-0"
              alt="iPhone-12"
              src="/img/anna-tarazevich.jpg"
            />
          </div>
        </div>
        <div className="grr max-w-7xl md:pt-20 xs:pt-10 mx-auto text-center">
          <h1 className="mb-8 text-6xl Avenir font-semibold text-gray-900">
            Доставка по всей территории России
          </h1>
          <h1 className="mb-8 text-2xl Avenir font-semibold text-gray-600 text-center">
            Если ваш подарок нельзя приобрести в России, то мы можем привезти
            его для вас
          </h1>
          <div className="container flex flex-col items-center justify-center mx-auto rounded-lg">
            <Image
              width={200}
              height={200}
              className="object-cover object-center w-3/4 mb-10 g327 border rounded-lg shadow-md h-[300px]"
              alt="Placeholder Image"
              src="/img/secret-garden.jpg"
            />
          </div>
        </div>
        <section className="relative">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 sm:mb-20 text-center">
            <div className="md:py-20 xs:py-5">
              <h1 className="mb-5 text-6xl Avenir font-semibold text-gray-900">
                Большой секрет – огромный сюрприз
              </h1>
              <h1 className="mb-9 text-2xl font-semibold text-gray-600">
                мы знаем как вы заботитесь о своих персональных данных, поэтому
                ваш адрес никто не узнает
              </h1>
              <div
                className="inline-flex items-center px-14 py-3 mt-2
              ml-2 font-medium text-gray-600 transition duration-500
              ease-in-out transform bg-transparent border rounded-lg bg-gray-900
               hover:text-gray-900 hover:border-gray-900 cursor-pointer"
                onClick={handleCreateList}
              >
                <span className="justify-center">Создать список</span>
              </div>
            </div>
          </div>
        </section>
      </form>
    </section>
  )
}
