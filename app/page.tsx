'use client'

import Footer from './components/Footer'
import Header from './components/Header'
import Main from './components/Main'
import useRedirectByUserCheck from './hooks/useRedirectByUserCheck'

export default function Home() {
  console.log('render')
  const { shouldLoadContent } = useRedirectByUserCheck()

  return (
    <div>
      {shouldLoadContent && (
        <div>
          <Header />
          <Main />
          <Footer />
        </div>
      )}
    </div>
  )
}
