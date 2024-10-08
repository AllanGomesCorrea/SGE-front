import * as S from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

function Footer() {
    return (
        <S.FooterContainer>
            <S.Column>
                <S.Title>Contato</S.Title>
                <S.Text>Redes Sociais</S.Text>
                <S.SocialLinks>
                    <S.SocialLink href="https://twitter.com/seu_perfil" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faTwitter} />
                    </S.SocialLink>
                    <S.SocialLink href="https://instagram.com/seu_perfil" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faInstagram} />
                    </S.SocialLink>
                    <S.SocialLink href="https://wa.me/seu_numero" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faWhatsapp} />
                    </S.SocialLink>
                </S.SocialLinks>
            </S.Column>
            <S.Column>
                <S.Title>Teste</S.Title>
                <S.Text>Testinho</S.Text>
                <S.Text>Testinho</S.Text>
                <S.Text>Testinho</S.Text>
                <S.Text>Testinho</S.Text>
                <S.Text>Testinho</S.Text>
            </S.Column>
            <S.Column>
                <S.Title>Teste</S.Title>
                <S.Text>Testinho</S.Text>
            </S.Column>
        </S.FooterContainer>
    );
}

export default Footer;
