import { FaTimes } from "react-icons/fa";
import { BiLogOut } from "react-icons/bi";
import { StyledContent, StyledHiddenBar} from "./style";
import SidebarItem from "../HiddenBarItem";
import { useContext } from "react";
import { AuthContext } from "../../contexts/auth";

export default function HiddenBar({ setHiddenBar }) {
  const { logout } = useContext(AuthContext);
  
  return (
    <StyledHiddenBar hiddenbar={setHiddenBar}>
      <FaTimes onClick={() => setHiddenBar(false)} />
      <StyledContent>
        {/* <SidebarItem Icon={FaRegSun} text="Alterar senha"/> */}
        <SidebarItem setHiddenBar={setHiddenBar} Icon={BiLogOut} text="Sair" path='/home' action={logout} />
      </StyledContent>
    </StyledHiddenBar>
  );
}