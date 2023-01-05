import Line from "../Line";
import { StyledContainer } from "./style";

const Container = ({ children, title, className }) => {
    return(
        <StyledContainer className={className}>
            <h2>{title}</h2>
            <Line />
            {children }
        </StyledContainer>
    )
}

export default Container;