import './form.css'
import { useStateEmployee, useStateError, useStateToggle } from '../../hooks'
import { EMPLOYEES, initialState, storage, inputChange } from '../../utils'
import { Modal } from 'simple-react-modal-wj'
import { Labeling } from './labeling'
const americaStatesList = require('../../data/state.json')
const departmentList = require('../../data/department.json')

export function Form() {
  // Custom hook to update new Employee object
  const [newEmployee, setNewEmployee] = useStateEmployee()
  // Open/Close custom hook
  const { toggle, handleToggle } = useStateToggle()
  // Error custom hook
  const { error, setError } = useStateError()
  // boolean to check if some inputs are empty

  const checkInputsValues = Object.values(newEmployee).every((item) => item)

  /**
   * If the input values are not valid, set the error state to true. If the input values are valid, add
   * the new employee to local storage, set the new employee state to the initial state, and deploy the
   * modal with the handleToggle function
   */
  function handleSubmit() {
    if (!checkInputsValues) {
      setError(true)
    } else {
      storage(newEmployee)
      setNewEmployee(initialState)
      handleToggle(true)
      setError(false)
    }
  }
  return (
    <>
      <form method="post">
        <div className="main-info-container">
          <div className="name-container">
            <Labeling
              label="First Name"
              id="firstName"
              //props to update input state value
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
      <button className="save-btn" onClick={(e) => handleSubmit(e)}>
        Save
      </button>
      <Modal
        title={'Succès'}
        subTitle={'Un nouvel employé à été crée'}
        // props to say hello to the last added employee's first name
        content={
          EMPLOYEES != null
            ? 'Bienvenue à ' + EMPLOYEES.slice(-1).pop().firstName + ' 👍'
            : null
        }
        // props to open modal on click
        isOpen={toggle}
        // props to close modal
        onClose={() => {
          handleToggle(false)
          return true
        }}
      />
    </>
  )
}
