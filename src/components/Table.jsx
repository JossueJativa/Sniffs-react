import React from 'react';
import {
    Table as MuiTable,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Typography,
    styled
} from "@mui/material";

function createData(name, value) {
    return { name, value };
}

// Calcula el subtotal, IVA, y total
const calculateTotals = (items) => {
    const IVA_RATE = 0.12; // Tasa de IVA del 12%
    const subtotal = items.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    const iva = subtotal * IVA_RATE;
    const total = subtotal + iva;
    return { subtotal, iva, total };
};

const TableContainerStyled = styled(TableContainer)(({ theme }) => ({
    marginBottom: '20px',
    width: '55%',
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    borderRadius: theme.shape.borderRadius,
    overflow: 'hidden',
    borderColor: '2px solid #b6955f !important',
    [theme.breakpoints.down('md')]: {
        width: '60%',
    },
    [theme.breakpoints.down('sm')]: {
        width: '80%',
    },
    [theme.breakpoints.down('xs')]: {
        width: '100%',
    },
}));

export const SummaryTable = ({ items }) => {
    const { subtotal, iva, total } = calculateTotals(items);

    const rows = [
        createData('Subtotal', `$${subtotal.toFixed(2)}`),
        createData('IVA (12%)', `$${iva.toFixed(2)}`),
        createData('Total', `$${total.toFixed(2)}`)
    ];

    return (
        <TableContainerStyled component={Paper}>
            <Typography variant="h6" align="center" gutterBottom>
                Resumen de la Compra
            </Typography>
            <MuiTable>
                <TableHead>
                    <TableRow>
                        <TableCell align="left">Descripción</TableCell>
                        <TableCell align="right">Valor</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.name}>
                            <TableCell align="left">{row.name}</TableCell>
                            <TableCell align="right">{row.value}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </MuiTable>
        </TableContainerStyled>
    );
};
