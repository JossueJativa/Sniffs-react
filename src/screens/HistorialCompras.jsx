import React, { useState, useEffect } from 'react';
import { TextField, MenuItem, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, InputAdornment, Select } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { LeftProfile } from "../components/LeftProfile";
import { userHistory } from '../Controllers/facturadorController';
import { getContract } from '../Controllers/contractController';

const localStorage = window.localStorage;

export const HistorialCompras = () => {
    const [history, setHistory] = useState([]);
    const [contracts, setContracts] = useState([]);
    const [search, setSearch] = useState('');
    const [filterDate, setFilterDate] = useState('Todo');

    useEffect(() => {
        const fetchHistory = async () => {
            const refresh = localStorage.getItem('refresh');
            try {
                const data = await userHistory({ refresh });
                if (Array.isArray(data)) {
                    setHistory(data);
                } else {
                    console.error("Expected an array from userHistory, but got:", data);
                }
            } catch (error) {
                console.error("Error fetching history:", error);
            }
        };

        const fetchContracts = async () => {
            const refresh = localStorage.getItem('refresh');
            try {
                const contractData = await getContract({ refresh });
                if (Array.isArray(contractData)) {
                    setContracts(contractData);
                } else {
                    console.error("Expected an array from getContract, but got:", contractData);
                }
            } catch (error) {
                console.error("Error fetching contracts:", error);
            }
        };

        fetchHistory();
        fetchContracts();
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

    const getContractInfo = (bill) => {
        const contract = contracts.find(contract => 
            bill.products.some(product => product.id === contract.product)
        );
        return contract ? (
            <div>
                Descripción: {contract.description}, Fecha Inicio: {contract.date_start}, Fecha Fin: {contract.date_end}, Estado: {contract.status ? 'Activo' : 'Inactivo'}, Total: {contract.total}
            </div>
        ) : 'Sin contrato';
    };

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
                                <TableCell>Contrato</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {filteredHistory.map((bill, index) => (
                                <TableRow key={index}>
                                    <TableCell>{bill.start_date}</TableCell>
                                    <TableCell>{bill.id}</TableCell>
                                    <TableCell>{bill.description}</TableCell>
                                    <TableCell>{bill.status}</TableCell>
                                    <TableCell>{bill.total}</TableCell>
                                    <TableCell>{getContractInfo(bill)}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </div>
    );
};
