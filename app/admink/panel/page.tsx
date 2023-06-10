'use client'
import useRedirectByAdmin from '@/app/hooks/useRedirectByAdmin'

const Panel = () => {
  const { shouldLoadContent } = useRedirectByAdmin()

  return (
    <div>
      {shouldLoadContent && (
        <div>тут будем удалять добавлять инфу и тд админка короче</div>
      )}
    </div>
  )
}

export default Panel
