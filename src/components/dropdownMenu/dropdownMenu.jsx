import { useState } from 'react'

export function DropdownMenu(props) {
  const [isOpen, setIsOpen] = useState(false)
  const handleOpen = () => {
    setIsOpen(!isOpen)
  }
  return (
    <>
      <select
        name={props.label}
        id={props.id}
        onChange={props.onChange}
        onClick={handleOpen}
      >
        {props.list.map((data, index) => (
          <option key={index} value={data.abbreviation}>
            {data.name}
          </option>
        ))}
      </select>
    </>
  )
}
