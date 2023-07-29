import { ContainerCollun } from "../../../styles/Components/Container"
import { LogoTop } from "../../../styles/Components/Logo"
import ico from "../../../assets/ico.png"
import { Button, Form, Input, Span, InputBox } from "../../../styles/Components/Form"
import styled from "styled-components"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

function SignIn() {
    const [login, setLogin] = useState({name: "", password: ""})
    const [e_email, setE_email] = useState(false);
    const [e_password, setE_password] = useState(false);

    const navigate = useNavigate()

    function saveLog(name, value) {
        setLogin({...login,
        [name]: value
        })
    }

    function verifyEmail() {
        (login.email) ? setE_email(true) : setE_email(false)
    }

    function verifyPassword() {
        (login.password) ? setE_password(true) : setE_password(false)
    }

    function log(event) {
        event.preventDefault()
        verifyEmail()
        verifyPassword()
    }

    return (
        <ContainerCollun>
            <LogoTop src={ ico } alt="Logo Majas" />
            <BoxForm>
                <Text>Sign In</Text>
                <Form onSubmit={log}>
                    <InputBox>
                        <label htmlFor="">Email</label>
                        <Input type="text" placeholder="ex: mariajose@gmail.com" name="email" required onChange={e => {
                            saveLog(
                                e.target.name,
                                e.target.value
                            )
                        }} />
                        {!e_email ? "" : <span className='error'>e-mail errado ou inexistente</span>}
                    </InputBox>
                    <InputBox>
                        <label htmlFor="">Senha</label>
                        <Input type="password" name="password" required onChange={e => {
                            saveLog(
                                e.target.name,
                                e.target.value
                            )
                        }} />
                        {!e_password ? "" : <span className='error'>senha errada</span>}
                    </InputBox>
                    <Span onClick={() => navigate('/admin/sign-up')}>Registrar</Span>
                    <Button type="submit">Entrar</Button>
                </Form>
            </BoxForm>
        </ContainerCollun>
    )
};

export {
    SignIn,
}

const Text = styled.h1`
    font-size: 36px;
    font-weight: 700;
    margin-bottom: 50px;
`

const BoxForm = styled.section`
    width: 60vw;
    height: 60vh;
    padding: 25px 50px;
    background-color: #a5a5a5;
    border-radius: 50px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`