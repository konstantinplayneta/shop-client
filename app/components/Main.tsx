import Image from 'next/image'

export default function Main() {
  return (
    <section className="text-gray-600 body-font">
      <form action="">
        <div className="max-w-7xl mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div
            className="lg:flex-grow md:w-1/2 max-w-md md:ml-24 pt-6
        flex flex-col md:items-start mb-40 items-center text-center"
          >
            <h1 className="mb-5 sm:text-6xl text-5xl items-center Avenir xl:w-2/2 text-gray-900">
              Мы дарим подарки
            </h1>
            <p className="mb-4 xl:w-2/2 text-gray-600 text-lg">
              получать подароки всегда приятно, создай свой список и получи то о
              чем давно мечтаешь
            </p>
          </div>
          <div className="xl:mr-44 sm:mr-0 sm:mb-28 mb-0 lg:mb-0 mr-48 md:pl-10">
            <Image
              width={200}
              height={200}
              className="w-80 md:ml-1 ml-24"
              alt="iPhone-12"
              src="/img/gerl.jpg"
            />
          </div>
        </div>
        <section className="mx-auto">
          <div className="container px-5 mx-auto lg:px-24 ">
            <div className="flex flex-col w-full justify-center items-center mb-4 text-left lg:text-center">
              <h1 className="mb-8 text-2xl Avenir font-semibold text-black">
                Trusted by top-tier product companies
              </h1>
            </div>
            <div className="grid grid-cols-2 gap-16 mb-16 text-center lg:grid-cols-4">
              <div className="flex items-center justify-center">
                <Image
                  width={200}
                  height={200}
                  src="/img/gerl.jpg"
                  alt="Google Logo"
                  className="block object-contain h-16 greyC"
                />
              </div>
              <div className="flex items-center justify-center">
                <Image
                  width={200}
                  height={200}
                  src="/img/gerl.jpg"
                  alt="Shopify Logo"
                  className="block object-contain h-16 greyC"
                />
              </div>
              <div className="flex items-center justify-center">
                <Image
                  width={200}
                  height={200}
                  src="/img/gerl.jpg"
                  alt="Cloudflare Logo"
                  className="block object-contain h-16 greyC"
                />
              </div>
              <div className="flex items-center justify-center">
                <Image
                  width={200}
                  height={200}
                  src="/img/gerl.jpg"
                  alt="Paypal Logo"
                  className="block object-contain h-16 greyC"
                />
              </div>
            </div>
          </div>
        </section>
        <div className="grr max-w-7xl pt-20 mx-auto text-center">
          <h1 className="mb-8 text-6xl Avenir font-semibold text-gray-900">
            Less code, less effort.
          </h1>
          <h1 className="mb-8 text-2xl Avenir font-semibold text-gray-600 text-center">
            Minify your CSS with Tailwinds built in PostCSS support.
          </h1>
          <div className="container flex flex-col items-center justify-center mx-auto rounded-lg ">
            <Image
              width={200}
              height={200}
              className="object-cover object-center w-3/4 mb-10 g327 border rounded-lg shadow-md"
              alt="Placeholder Image"
              src="/img/gerl.jpg"
            />
          </div>
        </div>
        <section className="relative">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
            <div className="py-24 md:py-36">
              <h1 className="mb-5 text-6xl Avenir font-semibold text-gray-900">
                Гарантия приватности
              </h1>
              <h1 className="mb-9 text-2xl font-semibold text-gray-600">
                Ваши данные надежно защищены, а адрес не сохраняется
              </h1>
              <a
                className="inline-flex items-center px-14 py-3 mt-2
              ml-2 font-medium text-gray-600 transition duration-500
              ease-in-out transform bg-transparent border rounded-lg bg-gray-900
               hover:text-gray-900 hover:border-gray-900"
                href="/"
              >
                <span className="justify-center">Создать список</span>
              </a>
            </div>
          </div>
        </section>
      </form>
    </section>
  )
}
