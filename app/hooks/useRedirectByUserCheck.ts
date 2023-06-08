'use client'

import { checkUserAuthFx } from '@/app/api/auth'
import { useRouter } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import { setUser } from '../context/user'

const useRedirectByUserCheck = (isAuthPage = false) => {
  const [shouldLoadContent, setShouldLoadContent] = useState(false)
  const router = useRouter()
  const shouldCheckAuth = useRef(true)

  useEffect(() => {
    if (shouldCheckAuth.current) {
      shouldCheckAuth.current = false
      checkUser()
    }
  }, [])

  const checkUser = async () => {
    const user = await checkUserAuthFx('/users/login-check')
    console.log('user', user)

    if (isAuthPage) {
      if (!user) {
        setShouldLoadContent(true)
        return
      }

      return
    }

    if (user) {
      setUser(user)
      setShouldLoadContent(true)
      return
    }

    router.push('/login')
  }

  return { shouldLoadContent }
}

export default useRedirectByUserCheck
