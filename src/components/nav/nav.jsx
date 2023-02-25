import { Link } from 'react-router-dom'
import './nav.css'

export function Nav() {
  return (
    <div className="nav-container">
      <Link className="link" to="/">
        <h1 className="main-title">HRNet</h1>
      </Link>
      <Link className="link" to="/current-employees">
        View Curent Employees
      </Link>
    </div>
  )
}
