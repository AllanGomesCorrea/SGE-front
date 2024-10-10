import styled from 'styled-components';
import colors from '../../styles/colors';

export const Table = styled.table`
    width: 100%;
    border-collapse: collapse;
    margin-top: 120px;
    background-color: ${colors.lightGray};
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
`;

export const TableHead = styled.thead`
    background-color: ${colors.darkWhite}; /* Define uma cor para o cabeçalho */
    color: ${colors.black};
`;

export const TableRow = styled.tr`
    &:nth-child(even) {
        background-color: ${colors.lightGray};
    }
`;

export const TableHeader = styled.th`
    padding: 12px;
    text-align: left;
    font-weight: bold;
    border-bottom: 1px solid ${colors.darkBlue};
`;


export const TableCell = styled.td`
    padding: 12px;
    border-bottom: 1px solid ${colors.darkBlue};
    text-align: left;
`;
