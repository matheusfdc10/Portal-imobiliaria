import Styled from "styled-components";

export const StyledTable = Styled.table`
    > thead > tr {
        text-align: left;
    }

    @media (max-width: 450px){
        .date {
            display: none;
        }
    }

    .total {
        font-weight: bold;
    }
`