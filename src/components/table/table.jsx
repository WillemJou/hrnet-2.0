import Table from 'react-table-lite'
import './table.css'
import { EMPLOYEES } from '../../utils'

export function TableComponent() {
  if (EMPLOYEES === null) {
    return 'No employee yet'
  }
  return (
    <Table
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
      searchable={true}
      searchBy={[
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
      showPagination={true}
      currentPageNumber={1}
      range={5}
      data={EMPLOYEES}
    />
  )
}
