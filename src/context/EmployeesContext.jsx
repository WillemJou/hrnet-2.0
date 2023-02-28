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
  const [toggle, setToggle] = useState(false)
  const handleToggle = () => {
    setToggle(!toggle)
  }
  const [error, setError] = useState(false)
  return (
    <EmployeeContext.Provider
      value={{
        employee: [newEmployee, setNewEmployee],
        permission: [toggle, handleToggle],
        errors: [error, setError],
      }}
    >
      {props.children}
    </EmployeeContext.Provider>
  )
}
