import { useState } from 'react'

// ==============+>>>>>>>>>>>>>>>> fichier fonctions + hooks pour éviter répétition du code

export function DropdownMenu(props) {
  const [isOpen, setIsOpen] = useState(false)
  const handleOpen = () => {
    setIsOpen(!isOpen)
  }
  return (
    <>
      <select
        name={props.name}
        id={props.id}
        value={props.value}
        onChange={props.onChange}
        onClick={handleOpen}
      >
        {props.list.map((data, index) => (
          <option key={index} value={data.abbreviation}>
            {data.name || data.length}
          </option>
        ))}
      </select>
    </>
  )
}
