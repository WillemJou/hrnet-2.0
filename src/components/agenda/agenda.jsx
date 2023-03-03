import { useState } from 'react'
import { DayPicker } from 'react-day-picker'
import 'react-day-picker/dist/style.css'
import './agenda.css'
import { useInput } from 'react-day-picker'

export function Agenda({ id, value, onChange }) {
  const [isopen, setIsOpen] = useState(false)
  const handleOnSelect = (e) => {
    onChange({
      target: {
        id: id,
        value: e.toLocaleDateString(),
      },
    })
    return handleToggle()
  }
  const handleToggle = () => {
    setIsOpen(!isopen)
  }
  const openWithKey = (e) => {
    if (e.key === 'Enter') {
      return handleToggle()
    }
  }
  const { inputProps, dayPickerProps } = useInput({
    format: 'PP',
    placeholder: null,
    required: true,
  })
  return (
    <>
      <input
        value={value}
        onClick={handleToggle}
        onKeyDown={openWithKey}
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
