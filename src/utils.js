import data from './data/employees.json'
console.log(data)
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
const mockedData = data
export const EMPLOYEES = JSON.parse(localStorage.getItem('employees'))
  ? mockedData && JSON.parse(localStorage.getItem('employees'))
  : mockedData
