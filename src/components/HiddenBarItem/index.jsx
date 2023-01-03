import { StyledHiddenBarItem } from "./style";

export default function SidebarItem({ Icon, text, action, path, setHiddenBar }) {

  return (
    // eslint-disable-next-line
    <StyledHiddenBarItem onClick={() => (setHiddenBar(false), action(path))}>
      <Icon />
      {text}
    </StyledHiddenBarItem>
  );
}