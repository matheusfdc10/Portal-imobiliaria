import { StyledNavBar } from './style.js'
import { FaBars } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import { BiHome } from 'react-icons/bi';
import { MdAttachMoney } from 'react-icons/md';
import HiddenBar from '../HiddenBar/index.jsx';
import { useState } from 'react';

const NavBar = () => {
    const [hiddenBar, setHiddenBar] = useState(false);
    const activeLink = 'isActive'

    return (
        <StyledNavBar>
            <h1>Logo</h1>
            <div className='container'>
                <NavLink to='/home' className={({ isActive }) => isActive ? activeLink : null}>
                    <BiHome />
                    <span>Início</span>
                </NavLink>
                <NavLink to='/billet' className={({ isActive }) => isActive ? activeLink : null}>
                    <MdAttachMoney />
                    <span>Boleto</span>
                </NavLink>
                <NavLink>
                    <BiHome />
                    <span>Início</span>
                </NavLink>
                <NavLink>
                    <MdAttachMoney />
                    <span>Boleto</span>
                </NavLink>
                <div className='hiddenBar' onClick={() => setHiddenBar(!hiddenBar)}>
                    <FaBars />
                        {hiddenBar &&
                            <HiddenBar setHiddenBar={setHiddenBar}/>
                        }
                    <span>Mais</span>
                </div >
            </div>
            
        </StyledNavBar>
    )
}

export default NavBar;