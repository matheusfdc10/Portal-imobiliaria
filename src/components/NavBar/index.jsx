import { StyledNavBar } from './style.js'
import { FaBars } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import { BiHome } from 'react-icons/bi';
import { MdAttachMoney } from 'react-icons/md';

const NavBar = () => {
    const activeLink = 'isActive'

    return (
        <StyledNavBar>
            <h1>Logo</h1>
            <div className='container'>
                <NavLink to='/home' className={({ isActive }) => isActive ? activeLink : null}>
                    <BiHome />
                    <span>Início</span>
                </NavLink>
                <NavLink to='/tela2' className={({ isActive }) => isActive ? activeLink : null}>
                    <MdAttachMoney />
                    <span>Fatura</span>
                </NavLink>
                <NavLink>
                    <BiHome />
                    <span>Início</span>
                </NavLink>
                <NavLink>
                    <MdAttachMoney />
                    <span>Fatura</span>
                </NavLink>
                <NavLink>
                    <FaBars />
                    <span>Mais</span>
                </NavLink>
            </div>
            
        </StyledNavBar>
    )
}

export default NavBar;