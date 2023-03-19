// Write your JS code here
import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <div className="nav-bar">
    <ul className="nav-container">
      <li className="list-container">
        <Link to="/" className="nav-link">
          Home
        </Link>
      </li>
      <li className="list-container">
        <Link to="/about" className="nav-link">
          About
        </Link>
      </li>
    </ul>
  </div>
)
export default Header
