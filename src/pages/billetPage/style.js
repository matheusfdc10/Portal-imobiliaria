import Styled from "styled-components";

export const StyledBilletPage = Styled.div`
    width: 800px;

    .value {
        font-size: 21px;
        font-weight: bold;
    }

    .status {
        color: #6a6a6a;
        font-weight: bold;
        margin: 8px 0;
    }

    .paid {
       color: green;
    }

    .delay {
        color: red;
    }

    .dueDate {
        margin-bottom: 36px;
    }
    
    .textBarcode {
        font-weight: bold;
    }

    .barcode {
        text-align: center;
        word-break: break-all;
        margin: 8px;
        font-size: 14px;
    }

    .copy {
        width: 60px;
        align-self: center;
        border: none;
        background-color: #f1f1f1;
        border-radius: 30px;
        padding: 4px;
        :active {
            background-color: #e1e1e1;
            color: red;
        }
    }

    > .ultimoBoleto > a {
        margin-top: 32px;
        font-weight: bold;
    }

    > .historic > div {
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid #f1f1f1;
        align-items: center;
        padding: 8px 4px;
        :last-child{
            border-bottom: none;
        }

        > div {
            display: flex;
            align-items: center;

            > svg {
                width: 20px;
                height: 20px;
                margin-right: 5px;
            }
        }
    }
`