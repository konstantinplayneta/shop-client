import React, { useState, useRef } from 'react'

const inputStyle = { display: 'none' } // assigned to input makes it invisible

const InputFileButton = ({ children, callback }) => {
  const inputRef = React.useRef(null) // creates reference (to the invisible input)
  const [file, setFile] = React.useState(null)

  const handleFileChange = (e) => {
    const files = e.target.files
    if (files.length > 0) {
      const file = files[0]
      console.log(file.name)
      setFile(file)
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
