import Head from 'next/head'
import Header from './components/Header'
import Footer from './components/Footer'

export default function Contact() {
  return (
    <div className="text-black">
      <Head>
        <title>nine4</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className="flex flex-col justify-center mx-auto mt-52 text-center max-w-2x1">
        <h1 className="text-3xl font-bold tracking-tight text-black md:text-5xl">
          404 – Страница не найдена
        </h1>
        <br />
        <a
          className="w-64 p-1 mx-auto font-bold text-center text-black border border-gray-500 rounded-lg sm:p-4"
          href="/"
        >
          На главную
        </a>
      </div>
      <div className="mt-64" />
      <Footer />
    </div>
  )
}
