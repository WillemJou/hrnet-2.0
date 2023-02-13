import '../index.css'
import { DropdownMenu } from '../components/dropdownMenu/dropdownMenu'
import { Link } from 'react-router-dom'
import { Table } from '../components/table/table'
const lengthForTable = require('../data/length.json')

export function CurrentEmployeesPage() {
  return (
    <>
      <h1>Current Employees</h1>
      <div className="search-container">
        <label htmlFor="tablelength">
          Show
          <DropdownMenu
            name="tablelength"
            id="tablelength"
            list={lengthForTable}
          />
          entries
        </label>
        <label htmlFor="search">
          Search
          <input type="search" />
        </label>
      </div>
      <Table />
      <Link className="link" to="/">
        Home
      </Link>
    </>
  )
}
