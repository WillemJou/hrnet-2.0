import data from './data/employees.json'

//mocked data to populate the table
const mockedData = data

//constant to refresh new employee object
export const initialState = {
  firstName: '',
  lastName: '',
  birthDate: '',
  startDate: '',
  street: '',
  city: '',
  USState: 'AL',
  ZipCode: '',
  department: 'Sales',
}

/**
 * get id and update value of inputs
 * @param { SyntheticEvent } e
 * @param { Setter } setNewEmployee
 * @return { * }
 */
export const inputChange = (e, setNewEmployee) => {
  const { id, value } = e.target
  setNewEmployee((prevState) => ({
    ...prevState,
    [id]: value,
  }))
}

/**
 * storing new employee inside the Local Storage
 * @param { Object } newEmployee
 * @return { Array }
 */
export const storage = (newEmployee) => {
  localStorage.setItem('employees', JSON.stringify(EMPLOYEES))
  EMPLOYEES.push(newEmployee)
}

// get Local Storage values and add to the data (or return only the data)
export const EMPLOYEES = JSON.parse(localStorage.getItem('employees'))
  ? mockedData && JSON.parse(localStorage.getItem('employees'))
  : mockedData
