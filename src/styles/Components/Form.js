import styled from "styled-components";

const Form = styled.form`
    width: 100%;
    height: calc(100% - 100px);
    display: flex;
    flex-direction: column;

    overflow: hidden;
    overflow-y: auto;

    &::-webkit-scrollbar {
        display: none;
    }
`;

const InputBox = styled.div`
    width: 100%;
    height: 120px;
    margin: 0 0 15px 0;

    display: flex;
    flex-direction: column;

    label {
        margin: 0 0 4px 24px;
    }

    span {
        margin: 4px 0 0 24px;
        color: red;
        font-style: italic;
        font-size: 13px;
    }
`;

const Input = styled.input`
    width: 100%;
    height: 70px;
    background-color: #fafafa;
    border: transparent;
    box-sizing: border-box;
    border-radius: 20px;
    padding: 0 25px;
`;

const Span = styled.span`
    width: 100%;
    text-align: center;
    margin-bottom: 14px;
    font-style: italic;
    color: #0e0e0e;
    font-size: 22px;
    cursor: pointer;
    transition: all 0.2s ease;

    &:hover {
        transform: scale(1.2);
    }
`

const Button = styled.button`
    height: 70px;
    padding: 25px 15px;
    font-size: 20px;
    color: #fafafa;
    background-color: #1e1e1e;
    border: 3px solid #1e1e1e;
    border-radius: 50px;
    cursor: pointer;
    transition: all .2s ease;

    &:hover {
        color: #1e1e1e;
        background-color: #fafafa;
    }
`;

export {
    Form,
    InputBox,
    Input,
    Span,
    Button
}