'use client'

import { checkUserAuthFx } from '@/app/api/auth'
import { useRouter } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import { setAdmin } from '../context/admin'

const useRedirectByAdmin = (isAuthPage = false) => {
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
    const user = await checkUserAuthFx('/admin/check-access')

    if (isAuthPage) {
      if (!user) {
        setShouldLoadContent(true)
        return
      }

      return
    }

    if (user) {
      setAdmin(user)
      setShouldLoadContent(true)
      return
    }

    router.push('/admink')
  }

  return { shouldLoadContent }
}

export default useRedirectByAdmin
