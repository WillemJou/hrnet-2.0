import { createContext, useState } from 'react'

export const EmployeeContext = createContext()

export const EmployeeProvider = (props) => {
  const [newEmployee, setNewEmployee] = useState({
    firstName: '',
    lastName: '',
    birthDate: '',
    startDate: '',
    street: '',
    city: '',
    USState: '',
    ZipCode: '',
    department: '',
  })
  const updateState = (e) => {
    const { id, value } = e.target
    setNewEmployee((prevState) => ({
      ...prevState,
      [id]: value,
    }))
  }
  return (
    <EmployeeContext.Provider value={[newEmployee, updateState]}>
      {props.children}
    </EmployeeContext.Provider>
  )
}
