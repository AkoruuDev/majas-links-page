import styled from "styled-components";

const Button = styled.div`
    padding: 1rem 2rem;
    margin: 1.5rem 0;
    border-radius: 1rem;

    color: #1e1e1e;

    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #7e7e7e;
    cursor: pointer;
    border: 2px solid #7e7e7e;
    transition: all .2s ease-in-out;

    &:hover {
        background-color: #1e1e1e;
        color: #7e7e7e;
    }
`;

const ButtonLinks = styled(Button)`
    width: 100%;
    height: 100px;
`;

const ButtonCta = styled(Button)`
    width: 180px;
    font-weight: 700;
    font-size: 18px;
    font-family: 'Josefin Sans', sans-serif;
`;

export {
    ButtonLinks,
    ButtonCta
};