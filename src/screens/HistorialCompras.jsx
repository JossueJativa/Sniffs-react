import React, { useState, useEffect } from 'react';
import { TextField, MenuItem, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, InputAdornment, Select } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { LeftProfile } from "../components/LeftProfile";
import { userHistory } from '../Controllers/facturadorController';

const localStorage = window.localStorage;

export const HistorialCompras = () => {
    const [history, setHistory] = useState([]);
    const [search, setSearch] = useState('');
    const [filterDate, setFilterDate] = useState('Todo');

    useEffect(() => {
        const fetchHistory = async () => {
            const refresh = localStorage.getItem('refresh');
            try {
                const data = await userHistory({ refresh });
                // Verifica que data sea un array
                if (Array.isArray(data)) {
                    setHistory(data);
                } else {
                    console.error("Expected an array from userHistory, but got:", data);
                }
            } catch (error) {
                console.error("Error fetching history:", error);
            }
        };

        fetchHistory();
    }, []);

    const handleSearchChange = (event) => {
        setSearch(event.target.value);
    };

    const handleFilterDateChange = (event) => {
        setFilterDate(event.target.value);
    };

    const filteredHistory = history.filter(bill => {
        return bill.products && bill.products.some(product => 
            product.product.toLowerCase().includes(search.toLowerCase())
        );
    });

    return (
        <div className="grid-profile">
            <div className="grid-item">
                <LeftProfile />
            </div>
            <div className="grid-item">
                <h2>Historial de compras</h2>
                <TextField
                    label="Buscar por número de factura"
                    variant="outlined"
                    value={search}
                    onChange={handleSearchChange}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <SearchIcon />
                            </InputAdornment>
                        ),
                    }}
                    style={{ marginRight: 20 }}
                />
                <Select
                    value={filterDate}
                    onChange={handleFilterDateChange}
                    displayEmpty
                    variant="outlined"
                    style={{ minWidth: 120 }}
                >
                    <MenuItem value="Todo">Todo</MenuItem>
                    <MenuItem value="Hoy">Hoy</MenuItem>
                    <MenuItem value="Última semana">Última semana</MenuItem>
                    <MenuItem value="Último mes">Último mes</MenuItem>
                </Select>
                <TableContainer component={Paper} style={{ marginTop: 20 }}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Fecha</TableCell>
                                <TableCell>Factura</TableCell>
                                <TableCell>Descripción</TableCell>
                                <TableCell>Estado</TableCell>
                                <TableCell>Total</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {filteredHistory.map((bill, index) => (
                                <TableRow key={index}>
                                    <TableCell>{/* Fecha aquí si está disponible */}</TableCell>
                                    <TableCell>{/* Factura aquí si está disponible */}</TableCell>
                                    <TableCell>
                                        {bill.products.map((product, idx) => (
                                            <div key={idx}>{product.product} x {product.quantity}</div>
                                        ))}
                                    </TableCell>
                                    <TableCell>{/* Estado aquí si está disponible */}</TableCell>
                                    <TableCell>{bill.total}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </div>
    );
};