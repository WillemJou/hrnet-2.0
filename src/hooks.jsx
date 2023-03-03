import { useState } from 'react'

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

export function useStateToggle(initialValue) {
  const [toggle, setToggle] = useState(initialValue)
  const handleToggle = () => {
    setToggle(!toggle)
  }
  return { toggle, handleToggle }
}

export function useStateError(props) {
  const [error, setError] = useState(false)
  return { error, setError }
}
