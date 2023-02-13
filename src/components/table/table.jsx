import MaterialReactTable from 'material-react-table'
import { useMemo } from 'react'
import { EMPLOYEES } from '../../utils/storage'

export function Table() {
  const columns = useMemo(
    () => [
      {
        header: 'First Name',
        accessorKey: 'firstName', //simple accessorKey pointing to flat data
      },
      {
        header: 'Last Name',
        accessorKey: 'lastName',
      },
      {
        header: 'Date Of Birth',
        accessorKey: 'dateOfBirth',
      },
      {
        header: 'Start Date',
        accessorKey: 'startDate',
      },
      {
        header: 'Street',
        accessorKey: 'street',
      },
      {
        header: 'City',
        accessorKey: 'city',
      },
      {
        header: 'State',
        accessorKey: 'USState',
      },
      {
        header: 'ZIP Code',
        accessorKey: 'ZIPCode',
      },
      {
        header: 'Department',
        accessorKey: 'department  ',
      },
    ],
    []
  )

  return (
    <MaterialReactTable
      columns={columns}
      data={EMPLOYEES}
      muiTablePaginationProps={{
        rowsPerPageOptions: [10, 50, 100],
      }}
    />
  )
}
