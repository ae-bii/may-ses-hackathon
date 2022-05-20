import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

const Header = () => {
    return (
        <div className="header">
            <h1 className="logo"> App Name</h1>
            <div className="links">
                {/* <Link to="/input">Test Input</Link>
                <Link to="/signup">Sign Up</Link> */}
                <Link to="/budgeting">Budgeting</Link>
                <Link to="/spending">Spending</Link>
                <Link to="/investing">Investing</Link>
            </div>
        </div>
    )
}

export default Header