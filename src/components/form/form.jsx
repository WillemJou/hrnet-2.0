import './form.css'
import { useContext } from 'react'
import { Agenda } from '../agenda'
import { DropdownMenu } from '../dropdownMenu/dropdownMenu'
import { EmployeeContext } from '../../context/EmployeesContext'
import { Modal } from 'test2-react-simple-modal'
import 'test2-react-simple-modal/dist/index.css'
import { FormContext } from '../../context/FormContext'
const americaStatesList = require('../../data/state.json')
const departmentList = require('../../data/department.json')
const store = JSON.parse(localStorage.getItem('employees'))
export const EMPLOYEES = store ? store : []

export function Form() {
  const [newEmployee, updateState] = useContext(EmployeeContext)
  const [toggle, handleToggle] = useContext(FormContext)

  function handleSubmit(e) {
    updateState({ target: e.target })
    localStorage.setItem('employees', JSON.stringify(EMPLOYEES))
    EMPLOYEES.push(newEmployee)

    console.log(EMPLOYEES)
    handleToggle(true)
    e.preventDefault()
  }
  return (
    <>
      <form onSubmit={handleSubmit} method="post">
        <div className="main-info-container">
          <div className="name-container">
            <label htmlFor="firstName">First Name</label>
            <input
              onChange={(e) => updateState(e)}
              value={newEmployee.firstName}
              type="text"
              id="firstName"
            />
            <label htmlFor="lastName">Last Name</label>
            <input
              value={newEmployee.lastName}
              onChange={(e) => updateState(e)}
              type="text"
              id="lastName"
            />
          </div>
          <div className="date-container">
            <Agenda
              htmlFor="birthDate"
              id="birthDate"
              idValue="birthDate"
              title="Date of Birth"
              type="date"
              value={newEmployee.birthDate}
              onChange={updateState}
            />
            <Agenda
              htmlFor="startDate"
              id="startDate"
              idValue="startDate"
              title="Start Date"
              type="date"
              value={newEmployee.startDate}
              onChange={updateState}
            />
          </div>
        </div>
        <fieldset className="main-adress-container">
          <legend>Adress</legend>
          <div className="input-adress-container">
            <div className="first-adress-container">
              <label htmlFor="street">Street</label>
              <input
                id="street"
                type="text"
                value={newEmployee.street}
                onChange={(e) => updateState(e)}
              />
              <label htmlFor="city">City</label>
              <input
                id="city"
                type="text"
                value={newEmployee.city}
                onChange={(e) => updateState(e)}
              />
            </div>
            <div className="state-container">
              <label htmlFor="USState">State</label>
              <DropdownMenu
                name="state"
                id="USState"
                list={americaStatesList}
                onChange={updateState}
                value={newEmployee.USState}
              />
              <label htmlFor="ZipCode">ZIP Code</label>
              <input
                type="number"
                id="ZipCode"
                value={newEmployee.ZipCode}
                onChange={(e) => updateState(e)}
              />
            </div>
          </div>
        </fieldset>
        <div className="department-container">
          <div className="align-label-container">
            <label htmlFor="department">Department</label>
            <DropdownMenu
              name="department"
              id="department"
              list={departmentList}
              value={newEmployee.department}
              onChange={updateState}
            />
          </div>
        </div>
      </form>
      <div className="btn-container">
        <button onClick={(e) => handleSubmit(e)}>Save</button>
      </div>
      <Modal
        title={'Succès'}
        subTitle={'Un nouvel employé à été crée'}
        content={'Bienvenue à ' + newEmployee.firstName}
        isOpen={toggle}
        onClose={() => {
          handleToggle(false)
          return true
        }}
      />
    </>
  )
}
