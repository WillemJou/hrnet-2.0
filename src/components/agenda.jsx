import { useState } from 'react'
import { DayPicker } from 'react-day-picker'
import 'react-day-picker/dist/style.css'
import { useInput } from 'react-day-picker'

export function Agenda({ htmlFor, id, title, value, handleChange }) {
  const [isopen, setIsOpen] = useState(false)
  const handleOpen = () => {
    setIsOpen(!isopen)
  }
  const [selected, setSelected] = useState(new Date())
  const { inputProps, dayPickerProps } = useInput({
    defaultSelected: new Date(),
    format: 'PP',
    placeholder: null,
    required: true,
  })
  return (
    <>
      <label htmlFor={htmlFor}>{title}</label>
      <input
        onChange={(e) => handleChange(e)}
        value={value}
        onClick={handleOpen}
        type="text"
        id={id}
        {...inputProps}
      />
      {isopen ? (
        <DayPicker
          mode="single"
          selected={selected}
          onSelect={setSelected}
          {...dayPickerProps}
        />
      ) : null}
    </>
  )
}
