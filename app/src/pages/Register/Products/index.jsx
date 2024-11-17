import * as S from './styles';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import Sidebar from '../../../components/Sidebar';
import { useState, useEffect, useCallback } from 'react';
import ProductsTable from '../../../components/ProductsTable';
import ProductsModalButton from '../../../components/Modal/ProductsModalButton';

function Products() {
    const [products, setProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(10);
    const [totalPages, setTotalPages] = useState(1);

    // Usando useCallback para memorizar a função fetchProducts
    const fetchProducts = useCallback(() => {
        const token = localStorage.getItem('accessToken');

        fetch(`http://localhost:8000/api/v1/products/?page=${currentPage}&page_size=${itemsPerPage}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            }
        })
        .then(response => response.json())
        .then((data) => {
            setProducts(data.results || []);
            setTotalPages(Math.ceil(data.count / itemsPerPage));
        })
        .catch((error) => console.log(error));
    }, [currentPage, itemsPerPage]); // Adiciona as dependências corretas

    // useEffect que chama fetchProducts
    useEffect(() => {
        fetchProducts();
    }, [fetchProducts]);

    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
    };

    const handleRowsPerPageChange = (event) => {
        setItemsPerPage(parseInt(event.target.value, 10));
        setCurrentPage(1); // Reinicia para a primeira página ao mudar o número de itens por página
    };


    return (
        <S.PageContainer>
            <Header />
            <S.ContentWrapper>
                <Sidebar />
                <S.MainContent>
                    <ProductsModalButton fetchProducts={fetchProducts} />
                    <ProductsTable 
                        products={products}
                        page={currentPage}
                        rowsPerPage={itemsPerPage}
                        totalPages={totalPages}
                        onPageChange={handlePageChange}
                        onRowsPerPageChange={handleRowsPerPageChange}
                    />                    
                </S.MainContent>
            </S.ContentWrapper>
            <Footer />
        </S.PageContainer>
    );
}

export default Products;
