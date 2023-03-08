import { Agenda } from '../agenda/agenda'
import { DropdownMenu } from '../dropdownMenu/dropdownMenu'
import './form.css'

// Labelling component generating different inputs
export function Labeling({ label, onChange, id, type, value, list, error }) {
  // switch function to choose form inputs component depending on type inputs
  const switchTypeInput = () => {
    switch (type) {
      case 'select':
        return DropdownMenu({ id, label, value, onChange, list })
      case 'date':
        return Agenda({ id, label, value, onChange })
      case 'text':
        return FieldInput({ type, id, value, onChange })
      case 'number':
        return FieldInput({ type, id, value, onChange })
      default:
        break
    }
  }
  return (
    <>
      <label htmlFor={id}>{label}</label>
      {/* set the switch function*/}
      {switchTypeInput()}
      {error && value === '' ? (
        <span className="errorMsg"> this field is require</span>
      ) : null}
    </>
  )
}
// simple component for text or number inputs
const FieldInput = (props) => {
  return (
    <input
      id={props.id}
      type={props.type}
      value={props.value}
      onChange={props.onChange}
    />
  )
}
