import styled from 'styled-components'

export const StyledNavBar = styled.div`
    position: fixed;
    top: 0;
    width: 100%;
    background-color: #f1f1f1;
    padding: 12px 20px;
    height: 72px;
    box-shadow: 0 0 15px #0004;
    display: flex;
    align-items: center;
    justify-content: space-between;

    > h1 {
        @media (max-width: 450px){
            display: none;
        }
    }


    > .container {
        display: flex;
        gap: 40px;

        @media (max-width: 450px){
            flex: 1;
            justify-content: space-around;
            gap: 0;
        }

        > a, .hiddenBar {
            display: flex;
            flex-direction: column;
            align-items: center;
            border-radius: 28px;
            cursor: pointer;
            color: black;
            text-decoration: none;

            > svg {
                width: 35px;
                height: 35px;
            }

            > span {
                font-size: 12px;
            }
        }

        .isActive {
            > svg, span {
                color: red;
            }
        }
    }
`