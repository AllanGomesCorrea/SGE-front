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

    const handleItemsPerPageChange = (e) => {
        setItemsPerPage(Number(e.target.value));
        setCurrentPage(1);
    };

    const handlePreviousPage = () => {
        setCurrentPage((prev) => Math.max(prev - 1, 1));
    };

    const handleNextPage = () => {
        setCurrentPage((prev) => Math.min(prev + 1, totalPages));
    };

    return (
        <S.PageContainer>
            <Header />
            <S.ContentWrapper>
                <Sidebar />
                <S.MainContent>
                    <ProductsModalButton fetchProducts={fetchProducts} />
                    <S.Select onChange={handleItemsPerPageChange} value={itemsPerPage}>
                        <option value={10}>10</option>
                        <option value={20}>20</option>
                        <option value={50}>50</option>
                    </S.Select>
                    <ProductsTable products={products} />
                    <S.PaginationContainer>
                        <S.Button onClick={handlePreviousPage} disabled={currentPage === 1}>
                            Anterior
                        </S.Button>
                        <S.PageIndicator>Página {currentPage} de {totalPages}</S.PageIndicator>
                        <S.Button onClick={handleNextPage} disabled={currentPage === totalPages}>
                            Próxima
                        </S.Button>
                    </S.PaginationContainer>
                </S.MainContent>
            </S.ContentWrapper>
            <Footer />
        </S.PageContainer>
    );
}

export default Products;
