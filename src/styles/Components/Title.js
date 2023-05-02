import styled from "styled-components";

export const Title = styled.span`
    height: 100%;
    display: flex;
    align-items: center;
    font-size: 1.5rem;
    font-family: 'Sigmar', cursive;

    overflow-x: auto;
    scroll-behavior: smooth;
    &::-webkit-scrollbar {
        display: none;
    }
`