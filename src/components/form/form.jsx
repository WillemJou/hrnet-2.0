import './form.css'
import { useContext } from 'react'
import { Agenda } from '../agenda/agenda'
import { EmployeeContext } from '../../context/EmployeesContext'
import { Modal } from 'simple-react-modal-wj'
import { Labeling } from './labeling'
const americaStatesList = require('../../data/state.json')
const departmentList = require('../../data/department.json')

//////////// code poubelle
const initialState = {
  firstName: '',
  lastName: '',
  birthDate: '',
  startDate: '',
  street: '',
  city: '',
  USState: '',
  ZipCode: '',
  department: '',
}
export const EMPLOYEES = JSON.parse(localStorage.getItem('employees'))
  ? JSON.parse(localStorage.getItem('employees'))
  : [initialState]
////////////////////

export function Form(e) {
  const { employee, permission, errors } = useContext(EmployeeContext)
  const [newEmployee, setNewEmployee] = employee
  const [toggle, handleToggle] = permission
  const [error, setError] = errors

  const inputChange = (e) => {
    const { id, value } = e.target
    setNewEmployee((prevState) => ({
      ...prevState,
      [id]: value,
    }))
  }

  const storage = () => {
    localStorage.setItem('employees', JSON.stringify(EMPLOYEES))
    EMPLOYEES.push(newEmployee)
  }

  function handleSubmit(e) {
    e.preventDefault()
    const checkInputsValues = Object.values(newEmployee).every((v) => v === '')
    if (checkInputsValues) {
      setError(true)
    } else {
      storage()
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
              onChange={inputChange}
              type="text"
              value={newEmployee.firstName}
            />
            <Labeling
              label="Last Name"
              id="lastName"
              onChange={inputChange}
              type="text"
              value={newEmployee.lastName}
            />
          </div>
          <div className="date-container">
            <Labeling
              label="Date of Birth"
              id="birthDate"
              type="date"
              onChange={inputChange}
              value={newEmployee.birthDate}
              error={error}
            />
            <Agenda
              htmlFor="startDate"
              id="startDate"
              idValue="startDate"
              title="Start Date"
              type="date"
              value={newEmployee.startDate}
              onChange={inputChange}
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
                onChange={inputChange}
                type="text"
                value={newEmployee.street}
              />

              <Labeling
                label="City"
                id="city"
                onChange={inputChange}
                type="text"
                value={newEmployee.city}
              />
            </div>
            <div className="state-container">
              <Labeling
                label="State"
                id="USState"
                type="select"
                list={americaStatesList}
                onChange={inputChange}
                value={newEmployee.USState}
                error={error}
              />
              <Labeling
                label="Zip Code"
                id="ZipCode"
                onChange={inputChange}
                type="number"
                value={newEmployee.ZipCode}
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
              onChange={inputChange}
              value={newEmployee.department}
              error={error}
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
        content={'Bienvenue à ' + EMPLOYEES.slice(-1).pop().firstName + ' 👍'}
        isOpen={toggle}
        onClose={() => {
          handleToggle(false)
          return true
        }}
      />
    </>
  )
}
