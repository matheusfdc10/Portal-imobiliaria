import Styled from 'styled-components'

export const StyledSideBar = Styled.div`
    position: fixed;
    top: 0;
    background-color: #f1f1f1;
    margin: 102px 20px 20px 24px;
    padding: 12px;
    border-radius: 32px;
    box-shadow: 0 0 15px #0004;
    height: -webkit-fill-available;
    display: flex;
    flex-direction: column;
    gap: 4px;

    > a {
        display: flex;
        align-items: center;
        border-radius: 28px;
        padding: 8px;
        cursor: pointer;
        gap: 6px;
        color: black;
        text-decoration: none;

        > svg {
            width: 28px;
            height: 28px;
        }

        > span {
            display: none;
        }
    }

    :hover {
        > a > span {
            display: block;
        }
    }

    > a:hover {
        background-color: #c1c1c1;
    }


    .isActive {
        background-color: #c1c1c1
    }
`