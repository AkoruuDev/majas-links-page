import { Container } from "../styles/Components/Container";
import { Logo } from "../styles/Components/Logo";
import logo from "../assets/ico.png"
import { ButtonCta } from "../styles/Components/Button";
import { useNavigate } from "react-router-dom";
import { AsideLateral } from "../styles/Components/Aside";

export default function Home() {
    const navigate = useNavigate();

    return (
        <Container>
            <div>
                <Logo src={logo} alt={''} />
            </div>
            <AsideLateral>
                <span><h1>"Pense no que você quer e deixe que nós fazemos acontecer"</h1></span>
                <ButtonCta onClick={() => navigate('/contact')}>Contatos</ButtonCta>
            </AsideLateral>
        </Container>
    )
};