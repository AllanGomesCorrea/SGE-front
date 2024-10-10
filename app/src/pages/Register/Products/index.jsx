import * as S from './styles';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import Sidebar from '../../../components/Sidebar';
import { useState, useEffect } from 'react';
import ProductsTable from '../../../components/ProductsTable'
import ProductsModalButton from '../../../components/Modal/ProductsModalButton'


function Products(){

    const[products, setProducts] = useState([]);

    useEffect(() => {
        
        const token = localStorage.getItem('accessToken'); // Recupera o token do localStorage

        fetch('http://localhost:8000/api/v1/products/', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            }
        })
        .then(response => response.json())
        .then((data) => {
            const formattedData = Array.isArray(data) ? data : [data];
            setProducts(formattedData);
        })
        .catch((error) => console.log(error));
    }, []);

    return(
        <S.PageContainer>
            <Header />
            <S.ContentWrapper>
                <Sidebar />
                <S.MainContent>
                    <ProductsModalButton />
                    <ProductsTable products={products} />
                </S.MainContent>
            </S.ContentWrapper>
            <Footer />
        </S.PageContainer>
    );
}
export default Products;