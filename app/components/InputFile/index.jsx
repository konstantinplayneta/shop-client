'use client'

import React, { useState, useRef } from 'react'
import { uploadImageFx } from '../../api/images'
import { updateUserFx } from '@/app/api/user'
import { useStore } from 'effector-react'
import { $user, setUser } from '@/app/context/user'

const inputStyle = { display: 'none' }

const InputFileButton = ({ children, bg }) => {
  const inputRef = React.useRef(null)
  const [file, setFile] = React.useState(null)
  const user = useStore($user)

  const handleFileChange = async (e) => {
    const files = e.target.files

    if (files.length > 0) {
      const file = files[0]
      setFile(file)

      var form = new FormData()
      form.append('file', files[0])
      form.append('upload_preset', 'mjdoasei')

      const image = await uploadImageFx(form)

      if (image?.public_id) {
        if (bg) {
          await updateUserFx({
            url: `/users/update`,
            username: user.username,
            email: user.email,
            background: image?.url,
          }).then((data) => {
            if (data) {
              setUser({ ...user, background: image?.url })
            }
          })
        } else {
          await updateUserFx({
            url: `/users/update`,
            username: user.username,
            email: user.email,
            image: image?.public_id,
          }).then((data) => {
            if (data) {
              setUser({ ...user, image: image?.url })
            }
          })
        }
      }
    } else {
      setFile(null)
    }
  }

  const handleButtonClick = () => {
    inputRef.current?.click() // simulates clicking on file input element and opens dialog box
  }

  return (
    <>
      <input
        ref={inputRef}
        style={inputStyle}
        type="file"
        onChange={handleFileChange}
      />
      <button onClick={handleButtonClick}>{children}</button>
    </>
  )
}

export default InputFileButton
