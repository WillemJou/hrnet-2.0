import { useState } from 'react'
import { DayPicker } from 'react-day-picker'
import 'react-day-picker/dist/style.css'
import './agenda.css'
import { useInput } from 'react-day-picker'

export function Agenda({ htmlFor, id, idValue, title, value, onChange }) {
  const [isopen, setIsOpen] = useState(false)
  const handleOnSelect = (e) => {
    onChange({
      target: {
        id: idValue,
        value: e.toLocaleDateString(),
      },
    })
    return handleOpen()
  }
  const handleOpen = () => {
    setIsOpen(!isopen)
  }
  const { inputProps, dayPickerProps } = useInput({
    format: 'PP',
    placeholder: null,
    required: true,
  })
  return (
    <>
      <label htmlFor={htmlFor}>{title}</label>
      <input
        value={value}
        onClick={handleOpen}
        type="text"
        id={id}
        {...inputProps}
      />
      {isopen ? (
        <div className="agenda-container">
          <DayPicker
            onSelect={handleOnSelect}
            mode="single"
            selected={value}
            {...dayPickerProps}
          />
        </div>
      ) : null}
    </>
  )
}
