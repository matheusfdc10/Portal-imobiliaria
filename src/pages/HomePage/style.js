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
            gap: 40px;

            > h3 {
                flex-shrink: 0;
            }
    
            > span {
                font-weight: bold;
                text-align: end;
                word-break: break-word;
                color: #6a6a6a;
            }

            > .paid {
                color: green;
            }

            > .delay {
                color: red;
            }
        }

        > .dueDate {
            display: flex;
            flex-direction: column;
            margin: 20px 0;
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