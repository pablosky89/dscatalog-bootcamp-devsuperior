import React from 'react';
import { NavLink } from 'react-router-dom';
import './styles.scss';

const Navbar = () => (

    <nav className="admin-nav-container">
        <ul>
            <li>
                <NavLink to="/admin/products"  className="admin-nav-item ">Meus Productos</NavLink>
            </li>
            <li>
                <NavLink to="/admin/categories" className="admin-nav-item">Meus Categorias</NavLink>
            </li>
            <li>
                <NavLink to="/admin/users" className="admin-nav-item">Meus Usuarios</NavLink>
            </li>

        </ul>
    </nav>

);

export default Navbar;