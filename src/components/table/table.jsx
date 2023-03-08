import Table from 'react-table-lite'
import './table.css'
import { EMPLOYEES } from '../../utils'
import { useState } from 'react'

export function TableComponent() {
  const [currentPage, setCurrentPage] = useState(1)
  const [filters, setFilters] = useState(EMPLOYEES)

  /**
   * The function takes in an event, and then filters the employees based on the input value
   * @returns the filteredNewEmployees array.
   */
  const handleSearch = (e) => {
    let target = e.target.value
    console.log(filters)
    if (target === '') return setFilters(EMPLOYEES)
    const filteredNewEmployees = EMPLOYEES.filter((EMPLOYEE) => {
      return (
        EMPLOYEE.firstName.toLowerCase().includes(target.toLowerCase()) ||
        EMPLOYEE.lastName.toLowerCase().includes(target.toLowerCase()) ||
        EMPLOYEE.birthDate.includes(target.toLowerCase()) ||
        EMPLOYEE.department.toLowerCase().includes(target.toLowerCase()) ||
        EMPLOYEE.startDate.includes(target.toLowerCase()) ||
        EMPLOYEE.street.toLowerCase().includes(target.toLowerCase()) ||
        EMPLOYEE.city.toLowerCase().includes(target.toLowerCase()) ||
        EMPLOYEE.USState.toLowerCase().includes(target.toLowerCase()) ||
        EMPLOYEE.ZipCode.includes(target.toLowerCase())
      )
    })
    if (filteredNewEmployees.length) setFilters(filteredNewEmployees)
  }

  if (EMPLOYEES === null) {
    return 'No employee yet'
  }
  return (
    <div>
      <input
        className="search-form"
        placeholder="Searching..."
        onChange={handleSearch}
        type="text"
      />
      {filters.length && (
        <Table
          // all table props for generate table with custom parameters (see react-table-lite on NPM)
          header={[
            'firstName',
            'lastName',
            'birthDate',
            'startDate',
            'street',
            'city',
            'USState',
            'ZipCode',
            'department',
          ]}
          sortBy={[
            'firstName',
            'lastName',
            'birthDate',
            'startDate',
            'street',
            'city',
            'USState',
            'ZipCode',
            'department',
          ]}
          data={filters.slice((currentPage - 1) * 5, currentPage * 5)}
          showPagination={true}
          currentPage={currentPage}
          range={100}
          limit={5}
          totalPages={Math.ceil(filters.length / 5)}
          onPaginate={(current) => setCurrentPage(current)}
        />
      )}
    </div>
  )
}
