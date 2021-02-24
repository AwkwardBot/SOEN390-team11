import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});
const ProductInventory = (props)=> {
    const {rows} = props;
    const classes = useStyles();
    console.log(rows);

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell align="center">Product Name</TableCell>
                        <TableCell align="center">Inventory</TableCell>
                        <TableCell align="center">Location</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row)=> (
                        <TableRow >
                            <TableCell align="center" >{row.productname}
                            </TableCell>
                            <TableCell align="center" >{row.quantity}
                            </TableCell>
                            <TableCell align="center" >{row.location}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
export {ProductInventory};