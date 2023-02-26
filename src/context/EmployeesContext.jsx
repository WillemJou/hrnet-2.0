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
  return (
    <EmployeeContext.Provider value={[newEmployee, setNewEmployee]}>
      {props.children}
    </EmployeeContext.Provider>
  )
}
