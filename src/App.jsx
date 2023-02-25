import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { EmployeeProvider } from './context/EmployeesContext'
import { FormProvider } from './context/FormContext'
import { CreateEmployeePage } from './pages/createEmployeePage'
import { CurrentEmployeesPage } from './pages/currentEmployeesPage'

export function App() {
  return (
    <BrowserRouter>
      <FormProvider>
        <EmployeeProvider>
          <Routes>
            <Route path="/" element={<CreateEmployeePage />}></Route>
            <Route
              path="/current-employees"
              element={<CurrentEmployeesPage />}
            ></Route>
          </Routes>
        </EmployeeProvider>
      </FormProvider>
    </BrowserRouter>
  )
}
