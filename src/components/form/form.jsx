import './form.css'
import { useStateEmployee, useStateError, useStateToggle } from '../../hooks'
import { EMPLOYEES, initialState, storage, inputChange } from '../../utils'
import { Modal } from 'simple-react-modal-wj'
import { Labeling } from './labeling'
const americaStatesList = require('../../data/state.json')
const departmentList = require('../../data/department.json')

export function Form() {
  const [newEmployee, setNewEmployee] = useStateEmployee()
  const { toggle, handleToggle } = useStateToggle()
  const { error, setError } = useStateError()

  function handleSubmit(e) {
    e.preventDefault()
    const checkInputsValues = Object.values(newEmployee).includes('')
    if (checkInputsValues) {
      setError(true)
    } else {
      storage(newEmployee)
      setNewEmployee(initialState)
      handleToggle(true)
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit} method="post">
        <div className="main-info-container">
          <div className="name-container">
            <Labeling
              label="First Name"
              id="firstName"
              onChange={(e) => inputChange(e, setNewEmployee)}
              type="text"
              value={newEmployee.firstName}
              error={error}
            />
            <Labeling
              label="Last Name"
              id="lastName"
              onChange={(e) => inputChange(e, setNewEmployee)}
              type="text"
              value={newEmployee.lastName}
              error={error}
            />
          </div>
          <div className="date-container">
            <Labeling
              label="Date of Birth"
              id="birthDate"
              type="date"
              onChange={(e) => inputChange(e, setNewEmployee)}
              value={newEmployee.birthDate}
              error={error}
            />
            <Labeling
              label="Start Date"
              id="startDate"
              type="date"
              onChange={(e) => inputChange(e, setNewEmployee)}
              value={newEmployee.startDate}
              error={error}
            />
          </div>
        </div>
        <fieldset className="main-adress-container">
          <legend>Adress</legend>
          <div className="input-adress-container">
            <div className="first-adress-container">
              <Labeling
                label="Street"
                id="street"
                onChange={(e) => inputChange(e, setNewEmployee)}
                type="text"
                value={newEmployee.street}
                error={error}
              />
              <Labeling
                label="City"
                id="city"
                onChange={(e) => inputChange(e, setNewEmployee)}
                type="text"
                value={newEmployee.city}
                error={error}
              />
            </div>
            <div className="state-container">
              <Labeling
                label="State"
                id="USState"
                type="select"
                list={americaStatesList}
                onChange={(e) => inputChange(e, setNewEmployee)}
                value={newEmployee.USState}
              />
              <Labeling
                label="Zip Code"
                id="ZipCode"
                onChange={(e) => inputChange(e, setNewEmployee)}
                type="number"
                value={newEmployee.ZipCode}
                error={error}
              />
            </div>
          </div>
        </fieldset>
        <div className="department-container">
          <div className="align-label-container">
            <Labeling
              label="Department"
              id="department"
              type="select"
              list={departmentList}
              onChange={(e) => inputChange(e, setNewEmployee)}
              value={newEmployee.department}
            />
          </div>
        </div>
      </form>
      <div className="btn-container">
        <button className="save-btn" onClick={(e) => handleSubmit(e)}>
          Save
        </button>
      </div>

      <Modal
        title={'Succès'}
        subTitle={'Un nouvel employé à été crée'}
        content={
          EMPLOYEES != null
            ? 'Bienvenue à ' + EMPLOYEES.slice(-1).pop().firstName + ' 👍'
            : null
        }
        isOpen={toggle}
        onClose={() => {
          handleToggle(false)
          return true
        }}
      />
    </>
  )
}
