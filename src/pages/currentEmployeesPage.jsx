import '../index.css'
import './currentEmployees.css'
import { Link } from 'react-router-dom'
import { TableComponent } from '../components/table/table'

export function CurrentEmployeesPage() {
  return (
    <>
      <Link to="/current-employees">
        <h1 className="main-title">Current Employees</h1>
      </Link>
      <div className="table-container">
        <TableComponent />
      </div>
      <Link className="link" to="/">
        Home
      </Link>
    </>
  )
}
