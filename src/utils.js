export const initialState = {
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

export const inputChange = (e, setNewEmployee) => {
  const { id, value } = e.target
  setNewEmployee((prevState) => ({
    ...prevState,
    [id]: value,
  }))
}

export const storage = (newEmployee) => {
  localStorage.setItem('employees', JSON.stringify(EMPLOYEES))
  EMPLOYEES.push(newEmployee)
}
export const EMPLOYEES = JSON.parse(localStorage.getItem('employees'))
  ? JSON.parse(localStorage.getItem('employees'))
  : null
