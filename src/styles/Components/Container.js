import styled from "styled-components"
import { Background } from "./Background";

const ContainerCollun = styled(Background)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Container = styled(Background)`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    @media(max-width: 1050px) {
        flex-direction: column;
    }
`;

export {
    ContainerCollun,
    Container
}