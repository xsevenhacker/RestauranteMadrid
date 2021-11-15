import React from 'react'
import { Link } from "react-router-dom"
import  { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import LoginButton from '../authorization/login'
import Profile from '../profile/profile'
import { useAuth0 } from '@auth0/auth0-react'

export default function Nav() {

    const { isAuthenticated} = useAuth0()
    
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark opacity-85 p-3">
            <div className="container-fluid">
                <Link to="/" className="navbar-brand" aria-current="page">Sal&Salsa</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item fs-5 me-3">
                            <Link to="/" className="nav-link" aria-current="page">Inicio</Link>
                        </li>
                        <li className="nav-item fs-5 me-3">
                            <Link to="/menu" className="nav-link">El Menú</Link>
                        </li>
                        <li className="nav-item fs-5 me-3">
                        <Link to="/reservas" className="nav-link">Reservas</Link>

                        </li>
                        <li className="nav-item fs-5 me-3">
                            <Link to="/contacto" className="nav-link">Contacto</Link>
                        </li>
                        <li className="nav-item fs-5 me-3">
                            <Link to="/nosotros" className="nav-link">Nosotros</Link>
                        </li>
                        {
                            (isAuthenticated) ?
                                <li className="nav-item fs-5 me-3">
                                    <Link to="/dashboard" className="nav-link">Dashboard</Link>
                                </li>
                            : ""
                        }
                        <li className="nav-item fs-5">
                            <Link to="/carrito" className="nav-link"><FontAwesomeIcon icon={faShoppingCart} /> Carrito vacío</Link>
                        </li>
                    </ul>
                    {              
                        (isAuthenticated)
                        ? <Profile />
                        : <li className="nav-item fs-5"><LoginButton /></li>                                
                    }
                </div>            
            </div>
        </nav>
    );  
}