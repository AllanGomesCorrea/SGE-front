import * as S from './styles';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

function Register(){
    return(
        <S.PageContainer>
            <Header />
            <S.MainContent>
                <p>PAGINA DE CADASTRO</p>
                {/* Conteúdo principal da página */}
            </S.MainContent>
            <Footer />
        </S.PageContainer>
    );
}
export default Register;