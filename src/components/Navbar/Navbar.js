import React from 'react'
import PropTypes from 'prop-types'
//Using links to rouutes in REACT
import { Link } from 'react-router-dom'

const Navbar = ({ icon, title }) => {

    return (
        <nav className='navbar bg-primary'>
            <h1 style={{ fontWeight: 'bold', fontSize: '35px', color: 'black'}}><i className={icon}></i>{title}</h1>
            <ul>
                {/* LINK to is used in place of <a> tag */}
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
            </ul>
        </nav>
    )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
}
Navbar.defaultProps = {
    title: 'Finder',
    icon: 'fa fa-github'
}

export default Navbar