import React, { useState, useEffect } from 'react';
import { Container, Typography, Button, Snackbar, Alert, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TextField, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { getProduct } from '../Controllers/productController';
import { styled } from "@mui/material";
import { jwtDecode } from 'jwt-decode';
import { getLengthQuotation, setQuotationDetail, setQuotationHeader } from '../Controllers/quotationController';
import { useNavigate } from 'react-router-dom';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

// Styled component for TableContainer
const TableContainerStyled = styled(TableContainer)(({ theme }) => ({
    marginTop: '20px',
    width: '55%',
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    borderRadius: theme.shape.borderRadius,
    overflow: 'hidden',
    border: '2px solid #b6955f',
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

const localStorage = window.localStorage;

const createData = (name, value) => ({ name, value });

export const Cotizar = () => {
    const [products, setProducts] = useState([]);
    const [alert, setAlert] = useState({ open: false, message: '', severity: '' });
    const [quantities, setQuantities] = useState({});
    const [months, setMonths] = useState({});
    const [totals, setTotals] = useState({ subtotal: 0, iva: 0, total: 0 });
    const [code, setCode] = useState('');
    const [name, setName] = useState('');
    const [user, setUser] = useState('');
    const productIds = Array.from({ length: 12 }, (_, i) => i + 1);
    const navigate = useNavigate();

    const generatePDF = async () => {
        const doc = new jsPDF('p', 'pt', 'a4');
        
        try {
            // Crea el encabezado
            doc.setFontSize(18);
            doc.text('Cotización', 40, 40);
            doc.setFontSize(12);
            doc.text(`Código: ${code}`, 40, 70);
            doc.text(`Nombre: ${name}`, 40, 90);
            doc.text(`Usuario: ${user}`, 40, 110);
            doc.text(`Fecha: ${new Date().toLocaleDateString()}`, 40, 130);
    
            // Crea el encabezado de la tabla
            const tableColumn = ["Nombre del Producto", "Precio Mensual", "Instalación", "Cantidad", "Meses", "Total Producto"];
            const tableRows = [];
    
            products.forEach((product) => {
                const productData = [
                    product.name,
                    `$${product.mensual_sales}`,
                    `$${product.installation}`,
                    quantities[product.id] || 0,
                    months[product.id] || 0,
                    `$${calculateProductTotal(quantities[product.id] || 0, months[product.id] || 0, product).toFixed(2)}`
                ];
                tableRows.push(productData);
            });
    
            doc.autoTable({
                head: [tableColumn],
                body: tableRows,
                startY: 150,
            });
    
            // Resumen
            const summaryRows = rows.map(row => [row.name, row.value]);
    
            doc.autoTable({
                head: [["Descripción", "Valor"]],
                body: summaryRows,
                startY: doc.previousAutoTable.finalY + 20,
            });
    
            // Guarda el PDF
            doc.save(`cotizacion_${code}.pdf`);
            console.log("PDF generado y descargado");
        } catch (error) {
            console.error("Error al generar el PDF:", error);
        }
    };

    useEffect(() => {
        const fetchProductsAndQuotation = async () => {
            try {
                // Fetch Products
                const productsData = await Promise.all(
                    productIds.map(async (id) => await getProduct({ product_id: id }))
                );
                setProducts(productsData.filter(product => product !== null));
    
                // Fetch Quotation Length
                const refresh = localStorage.getItem('refresh');
                const response = await getLengthQuotation({ refresh });
                setCode(response > 0 ? response + 1 : 1);
    
                // Decode User ID
                const user_id = jwtDecode(refresh).user_id;
                setUser(user_id);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
    
        fetchProductsAndQuotation();
    }, []);    

    const handleQuantityChange = (id, value) => {
        const updatedQuantities = { ...quantities, [id]: Math.max(0, value) };
        setQuantities(updatedQuantities);
        calculateTotals(updatedQuantities, months);
    };

    const handleMonthsChange = (id, value) => {
        const updatedMonths = { ...months, [id]: Math.max(0, value) };
        setMonths(updatedMonths);
        calculateTotals(quantities, updatedMonths);
    };

    const calculateTotals = (updatedQuantities, updatedMonths) => {
        let subtotal = 0;

        products.forEach(product => {
            const quantity = parseInt(updatedQuantities[product.id] || 0, 10);
            const months = parseInt(updatedMonths[product.id] || 0, 10);
            const productTotal = (quantity * product.installation) + (months * product.mensual_sales);
            subtotal += productTotal;
        });

        const iva = subtotal * 0.12;
        const total = subtotal + iva;

        setTotals({ subtotal, iva, total });
    };

    const calculateProductTotal = (quantity, months, product) => {
        return (quantity * product.installation) + (months * product.mensual_sales);
    };

    const handleCloseAlert = () => {
        setAlert({ ...alert, open: false });
    };

    const handleSubmit = async () => {
        const quotationHeader = {
            code,
            name,
            user: parseInt(user, 10),
        };
    
        const quotationHeader_id = await setQuotationHeader({ refresh: localStorage.getItem('refresh'), data: quotationHeader });
    
        const quotationDetails = products
            .filter(product => quantities[product.id] > 0)
            .map(product => ({
                quantity: quantities[product.id],
                quotation_mensual: months[product.id] || 0,
                total: calculateProductTotal(quantities[product.id], months[product.id], product).toFixed(2),
                quotation_header: quotationHeader_id,
                product: product.id,
            }));
    
        for (let i = 0; i < quotationDetails.length; i++) {
            await setQuotationDetail({ refresh: localStorage.getItem('refresh'), data: quotationDetails[i] });
        }
    
        setAlert({ open: true, message: 'Cotización realizada con éxito', severity: 'success' });
    
        await generatePDF();
    
        navigate('/carrito');
    };
    const rows = [
        createData('Subtotal', `$${totals.subtotal.toFixed(2)}`),
        createData('IVA (12%)', `$${totals.iva.toFixed(2)}`),
        createData('Total', `$${totals.total.toFixed(2)}`)
    ];

    return (
        <Container>
            <Typography variant='h2' style={{
                textAlign: 'center',
                padding: '20px 0',
                color: '#131738'
            }}>Cotiza tu plan con nosotros</Typography>

            {/* Form for user, name, and code */}
            <Paper style={{ padding: '20px', marginBottom: '20px' }}>
                <Typography variant='h6'>Información de la Cotización</Typography>
                <TextField
                    label="Código"
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                    fullWidth
                    margin="normal"
                    required
                />
                <TextField
                    label="Nombre"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    fullWidth
                    margin="normal"
                    required
                />
                <TextField
                    label="Usuario"
                    type="number"
                    value={user}
                    onChange={(e) => setUser(e.target.value)}
                    fullWidth
                    margin="normal"
                    required
                />
            </Paper>

            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Nombre del Producto</TableCell>
                            <TableCell align="right">Precio Mensual</TableCell>
                            <TableCell align="right">Instalación</TableCell>
                            <TableCell align="center">Cantidad</TableCell>
                            <TableCell align="center">Meses</TableCell>
                            <TableCell align="right">Total Producto</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {products.map((product) => (
                            <TableRow key={product.id}>
                                <TableCell component="th" scope="row">
                                    {product.name}
                                </TableCell>
                                <TableCell align="right">${product.mensual_sales}</TableCell>
                                <TableCell align="right">${product.installation}</TableCell>
                                <TableCell align="center">
                                    <IconButton onClick={() => handleQuantityChange(product.id, (quantities[product.id] || 0) - 1)}>
                                        <RemoveIcon />
                                    </IconButton>
                                    <TextField
                                        type="number"
                                        value={quantities[product.id] || 0}
                                        onChange={(e) => handleQuantityChange(product.id, parseInt(e.target.value))}
                                        inputProps={{ min: 0 }}
                                        style={{ width: '100px', textAlign: 'center' }}
                                    />
                                    <IconButton onClick={() => handleQuantityChange(product.id, (quantities[product.id] || 0) + 1)}>
                                        <AddIcon />
                                    </IconButton>
                                </TableCell>
                                <TableCell align="center">
                                    <IconButton onClick={() => handleMonthsChange(product.id, (months[product.id] || 0) - 1)}>
                                        <RemoveIcon />
                                    </IconButton>
                                    <TextField
                                        type="number"
                                        value={months[product.id] || 0}
                                        onChange={(e) => handleMonthsChange(product.id, parseInt(e.target.value))}
                                        inputProps={{ min: 0 }}
                                        style={{ width: '100px', textAlign: 'center' }}
                                    />
                                    <IconButton onClick={() => handleMonthsChange(product.id, (months[product.id] || 0) + 1)}>
                                        <AddIcon />
                                    </IconButton>
                                </TableCell>
                                <TableCell align="right">
                                    ${calculateProductTotal(quantities[product.id] || 0, months[product.id] || 0, product).toFixed(2)}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

            <TableContainerStyled component={Paper}>
                <Typography variant="h6" align="center" gutterBottom>
                    Resumen de la Compra
                </Typography>
                <Table>
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
                </Table>
            </TableContainerStyled>

            <Button
                variant="contained"
                color="primary"
                style={{ marginTop: '20px' }}
                onClick={handleSubmit}
            >
                Cotizar
            </Button>

            <Snackbar open={alert.open} autoHideDuration={6000} onClose={handleCloseAlert}>
                <Alert onClose={handleCloseAlert} severity={alert.severity} sx={{ width: '100%' }}>
                    {alert.message}
                </Alert>
            </Snackbar>
        </Container>
    );
};