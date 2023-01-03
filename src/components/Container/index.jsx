import Line from "../Line";
import { StyledContainer } from "./style";

const Container = ({ children, title }) => {
    return(
        <StyledContainer>
            <h2>{title}</h2>
            <Line />
            {children }
        </StyledContainer>
    )
}

export default Container;