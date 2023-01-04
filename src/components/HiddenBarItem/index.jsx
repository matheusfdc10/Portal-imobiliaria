import { NavLink } from "react-router-dom";
import { StyledHiddenBarItem } from "./style";

export default function SidebarItem({ Icon, text, path, setHiddenBar, action}) {

  return (
    <NavLink to={path} >
        <StyledHiddenBarItem onClick={() => (setHiddenBar(false), action())}>
        <Icon />
        {text}
        </StyledHiddenBarItem>
    </NavLink>
  );
}