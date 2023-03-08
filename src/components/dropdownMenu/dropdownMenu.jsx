import { useStateToggle } from '../../hooks'

export function DropdownMenu(props) {
  const { handleToggle } = useStateToggle()
  return (
    <>
      <select
        name={props.label}
        id={props.id}
        onChange={props.onChange}
        onClick={handleToggle}
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
