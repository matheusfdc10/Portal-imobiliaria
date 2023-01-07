import Styled from "styled-components";

export const StyledBilletDetailsPage = Styled.div`
    width: 800px;

    .status {
        color: #6a6a6a;
        font-weight: bold;
        margin-top: 32px;
    }

    .paid {
        color: green;
    }

    .delay {
        color: red;
    }

    .dueDate {
        margin-top: 16px;
        margin-bottom: 32px;
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
        margin-bottom: 40px;

        :active {
            background-color: #e1e1e1;
            color: red;
        }
    }

    > div > a {
        margin-top: 32px;
        font-weight: bold;
    }

    .btn-pdf {
        align-items: center;
        max-width: 50px;
        margin: 8px;
        padding: 6px;
        /* align-self: center; */
        border: none;
        border-radius: 8px;

        :hover {
            background-color: #e1e1e1;
            color: red;
        }

        > svg {
            width: 30px;
            height: 30px;
        }

        > span {
            font-size: 12px;
        }
    }
`