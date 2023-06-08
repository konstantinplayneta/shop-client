export default function Footer() {
  return (
    <footer className="pb-4">
      <div className="max-w-6xl xl:max-w-6xl mx-auto divide-y divide-gray-200 px-4 sm:px-6 md:px-8">
        <ul
          className="Footer_nav__2rFid text-sm font-medium  sm:pb-20
         gap-y-10"
        >
          <li className="space-y-5 w-full">
            <h2
              className="text-sm w-full flex tracking-wide text-gray-900
            uppercase font-bold items-center justify-center"
            >
              <span>Разместите свой список в</span>
            </h2>
            <ul className="w-full flex justify-center items-center gap-6">
              <li>
                <a
                  className="hover:text-gray-900 transition-colors duration-200 text-2xl"
                  href="/"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  className="hover:text-gray-900 transition-colors duration-200 text-2xl"
                  href="/"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  className="hover:text-gray-900 transition-colors duration-200 font-semibold text-2xl"
                  href="/"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </li>
        </ul>
        <div
          className="flex w-full justify-between
        pt-5 pb-4 border-t bg-top border-black"
        >
          <ul
            className="flex w-full justify-center items-center space-y-2
          lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row"
          >
            <li>
              <a
                href="/"
                className="text-sm text-gray-400
                transition-colors duration-200 hover:text-gray-800 font-semibold"
              >
                условия предоставления услуг
              </a>
            </li>
            <li>
              <a
                href="/"
                className="text-sm text-gray-400 transition-colors
                duration-200 hover:text-gray-800 font-semibold"
              >
                политика конфиденциальности
              </a>
            </li>
            <li>
              <a
                href="/"
                className="text-sm text-gray-400 transition-colors
                duration-200 hover:text-gray-800 font-semibold"
              >
                Политика использования файлов cookie
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
