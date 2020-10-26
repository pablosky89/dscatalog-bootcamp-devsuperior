import React from 'react';
import './styles.scss';

const Navbar = () => (

    <nav className="admin-nav-container">
        <ul>
            <li>
                <a href="link" className="admin-nav-item ">Meus Productos</a>
            </li>
            <li>
                <a href="link" className="admin-nav-item active">Meus Categorias</a>
            </li>
            <li>
                <a href="link" className="admin-nav-item">Meus Usuarios</a>
            </li>

        </ul>
    </nav>

);

export default Navbar;