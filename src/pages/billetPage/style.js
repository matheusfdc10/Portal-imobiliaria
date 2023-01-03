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

    > div > a {
        margin-top: 32px;
        font-weight: bold;
    }
`