import * as S from './styles';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Sidebar from '../../components/Sidebar';

function Register(){
    return(
        <S.PageContainer>
            <Header />
            <S.ContentWrapper>
                <Sidebar />
                <S.MainContent>
                    <p>PAGINA DE CADASTRO</p>
                    {/* Conteúdo principal da página */}
                </S.MainContent>
            </S.ContentWrapper>
            <Footer />
        </S.PageContainer>
    );
}
export default Register;