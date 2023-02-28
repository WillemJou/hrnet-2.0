import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { EmployeeProvider } from './context/EmployeesContext'
import { CreateEmployeePage } from './pages/createEmployeePage'
import { CurrentEmployeesPage } from './pages/currentEmployeesPage'
import { ErrorPage } from './pages/errorPage/errorPage'

export function App() {
  return (
    <BrowserRouter>
      <EmployeeProvider>
        <Routes>
          <Route path="/" element={<CreateEmployeePage />}></Route>
          <Route
            path="/current-employees"
            element={<CurrentEmployeesPage />}
          ></Route>
          <Route path="*" element={<ErrorPage />}></Route>
        </Routes>
      </EmployeeProvider>
    </BrowserRouter>
  )
}
