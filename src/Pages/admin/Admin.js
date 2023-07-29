import { ContainerCollun } from "../../styles/Components/Container";
import { LogoTop } from "../../styles/Components/Logo";
import ico from "../../assets/ico.png";
import { ButtonCta } from "../../styles/Components/Button";
import { useNavigate } from "react-router-dom";

function Admin() {
    const navigate = useNavigate();

    return (
        <ContainerCollun>
            <LogoTop src={ ico } alt="Logo Majas" />
            <div>
                <ButtonCta onClick={() => navigate('/admin/sign-in')}>Sign In</ButtonCta>
                <ButtonCta onClick={() => navigate('/admin/sign-up')}>Sign Up</ButtonCta>
            </div>
        </ContainerCollun>
    )
};

export { Admin }