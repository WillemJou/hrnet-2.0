import './form.css'
import { useState } from 'react'
import { Agenda } from '../agenda'
import { DropdownMenu } from '../dropdownMenu/dropdownMenu'
import { addEmployee } from '../../utils/storage'
const americaStatesList = require('../../data/state.json')
const departmentList = require('../../data/department.json')

export function Form() {
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
  const [newEmployee, setNewEmployee] = useState(initialState)

  function handleChange(e) {
    const { id, value } = e.target
    setNewEmployee((prevState) => ({
      ...prevState,
      [id]: value,
    }))
  }

  function handleSubmit(e) {
    setNewEmployee(initialState) //reset inputs
    addEmployee(newEmployee) //add employee to the database
    //toggleDisplayModal && toggleDisplayModal(true) //show modal
    e.preventDefault()
  }

  return (
    <>
      <form onSubmit={handleSubmit} method="post">
        <div className="main-info-container">
          <div className="name-container">
            <label htmlFor="firstName">First Name</label>
            <input
              onChange={(e) => handleChange(e)}
              value={newEmployee.firstName}
              type="text"
              id="firstName"
            />
            <label htmlFor="lastName">Last Name</label>
            <input
              value={newEmployee.lastName}
              onChange={(e) => handleChange(e)}
              type="text"
              id="lastName"
            />
          </div>
          <div className="date-container">
            <Agenda
              htmlFor="birthDate"
              id="birthDate"
              title="Date of Birth"
              value={newEmployee.birthDate}
              onChange={(e) => handleChange}
            />
            <Agenda
              htmlFor="startDate"
              type="text"
              id="startDate"
              title="Start Date"
              value={newEmployee.startDate}
              onChange={(e) => handleChange}
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
                onChange={(e) => handleChange(e)}
              />
              <label htmlFor="city">City</label>
              <input
                id="city"
                type="text"
                value={newEmployee.city}
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className="state-container">
              <label htmlFor="USState">State</label>
              <DropdownMenu
                name="state"
                id="USState"
                list={americaStatesList}
                onChange={handleChange}
                value={newEmployee.USState}
              />
              <label htmlFor="ZipCode">ZIP Code</label>
              <input
                type="number"
                id="ZipCode"
                value={newEmployee.ZipCode}
                onChange={(e) => handleChange(e)}
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
              onChange={(e) => handleChange}
            />
          </div>
        </div>
      </form>
      <div className="btn-container">
        <button onClick={handleSubmit} type="submit">
          Save
        </button>
      </div>
    </>
  )
}
