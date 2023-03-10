import '../index.css'
import { Nav } from '../components/nav/nav'
import { Form } from '../components/form/form'
import { Footer } from '../footer/footer'

export function CreateEmployeePage() {
  return (
    <>
      <Nav />
      <div className="form-container">
        <Form props />
      </div>
      <Footer />
    </>
  )
}
