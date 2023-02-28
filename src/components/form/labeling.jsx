import { Agenda } from '../agenda/agenda'
import { DropdownMenu } from '../dropdownMenu/dropdownMenu'
import './form.css'

export function Labeling({ label, onChange, id, type, value, list, error }) {
  const switchTypeInput = () => {
    switch (type) {
      case 'select':
        return DropdownMenu({ id, label, value, onChange, list })
      case 'date':
        return Agenda({ id, label, value, onChange })
      case 'text':
        return FieldInput({ id, value, onChange })

      default:
        break
    }
  }

  return (
    <>
      <label htmlFor={id}>{label}</label>
      {error && value === '' ? (
        <span className="errorMsg"> is required</span>
      ) : null}
      {switchTypeInput()}
    </>
  )
}

const FieldInput = (props) => {
  return <input id={props.id} value={props.value} onChange={props.onChange} />
}
