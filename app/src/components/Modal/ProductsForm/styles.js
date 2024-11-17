import styled from 'styled-components';
import colors from '../../../styles/colors';

export const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    background: ${colors.white};
    padding-left: 0px;
    padding-right: 22px;
    max-width: 600px;
`;

export const FormGroup = styled.div`
    margin-bottom: 15px;
`;

export const Label = styled.label`
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 5px;
    color: ${colors.black};
`;

export const Input = styled.input`
    padding: 10px;
    border: 1px solid ${colors.darkBlue};
    border-radius: 4px;
    font-size: 16px;
    transition: border-color 0.3s;
    width: 100%;

    &:focus {
        border-color: ${colors.darkBlue};
        outline: none;
    }
`;

export const TextArea = styled.textarea`
    padding: 10px;
    border: 1px solid ${colors.darkBlue};
    border-radius: 4px;
    font-size: 16px;
    transition: border-color 0.3s;
    width: 100%;

    &:focus {
        border-color: ${colors.darkBlue};
        outline: none;
    }
`;

export const Button = styled.button`
    background-color: ${colors.darkBlue};
    color: ${colors.white};
    padding: 10px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
    transition: background-color 0.3s;
    width: 104%; /* Faz o botão ter o mesmo comprimento das caixas de texto */
    margin-top: 20px; /* Espaçamento acima do botão */

    &:hover {
        background-color: ${colors.lightBlue};
    }
`;

export const Select = styled.select`
    padding: 10px;
    border: 1px solid ${colors.darkBlue};
    border-radius: 4px;
    font-size: 16px;
    transition: border-color 0.3s;
    width: 104%;

    &:focus {
        border-color: ${colors.darkBlue};
        outline: none;
    }
`;
