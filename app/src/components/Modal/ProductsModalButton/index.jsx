import * as S from './styles'
import { useState } from 'react';
import Modal from '../../Modal';
import ProductsForm from '../ProductsForm';

function ProductsModalButton() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const handleFormSubmit = (formData) => {
        console.log('Dados do Produto:', formData);
        closeModal();
    };

    return (
        <div>
            <S.ModalButton onClick={openModal}>Adicionar Produto</S.ModalButton>
            <Modal isOpen={isModalOpen} onClose={closeModal} title={'Adicionar Produto'}>
                <ProductsForm onSubmit={handleFormSubmit} />
            </Modal>
        </div>
    );
}
export default ProductsModalButton;
