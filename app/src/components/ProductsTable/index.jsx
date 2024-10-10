import * as S from './styles';
import { useState } from 'react';

function ProductsTable({ products }) {
    const [isAscending, setIsAscending] = useState(true);

    const handleSort = () => {
        setIsAscending(!isAscending);
    };

    const sortedProducts = [...products].sort((a, b) => {
        return isAscending ? a.id - b.id : b.id - a.id;
    });

    return (
        <S.Table>
            <S.TableHead>
                <S.TableRow>
                     <S.TableHeader onClick={handleSort}>ID {isAscending ? '↑' : '↓'}</S.TableHeader>
                    <S.TableHeader>Nome</S.TableHeader>
                    <S.TableHeader>Descrição</S.TableHeader>
                </S.TableRow>
            </S.TableHead>
            <tbody>
                {sortedProducts.map((product) => (
                    <S.TableRow key={product.id}>
                        <S.TableCell>{product.id}</S.TableCell>
                        <S.TableCell>{product.title}</S.TableCell>
                        <S.TableCell>{product.description}</S.TableCell>
                    </S.TableRow>
                ))}
            </tbody>
        </S.Table>
    );
}

export default ProductsTable;
