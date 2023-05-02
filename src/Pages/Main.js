import ico from "../assets/ico.png"
import ButtonBox from "../components/LinkBox";
// Styles
import { Container } from "../styles/Components/Container";
import { Logo } from "../styles/Components/Logo";
import { Scroll } from "../styles/Components/Scroll";
import { links } from "../tools/links.array";

function Main () {
    function sayHello(e) {
        return console.log( e.name);
    }
    links.map(link => {sayHello(link)})
    return(
        <Container>
            <Logo src={ ico } alt="Logo Majas" />
            <Scroll>
                {links.map((link, i) => {
                    <ButtonBox link={link} />
                })}
            </Scroll>
        </Container>
    )
};

export default Main;