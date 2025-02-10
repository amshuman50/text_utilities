import React from 'react'
import PropTypes from 'prop-types'

export default function Navbar(props) {
    return (
        <>
            <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
                <div className="container-fluid">
                    <href className="navbar-brand" a="/">{props.title}</href>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <href className="nav-link active" aria-current="page" a="/">Home</href>
                            </li>
                            {/* <li className="nav-item">
                                <href className="nav-link" a="/About">{props.about}</href>
                            </li> */}
                        </ul>
                        {/* <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form> */}
                        <div className={`form-check form-switch text-${props.mode === "light" ? "dark" : "light"}`}>
                            <input className="form-check-input" onClick={props.toggleMode} type="checkbox" id="flexSwitchCheckDefault" />
                            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Dark Mode</label>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    about: PropTypes.string,
}

Navbar.defaultProps = {
    title: "Set Title Here",
    about: "About Text Here"
};