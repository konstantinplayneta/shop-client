'use client'
import { useForm } from 'react-hook-form'
import Header from '../components/Header'
import useRedirectByUserCheck from '../hooks/useRedirectByUserCheck'
import { toast } from 'react-toastify'

export default function Contact() {
  const { register, handleSubmit, reset } = useForm()
  const { shouldLoadContent, loading } = useRedirectByUserCheck(true)

  if (loading) {
    return <div />
  }

  const onSubmit = async () => {
    event.preventDefault()
    const formData = new FormData(event.target)

    formData.append('access_key', '948c0a50-1cbf-4641-aa55-a976956f9da2')

    const object = Object.fromEntries(formData)

    const json = JSON.stringify(object)

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: json,
    })
    const result = await response.json()
    if (result.success) {
      console.log(result)
      toast.success('сообщение успешно отправлено')
      reset()
    }
  }

  return (
    <>
      {shouldLoadContent && (
        <>
          <Header />
          <section className="bg-white pt-20 ">
            <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
              <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 ">
                Связаться с нами
              </h2>
              <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-700 sm:text-xl">
                Возникла техническая проблема? Хотите отправить отзыв или что-то
                еще?
              </p>
              <form
                action="#"
                className="space-y-8"
                onSubmit={handleSubmit(onSubmit)}
              >
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-700"
                  >
                    Ваш email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="shadow-sm bg-gray-50 border 
                text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full
               p-2.5   dark:placeholder-gray-400 border-gray-300
                dark:text-gray-700 dark:focus:ring-primary-500 dark:focus:border-primary-500
                dark:shadow-sm-light"
                    placeholder="name@flowbite.com"
                    {...register('email')}
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="subject"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-700"
                  >
                    Тема
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="block p-3 w-full text-sm text-gray-900 bg-gray-50
              rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500
                 dark:placeholder-gray-400 dark:text-gray-700
                dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                    placeholder="Дайте нам знать, как мы можем вам помочь"
                    required
                    {...register('subject')}
                  />
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="message"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-700"
                  >
                    Ваше обращение
                  </label>
                  <textarea
                    id="message"
                    rows="6"
                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg
              shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500
               dark:text-gray-700
               dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Оставить комментарий..."
                    required
                    {...register('message')}
                  />
                </div>
                <button
                  type="submit"
                  className="flex items-center justify-center
                              flex-none px-3 py-2 md:px-4 md:py-3 border-2 rounded-lg
                              font-medium bg-black text-white hover:bg-gray-800"
                >
                  Отправить
                </button>
              </form>
            </div>
          </section>
        </>
      )}
    </>
  )
}
