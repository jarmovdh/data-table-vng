import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { BLOCKED_PAGES } from 'next/dist/shared/lib/constants';


function createData(
  name: string,
  data: string,
  mail: string,
  verified: string,
	account: string,
	active: string,
	action: "",
) {
  return { name, data, mail, verified, account, active, action, };
}

const rows = [
  createData('Niene Boyen', 'DEGO DOOK Autobranche', 'niene@maasland.nl', "", "2 nov 2022", "2 nov 2022 11:05", ""),
  createData('Ruben Werdmulier Von Elg', 'DEGO DOOK Autobranche', 'ruben@ontwikkelaar.nl', "", "2 nov 2022", "2 nov 2022 11:05", ""),
	createData('Stephan de Preeker', '-', 'stephan@memory.com', "", "2 nov 2022", "2 nov 2022 11:05", ""),
	createData('Niene Boyen', 'DEGO DOOK Autobranche', 'niene@maasland.nl', "", "2 nov 2022", "2 nov 2022 11:05", ""),
  createData('Ruben Werdmulier Von Elg', 'DEGO DOOK Autobranche', 'ruben@ontwikkelaar.nl', "", "2 nov 2022", "2 nov 2022 11:05", ""),
  createData('Stephan de Preeker', '-', 'stephan@memory.com', "", "2 nov 2022", "2 nov 2022 11:05", ""),
];

export const DataTable = () => {
	return (
		   <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
				<TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Data Toegang</TableCell>
            <TableCell>e-mail</TableCell>
            <TableCell >Geverifieerd</TableCell>
						<TableCell >Account aangemaakt</TableCell>
						<TableCell >Laatst actief op</TableCell>
						<TableCell >Actie</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row" >
                {row.name}
              </TableCell>
              <TableCell align="left">{row.data}</TableCell>
              <TableCell align="left">{row.mail}</TableCell>
              <TableCell align="left">{row.verified}</TableCell>
							<TableCell align="left">{row.account}</TableCell>
							<TableCell align="left">{row.active}</TableCell>
							<TableCell align="left">{row.action}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
	)
}
