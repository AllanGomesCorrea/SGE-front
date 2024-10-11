import * as S from './styles'
import { useState } from 'react';
import Modal from '../../Modal';
import BrandsForm from '../BrandsForm';

function BrandsModalButton() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const handleFormSubmit = (formData) => {
        console.log('Dados da Marca:', formData);
        closeModal();
    };

    return (
        <div>
            <S.ModalButton onClick={openModal}>Adicionar Marca</S.ModalButton>
            <Modal isOpen={isModalOpen} onClose={closeModal} title={'Adicionar Marca'}>
                <BrandsForm onSubmit={handleFormSubmit} />
            </Modal>
        </div>
    );
}
export default BrandsModalButton;
