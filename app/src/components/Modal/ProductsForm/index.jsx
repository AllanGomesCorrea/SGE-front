import { useState } from 'react';
import * as S from './styles'; // Certifique-se de que o caminho está correto

function ProductsForm({ onSubmit }) {
    const [formData, setFormData] = useState({
        title: '',
        category: '',
        brand: '',
        description: '',
        serialNumber: '',
        costPrice: '',
        sellingPrice: ''
    });

    const formatCurrency = (value) => {
        const cleanedValue = value.replace(/\D/g, '');

        if (cleanedValue.length === 0) {
            return '0,00';
        }

        const cents = cleanedValue.slice(-2);
        const dollars = cleanedValue.slice(0, -2);
        return `${dollars.replace(/\B(?=(\d{3})+(?!\d))/g, ".")},${cents.padStart(2, '0')}`;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;

        if (name === 'costPrice' || name === 'sellingPrice') {
            setFormData({
                ...formData,
                [name]: formatCurrency(value),
            });
        } else {
            setFormData({
                ...formData,
                [name]: value,
            });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
    };

    return (
        <S.FormContainer onSubmit={handleSubmit}>
            <S.FormGroup>
                <S.Label>Título:</S.Label>
                <S.Input type="text" name="title" value={formData.title} onChange={handleChange} />
            </S.FormGroup>
            <S.FormGroup>
                <S.Label>Categoria:</S.Label>
                <S.Input type="text" name="category" value={formData.category} onChange={handleChange} />
            </S.FormGroup>
            <S.FormGroup>
                <S.Label>Marca:</S.Label>
                <S.Input type="text" name="brand" value={formData.brand} onChange={handleChange} />
            </S.FormGroup>
            <S.FormGroup>
                <S.Label>Descrição:</S.Label>
                <S.TextArea name="description" value={formData.description} onChange={handleChange}></S.TextArea>
            </S.FormGroup>
            <S.FormGroup>
                <S.Label>Número de Série:</S.Label>
                <S.Input type="text" name="serialNumber" value={formData.serialNumber} onChange={handleChange} />
            </S.FormGroup>
            <S.FormGroup>
                <S.Label>Preço de Custo:</S.Label>
                <S.Input type="text" name="costPrice" value={formData.costPrice} onChange={handleChange} />
            </S.FormGroup>
            <S.FormGroup>
                <S.Label>Preço de Venda:</S.Label>
                <S.Input type="text" name="sellingPrice" value={formData.sellingPrice} onChange={handleChange} />
            </S.FormGroup>
            <S.Button type="submit">Salvar</S.Button>
        </S.FormContainer>
    );
}

export default ProductsForm;
