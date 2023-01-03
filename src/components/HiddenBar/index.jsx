import { FaTimes } from "react-icons/fa";
import { BiLogOut } from "react-icons/bi";
import { StyledContent, StyledHiddenBar} from "./style";
import SidebarItem from "../HiddenBarItem";

export default function HiddenBar({ setHiddenBar }) {
  
  return (
    <StyledHiddenBar hiddenbar={setHiddenBar}>
      <FaTimes onClick={() => setHiddenBar(false)} />
      <StyledContent>
        {/* <SidebarItem Icon={FaRegSun} text="Alterar senha"/> */}
        <SidebarItem setHiddenBar={setHiddenBar} Icon={BiLogOut} text="Sair" path='/home'/>
      </StyledContent>
    </StyledHiddenBar>
  );
}