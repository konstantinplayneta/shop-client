import { attachLogger } from 'effector-logger'
import './globals.css'
import 'react-toastify/dist/ReactToastify.css'
import ToastProvider from './components/TaoasterProvider'

export const metadata = {
  title: 'GiftShop',
  description: 'Дари подарки',
  icons: {
    icon: '/img/logo_gift.svg',
  },
}

attachLogger()

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://demos.creative-tim.com/notus-js/assets/styles/tailwind.css"
        />
        <link
          rel="stylesheet"
          href="https://demos.creative-tim.com/notus-js/assets/vendor/@fortawesome/fontawesome-free/css/all.min.css"
        />
      </head>
      <body>
        <ToastProvider>{children}</ToastProvider>
      </body>
    </html>
  )
}
