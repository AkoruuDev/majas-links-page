import styled from "styled-components";

const AsideLateral = styled.aside`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    & span {
        width: 70%;
        text-align: center;
        & h1 {
            font-style: italic;
            color: #7e7e7e;
            font-family: 'Josefin Sans', sans-serif;
        }
    }
`;

export {
    AsideLateral
}