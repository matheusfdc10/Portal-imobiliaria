import styled from 'styled-components'

export const StyledHiddenBar = styled.div`
    background-color: #f1f1f1;
    position: fixed;
    height: 100%;
    top: 0px;
    right: 0px;
    width: 300px;
    right: ${props => props.hiddenbar ? '0' : '-100%'};
    animation: showSidebar .4s;
    box-shadow: 0 0 15px #0004;

    > svg {
        position: fixed;
        right: 0px;
        width: 34px;
        height: 34px;
        margin-top: 12px;
        margin-right: 20px;
        cursor: pointer;
    }
    @keyframes showSidebar {
        from {
            opacity: 0;
            width: 0;
        }
        to {
            opacity: 1;
            width: 300px;
        }
    }
`

export const StyledContent = styled.div`
    margin-top: 75px;
`