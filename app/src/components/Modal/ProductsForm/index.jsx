import { useState } from 'react';
import * as S from './styles';
import MaskedInput from 'react-text-mask';
import createNumberMask from 'text-mask-addons/dist/createNumberMask';

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

    // Definindo a máscara para preços
    const currencyMask = createNumberMask({
        prefix: 'R$ ',
        suffix: '',
        includeThousandsSeparator: true,
        thousandsSeparatorSymbol: '.',
        allowDecimal: true,
        decimalSymbol: ',',
        decimalLimit: 2,
        allowNegative: false,
        allowLeadingZeroes: false,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // Formatando os preços para o formato esperado pela API
        const formatPrice = (price) => {
            return price.replace('R$ ', '').replace('.', '').replace(',', '.');
        };

        const payload = {
            title: formData.title,
            description: formData.description,
            serie_number: formData.serialNumber,
            cost_price: formatPrice(formData.costPrice),
            selling_price: formatPrice(formData.sellingPrice),
            quantity: formData.quantity,
            category: parseInt(formData.category, 10),
            brand: parseInt(formData.brand, 10),
        };

        try {
            const response = await fetch('http://localhost:8000/api/v1/products/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
                },
                body: JSON.stringify(payload),
            });

            if (response.ok) {
                const data = await response.json();
                console.log('Produto adicionado com sucesso:', data);
                onSubmit(data);
            } else {
                console.error('Erro ao adicionar produto:', response.statusText);
            }
        } catch (error) {
            console.error('Erro de rede:', error);
        }
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
                <MaskedInput
                    mask={currencyMask}
                    name="costPrice"
                    value={formData.costPrice}
                    onChange={handleChange}
                    render={(ref, props) => (
                        <S.Input ref={ref} {...props} />
                    )}
                />
            </S.FormGroup>
            <S.FormGroup>
                <S.Label>Preço de Venda:</S.Label>
                <MaskedInput
                    mask={currencyMask}
                    name="sellingPrice"
                    value={formData.sellingPrice}
                    onChange={handleChange}
                    render={(ref, props) => (
                        <S.Input ref={ref} {...props} />
                    )}
                />
            </S.FormGroup>
            <S.Button type="submit">Salvar</S.Button>
        </S.FormContainer>
    );
}

export default ProductsForm;
