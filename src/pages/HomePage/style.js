import Styled from "styled-components";

export const StyledHomePage = Styled.div`
    width: 800px;

    .name{
        margin-bottom: 4px;
        @media (max-width: 450px){
            font-size: 28px;
        }
    }

    .lastTicket {
        > .value {
            display: flex;
            align-items: center;
            justify-content: space-between;
            
            > span {
                color: green;
                font-weight: bold;
            }
        }

        > .dueDate {
            display: flex;
            flex-direction: column;
            margin: 12px 0;
        }

        > a {
            font-weight: bold;
        }
    }
    
    .contacCompany {
        display: flex;
        flex-direction:column;
        gap: 12px;

        > a {
            display: flex;
            align-items: center;
            gap: 5px;

            > svg {
                height: 20px;
                width: 20px;
            }
        }
    }
`