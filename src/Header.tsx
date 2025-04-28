import React from 'react'
import { NavLink } from 'react-router-dom'

const activeClassName = ({ isActive }: { isActive: boolean }) => (isActive ? 'active' : '')

const Header: React.FC = () => (
  <header className="header">
    <nav className="nav">
      <ul>
        <li>
          <NavLink
            to="/"
            end
            className={activeClassName}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/compute-exponent"
            end
            className={activeClassName}>
            Compute Exponent
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/signup"
            end
            className={activeClassName}>
            Sign Up
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/login"
            end
            className={activeClassName}>
            Login
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/refresh-login"
            end
            className={activeClassName}>
            Refresh Login (helpful for debugging auth)
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/logout"
            end
            className={activeClassName}>
            Logout
          </NavLink>
        </li>

      </ul>
    </nav>
  </header>
)
export default Header
