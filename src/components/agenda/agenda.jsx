import { DayPicker } from 'react-day-picker'
import 'react-day-picker/dist/style.css'
import './agenda.css'
import { useInput } from 'react-day-picker'
import { useStateToggle } from '../../hooks'

export function Agenda({ id, value, onChange }) {
  const { toggle, handleToggle } = useStateToggle()

  /**
   * `handleOnSelect` is a function that takes an event as an argument, and if the event is not null, it
   * calls the `onChange` function, passing in an object with the `id` and `value` properties
   * @returns The date selected by the user.
   */
  const handleOnSelect = (e) => {
    if (!e) return
    onChange({
      target: {
        id: id,
        value: e.toLocaleDateString(),
      },
    })
    return handleToggle()
  }

  const openWithKey = (e) => {
    if (e.key === 'Enter') {
      return handleToggle()
    }
  }

  // custom hook by daypicker library for inputs
  const { inputProps, dayPickerProps } = useInput({
    format: 'PP',
    placeholder: '',
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
      {toggle ? (
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
