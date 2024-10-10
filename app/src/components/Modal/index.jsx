import * as S from './styles'; // Arquivo de estilos do modal

function Modal({ isOpen, onClose, children, title }) {
    if (!isOpen) return null;

    return (
        <S.ModalOverlay>
            <S.ModalContent>
                <S.ModalHeader>
                    <S.ModalTitle>{title}</S.ModalTitle>
                    <S.CloseButton onClick={onClose}>X</S.CloseButton>
                </S.ModalHeader>
                <S.ModalBody>
                    {children}
                </S.ModalBody>
            </S.ModalContent>
        </S.ModalOverlay>
    );
}

export default Modal;
