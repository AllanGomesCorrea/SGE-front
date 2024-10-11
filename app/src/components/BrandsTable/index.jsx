import * as S from './styles';
import { useState } from 'react';

function BrandsTable({ brands }) {
    const [isAscending, setIsAscending] = useState(true);

    const handleSort = () => {
        setIsAscending(!isAscending);
    };

    const sortedBrands = [...brands].sort((a, b) => {
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
                {sortedBrands.map((brands) => (
                    <S.TableRow key={brands.id}>
                        <S.TableCell>{brands.id}</S.TableCell>
                        <S.TableCell>{brands.name}</S.TableCell>
                        <S.TableCell>{brands.description}</S.TableCell>
                    </S.TableRow>
                ))}
            </tbody>
        </S.Table>
    );
}

export default BrandsTable;
