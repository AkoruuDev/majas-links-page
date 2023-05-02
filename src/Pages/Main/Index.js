import ico from "../../assets/ico.png"
import { Button } from "../../styles/Components/Button";
// Styles
import { Container } from "../../styles/Components/Container";
import { Ico } from "../../styles/Components/Ico";
import { Logo } from "../../styles/Components/Logo";
import { Scroll } from "../../styles/Components/Scroll";
import { links } from "../../tools/links.array";
import whattsico from "../../assets/whatsapp.svg"
import instico from "../../assets/instagram.svg"
import { Title } from "../../styles/Components/Title";
function Main () {
    function sayHello(e) {
        return console.log( e.name);
    }
    links.map(link => {sayHello(link)})
    return(
        <Container>
            <Logo src={ ico } alt="Logo Majas" />
            <Scroll>
                <a href="https://instagram.com/majas_peguemonte" target="_blank">
                    <Button>
                        <Ico src={instico} alt="ico" />
                        <Title>@majas_peguemonte</Title>
                    </Button>
                </a>
                <a href="https://instagram.com/brincartbrincando" target="_blank">
                    <Button>
                        <Ico src={instico} alt="ico" />
                        <Title>@brincartbrincando</Title>
                    </Button>
                </a>
                <a href="https://api.whatsapp.com/send/?phone=%2B5511915573651&text=Quero%20saber%20mais%21&type=phone_number&app_absent=0" target="_blank">
                    <Button>
                        <Ico src={whattsico} alt="ico" />
                        <Title>Majas Corp</Title>
                    </Button>
                </a>
                <a href="https://api.whatsapp.com/send/?phone=%2B5511973733892&text=Quero%20saber%20mais%21&type=phone_number&app_absent=0" target="_blank">
                    <Button>
                        <Ico src={whattsico} alt="ico" />
                        <Title>Adam Rodrigues</Title>                    
                    </Button>
                </a>
                <a href="https://api.whatsapp.com/send/?phone=%2B5511991492907&text=Quero%20saber%20mais%21&type=phone_number&app_absent=0" target="_blank">
                    <Button>
                        <Ico src={whattsico} alt="ico" />
                        <Title>Brincart Brincando</Title>               
                    </Button>
                </a>
            </Scroll>
        </Container>
    )
};

export default Main;