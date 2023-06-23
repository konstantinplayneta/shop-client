'use client'

import useLocalStorage from '../hooks/useLocalStorage'

const CookieHotification = () => {
  const [showCookie, setShowCookie] = useLocalStorage('showCookie', false)

  return (
    <>
      {!showCookie && (
        <div className="bg-gray-100 flex items-center justify-center  relative">
          <section className=" p-5 lg:px-24 absolute top-0 bg-gray-600">
            <div className="md:flex items-center -mx-3">
              <div className="md:flex-1 px-3 mb-5 md:mb-0">
                <p className="text-center md:text-left text-white text-xs leading-tight md:pr-12">
                  Мы, а также выбранные партнеры и связанные с ними компании
                  используем файлы cookie и аналогичные технологии, как указано
                  в нашей политике использования файлов cookie. Вы даете
                  согласие на использование этих технологий, нажав "Принять" или
                  продолжая просматривать этот веб-сайт.
                </p>
              </div>
              <div className="px-3 text-center">
                <button
                  id="btn"
                  className="py-2 px-8 bg-green-400 hover:bg-green-500 text-white rounded font-bold text-sm shadow-xl"
                  onClick={() => setShowCookie(true)}
                >
                  Accept cookies
                </button>
              </div>
            </div>
          </section>
        </div>
      )}
    </>
  )
}

export default CookieHotification
