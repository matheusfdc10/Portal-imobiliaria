import styled from 'styled-components'

export const StyledHeader = styled.header`
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

    }

    > svg {
        width: 30px;
        height: 40px;
        cursor: pointer;
    }
`