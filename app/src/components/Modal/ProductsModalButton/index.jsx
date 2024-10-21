import * as S from './styles';
import { useState } from 'react';
import Modal from '../../Modal';
import ProductsForm from '../ProductsForm';

function ProductsModalButton({ fetchProducts }) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <div>
            <S.ModalButton onClick={openModal}>Adicionar Produto</S.ModalButton>
            <Modal isOpen={isModalOpen} onClose={closeModal} title={'Adicionar Produto'}>
                <ProductsForm fetchProducts={fetchProducts} onClose={closeModal} />
            </Modal>
        </div>
    );
}

export default ProductsModalButton;
