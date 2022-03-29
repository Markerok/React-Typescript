import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar: React.FunctionComponent = () => (
    <nav>
        <div className="nav-wrapper px1">
            <a href="/" className="brand-logo">
                React + Typescript
            </a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li>
                    <Link to="/">List</Link>
                </li>
                <li>
                    <Link to="/about">Information</Link>
                </li>
            </ul>
        </div>
    </nav>
)
