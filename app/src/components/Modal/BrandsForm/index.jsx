import { useState } from 'react';
import * as S from './styles';

function BrandsForm({ onSubmit }) {
    const [formData, setFormData] = useState({
        name: '',
        description: ''
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

        const payload = {
            name: formData.name,
            description: formData.description,
        };

        try {
            const response = await fetch('http://localhost:8000/api/v1/brands/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
                },
                body: JSON.stringify(payload),
            });

            if (response.ok) {
                const data = await response.json();
                console.log('Marca adicionada com sucesso:', data);
                onSubmit(data);
            } else {
                console.error('Erro ao adicionar marca:', response.statusText);
            }
        } catch (error) {
            console.error('Erro de rede:', error);
        }
    };

    return (
        <S.FormContainer onSubmit={handleSubmit}>
            <S.FormGroup>
                <S.Label>Nome:</S.Label>
                <S.Input type="text" name="name" value={formData.name} onChange={handleChange} />
            </S.FormGroup>
            <S.FormGroup>
                <S.Label>Descrição:</S.Label>
                <S.TextArea name="description" value={formData.description} onChange={handleChange}></S.TextArea>
            </S.FormGroup>
            <S.Button type="submit">Salvar</S.Button>
        </S.FormContainer>
    );
}

export default BrandsForm;
