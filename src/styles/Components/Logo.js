import styled from "styled-components";

const Logo = styled.img`
    height: 90vh;
    transition: all 1.2s ease-in-out;
    
    @media(max-width: 1080px) {
        height: 50vh;
    }
`;

const LogoTop = styled.img`
    width: 180px;
    height: 180px;
`;

export {
    Logo,
    LogoTop
}