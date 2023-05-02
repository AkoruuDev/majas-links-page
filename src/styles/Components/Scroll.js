import styled from "styled-components";

export const Scroll = styled.div`
    width: 80%;
    height: 70%;

    overflow-y: auto;
    &::-webkit-scrollbar{
        display: none;
    }
`;