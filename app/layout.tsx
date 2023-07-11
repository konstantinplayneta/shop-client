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
      </head>
      <body>
        <ToastProvider>{children}</ToastProvider>
      </body>
    </html>
  )
}
