import Styled from "styled-components";

export const StyledLoginPage = Styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 80vh;
    padding: 0 2rem;


    .title {
        margin-bottom: 12px;
    }

    .form {
        background-color: #f1f1f1;
        border-radius: 12px;
        width: 100%;
        max-width: 480px;
        padding: 20px;
        box-shadow: 0 0 15px #0004;

        .field {
            display: flex;
            gap: 5px;
            margin-bottom: 12px;

            :last-child{
                margin-bottom: none;
            }

            > label {
                display: block;
                flex-shrink: 0;
            }
            > input {
                width: 100%;
                border-radius: 15px;
                height: 25px;
                padding-left: 8px;
                border: none;
                box-shadow: 0 0 5px #0004;
                :focus {
                    outline: 0;
                    box-shadow: 0 0 5px #0008;
                }
            }
        }
        .action {
            text-align: center;
            margin-top: 1rem;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding: 8px;

            > button {
                padding: 5px 10px;
                border: none;
                border-radius: 15px;
                box-shadow: 0 0 5px #0004;

                :active {
                    background-color: #d1d1d1;
                }
            }
        }
    }
`