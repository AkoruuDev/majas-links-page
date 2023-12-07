import ico from "../../assets/ico.png"
import { ButtonLinks } from "../../styles/Components/Button";
// Styles
import { ContainerCollun } from "../../styles/Components/Container";
import { Ico } from "../../styles/Components/Ico";
import { LogoTop } from "../../styles/Components/Logo";
import { Scroll } from "../../styles/Components/Scroll";
import whattsico from "../../assets/whatsapp.svg"
import instico from "../../assets/instagram.svg"
import { Title } from "../../styles/Components/Title";
function Main () {
    return(
        <ContainerCollun>
            <LogoTop src={ ico } alt="Logo Majas" />
            <Scroll>
                <a href="https://instagram.com/majas_peguemonte" target="_blank" rel="noreferrer">
                    <ButtonLinks>
                        <Ico src={instico} alt="ico" />
                        <Title>@majas_peguemonte</Title>
                    </ButtonLinks>
                </a>
                {/* <a href="https://instagram.com/brincartbrincando" target="_blank" rel="noreferrer">
                    <ButtonLinks>
                        <Ico src={instico} alt="ico" />
                        <Title>@brincartbrincando</Title>
                    </ButtonLinks>
                </a> */}
                <a href="https://api.whatsapp.com/send/?phone=%2B5511915573651&text=Quero%20saber%20mais%21&type=phone_number&app_absent=0" target="_blank" rel="noreferrer">
                    <ButtonLinks>
                        <Ico src={whattsico} alt="ico" />
                        <Title>Majas Corp</Title>
                    </ButtonLinks>
                </a>
                <a href="https://api.whatsapp.com/send/?phone=%2B5511973733892&text=Quero%20saber%20mais%21&type=phone_number&app_absent=0" target="_blank" rel="noreferrer">
                    <ButtonLinks>
                        <Ico src={whattsico} alt="ico" />
                        <Title>Adam Rodrigues</Title>                    
                    </ButtonLinks>
                </a>
                {/* <a href="https://api.whatsapp.com/send/?phone=%2B5511991492907&text=Quero%20saber%20mais%21&type=phone_number&app_absent=0" target="_blank" rel="noreferrer">
                    <ButtonLinks>
                        <Ico src={whattsico} alt="ico" />
                        <Title>Brincart Brincando</Title>               
                    </ButtonLinks>
                </a> */}
            </Scroll>
        </ContainerCollun>
    )
};

export default Main;