import { StyledSideBar } from './style'
import { GrAddCircle } from "react-icons/gr";
import { BiHome } from "react-icons/bi";
import { NavLink } from 'react-router-dom';

const SideBar = () => {
    const activeLink = 'isActive'
    
    return(
        <StyledSideBar>
            <NavLink to='/home' className={({ isActive }) => isActive ? activeLink : null}>
                <BiHome />
                <span>Home</span>
            </NavLink>
            <NavLink to='/fatura' className={({ isActive }) => isActive ? activeLink : null}>
                <GrAddCircle />
                <span>Tela 2</span>
            </NavLink>
        </StyledSideBar>
    )
}

export default SideBar;