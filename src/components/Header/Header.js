import React, { useContext } from 'react';
import logo from '../../images/logo.png';
import './Header.css';
import { NavLink } from 'react-router-dom';
import { UserContext } from '../UserContext/UserContext';
import { resetPassword } from '../Login/loginManager';

const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const token = sessionStorage.getItem('token');

    const getSingOut = () => {
        setLoggedInUser({});
        sessionStorage.removeItem('token');
    }
    
    return (
        <div className='header'>
            <img src={logo} alt="main-logo" />

            <nav>
                <NavLink to={'/'} className='navlink'>Home</NavLink>
                <NavLink to={'/shop'} className='navlink'>Shop</NavLink>
                <NavLink to={'/review'} className='navlink'>Order Review</NavLink>
                <NavLink to={'/manageInventory'} className='navlink'>Manage Inventory</NavLink>
                {(loggedInUser.email || sessionStorage.getItem('token')) && <button onClick={() => (getSingOut())}>Sign Out</button>}
            </nav>
        </div>
    );
};

export default Header;
