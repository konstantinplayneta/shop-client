'use client'

import { checkUserAuthFx } from '@/app/api/auth'
import { useRouter } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import { setUser } from '../context/user'

const useRedirectByUserCheck = (isAuthPage = false) => {
  const [shouldLoadContent, setShouldLoadContent] = useState(false)
  const [loading, setLoading] = useState(true)
  const router = useRouter()
  const shouldCheckAuth = useRef(true)

  useEffect(() => {
    if (shouldCheckAuth.current) {
      shouldCheckAuth.current = false
      checkUser()
    }
  }, [])

  const checkUser = async () => {
    setLoading(true)
    const user = await checkUserAuthFx('/users/login-check')

    if (isAuthPage) {
      setLoading(false)
      if (!user) {
        setShouldLoadContent(true)
        return
      } else {
        setUser(user)
        setShouldLoadContent(true)
      }

      return
    }

    if (user) {
      setLoading(false)
      setUser(user)
      setShouldLoadContent(true)
      return
    }

    router.push('/login')
  }

  return { shouldLoadContent, loading }
}

export default useRedirectByUserCheck
