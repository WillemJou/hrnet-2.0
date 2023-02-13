
const localStorageData = JSON.parse(localStorage.getItem('employees'))
export const EMPLOYEES = localStorageData ? localStorageData : []
export function addEmployee(employee) {
  EMPLOYEES.push(employee)
  localStorage.setItem('employees', JSON.stringify(EMPLOYEES))
}
  