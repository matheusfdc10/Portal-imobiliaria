import styled from 'styled-components'

export const StyledHiddenBarItem = styled.div`
    display: flex;
    background-color: #e1e1e1;
    align-items: center;
    font-size: 20px;
    padding: 8px;
    cursor: pointer;
    border-radius: 25px;
    margin: 0 24px 20px 24px;
    flex-direction: row-reverse;
    box-shadow: 0 0 12px #0003;

    > svg {
        margin: 0 20px;
    }
    &:hover {
        background-color: white;
    }
`