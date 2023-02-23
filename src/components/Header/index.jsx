import { RiShutDownLine } from 'react-icons/ri';
import { Container, Profile, Logout } from "./styles";
import { useAuth } from '../../hooks/auth';

export function Header() {
    const { signOut } = useAuth();

    return(
        <Container>
            <Profile to="/profile">
                <img src="https://github.com/alineviana.png" alt="Foto do Usuário"/>

                <div>
                    <span>Bem-vindo(a)</span>
                    <strong>Aline Viana</strong>
                </div>
            </Profile>

            <Logout onClick={signOut}>
                <RiShutDownLine/>
            </Logout>
        </Container>
    );
}