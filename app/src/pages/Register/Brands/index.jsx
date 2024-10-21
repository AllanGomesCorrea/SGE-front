import * as S from './styles';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import Sidebar from '../../../components/Sidebar';
import { useState, useEffect } from 'react';
import BrandsTable from '../../../components/BrandsTable'
import BrandsModalButton from '../../../components/Modal/BrandsModalButton'


function Brands(){

    const[brands, setBrands] = useState([]);

    useEffect(() => {
        
        const token = localStorage.getItem('accessToken'); // Recupera o token do localStorage

        fetch('http://localhost:8000/api/v1/brands/', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            }
        })
        .then(response => response.json())
        .then((data) => {
            const formattedData = Array.isArray(data.results) ? data.results : [data.results];
            setBrands(formattedData);
        })
        .catch((error) => console.log(error));
    }, []);

    return(
        <S.PageContainer>
            <Header />
            <S.ContentWrapper>
                <Sidebar />
                <S.MainContent>
                    <BrandsModalButton />
                    <BrandsTable brands={brands} />
                </S.MainContent>
            </S.ContentWrapper>
            <Footer />
        </S.PageContainer>
    );
}
export default Brands;