import styled from "styled-components"
import { Background } from "./Background";

const ContainerCollun = styled(Background)`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Container = styled(Background)`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

export {
    ContainerCollun,
    Container
}