import React from 'react'
import Logo from './Logo'
import './Header.scss'
import { useNavigate } from 'react-router-dom'

const Header = () => {
    const navigate = useNavigate();
    return (
        <header className='header'>
            <div className='logo'>
                <Logo />
            </div>
            <div>
                <button className='checkBtn' onClick={() => navigate('/appointment-page')}>Check</button>
                <button className='bookBtn' onClick={() => navigate('/booking-page')}>Book</button>
            </div>


        </header>
    )
}

export default Header