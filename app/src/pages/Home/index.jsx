import * as S from './styles';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

function Home(){
    return (
        <S.PageContainer>
            <Header />
            <S.MainContent>
                {/* Conteúdo principal da página */}
            </S.MainContent>
            <Footer />
        </S.PageContainer>
    );
}
export default Home;
