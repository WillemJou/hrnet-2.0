import { useState } from 'react'

// Custom hook to generate and update the new employee's object
export function useStateEmployee() {
  const [newEmployee, setNewEmployee] = useState({
    firstName: '',
    lastName: '',
    birthDate: '',
    startDate: '',
    street: '',
    city: '',
    USState: 'AL',
    ZipCode: '',
    department: 'Sales',
  })
  return [newEmployee, setNewEmployee]
}

// Custom hook to switch beetween two state (open/close hook)
export function useStateToggle() {
  const [toggle, setToggle] = useState(false)
  const handleToggle = () => {
    setToggle(!toggle)
  }
  return { toggle, handleToggle }
}

// error State custom hook
export function useStateError() {
  const [error, setError] = useState(false)
  return { error, setError }
}
