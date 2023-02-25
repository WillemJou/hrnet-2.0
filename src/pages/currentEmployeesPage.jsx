import '../index.css'
import './currentEmployees.css'
import { Link } from 'react-router-dom'
import { Table } from '../components/table/table'

export function CurrentEmployeesPage() {
  return (
    <>
      <h1 className="main-title">Current Employees</h1>
      <div className="table-container">
        <Table />
      </div>
      <Link className="link" to="/">
        Home
      </Link>
    </>
  )
}
