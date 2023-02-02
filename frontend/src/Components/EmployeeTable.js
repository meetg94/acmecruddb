import React from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from "@mui/material";
import { AiFillDelete } from 'react-icons/ai'
export default function EmployeeTable({ data }) {

  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Employee Name: </TableCell>
            <TableCell align="right">Age</TableCell>
            <TableCell align="right">Department</TableCell>
            <TableCell align="right">Remove</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map(employee => (
            <TableRow key={employee._id}>
              <TableCell component="th" scope="row">
                {employee.name}
              </TableCell>
              <TableCell align="right">{employee.age}</TableCell>
              <TableCell align="right">{employee.department}</TableCell>
              <TableCell align="right" ><AiFillDelete onClick={() => console.log("clicked")} /></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
