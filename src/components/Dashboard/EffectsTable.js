import React from 'react';
import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Data from '../../helpers/Data.js'


function table(){
    return(
    <TableContainer component={Paper}>
      <Table>
          <TableHead style={{backgroundColor: '#616161'}}>
            <TableRow>
                <TableCell>Effect Name</TableCell>
                <TableCell>Review Status</TableCell>
                <TableCell>Destination</TableCell>
                <TableCell>Delivery</TableCell>
                <TableCell>Created</TableCell>
                <TableCell>Last Updated</TableCell>
                <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Data.map((data, index)=>(
                <TableRow key={index}>
                  <TableCell> {data.title} </TableCell>
                  <TableCell> {data.active} </TableCell>
                  <TableCell> {data.platform} </TableCell>
                  <TableCell> Altaha Ansari </TableCell>
                  <TableCell> {data.date} </TableCell>
                  <TableCell> {data.date} </TableCell>
                  <TableCell>  </TableCell>
                </TableRow>
            ))}
          </TableBody>
      </Table>
    </TableContainer>)
}

export default table;