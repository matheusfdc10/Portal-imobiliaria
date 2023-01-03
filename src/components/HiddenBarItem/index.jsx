import { NavLink } from "react-router-dom";
import { StyledHiddenBarItem } from "./style";

export default function SidebarItem({ Icon, text, path, setHiddenBar }) {

  return (
    <NavLink to={path} >
        <StyledHiddenBarItem onClick={() => setHiddenBar(false)}>
        <Icon />
        {text}
        </StyledHiddenBarItem>
    </NavLink>
  );
}