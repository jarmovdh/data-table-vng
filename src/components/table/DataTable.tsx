import React from "react";

import VerifiedIcon from "../../../public/assets/icons/verified.svg";
import WarningIcon from "../../../public/assets/icons/warning.svg";

import styled from "@emotion/styled";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(
  name: string,
  data: string,
  mail: string,
  verified: any,
  account: string,
  active: string,
  action: "",
) {
  return { name, data, mail, verified, account, active, action };
}

const data = [
  {
    name: "Niene Boyen",
    data: "DEGO DOOK Autobranche",
    mail: "niene@maasland.nl",
    verified: <VerifiedIcon />,
    account: "2 nov 2022",
    active: "2 nov 2022 11:05",
    action: "",
  },
  {
    name: "Ruben Werdmulier Von Elg",
    data: "DEGO DOOK Autobranche",
    mail: "ruben@ontwikkelaar.nl",
    verified: <VerifiedIcon />,
    account: "2 nov 2022",
    active: "2 nov 2022 11:05",
    action: "",
  },
  {
    name: "Stephan de Preeker",
    data: "-",
    mail: "stephan@memory.com",
    verified: <WarningIcon />,
    account: "2 nov 2022",
    active: "2 nov 2022 11:05",
    action: "",
  },
  {
    name: "Niene Boyen",
    data: "DEGO DOOK Autobranche",
    mail: "niene@maasland.nl",
    verified: <VerifiedIcon />,
    account: "2 nov 2022",
    active: "2 nov 2022 11:05",
    action: "",
  },
  {
    name: "Ruben Werdmulier Von Elg",
    data: "DEGO DOOK Autobranche",
    mail: "ruben@ontwikkelaar.nl",
    verified: <VerifiedIcon />,
    account: "2 nov 2022",
    active: "2 nov 2022 11:05",
    action: "",
  },
  {
    name: "Stephan de Preeker",
    data: "-",
    mail: "stephan@memory.com",
    verified: <WarningIcon />,
    account: "2 nov 2022",
    active: "2 nov 2022 11:05",
    action: "",
  },
];

const TableHead = styled("thead")({
  background: "#F3F3F3",
  height: "75px",
});

export const DataTable = () => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell sx={{ fontWeight: "bold" }}>Naam</TableCell>
            <TableCell sx={{ fontWeight: "bold" }}>Data Toegang</TableCell>
            <TableCell sx={{ fontWeight: "bold" }}>e-mail</TableCell>
            <TableCell sx={{ fontWeight: "bold" }}>Geverifieerd</TableCell>
            <TableCell sx={{ fontWeight: "bold" }}>Account aangemaakt</TableCell>
            <TableCell sx={{ fontWeight: "bold" }}>Laatst actief op</TableCell>
            <TableCell sx={{ fontWeight: "bold" }}>Actie</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, index) => (
            <TableRow
              key={index}
              sx={{
                "&:last-child td, &:last-child th": { border: 0 },
              }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="left">{row.data}</TableCell>
              <TableCell align="left">{row.mail}</TableCell>
              <TableCell align="center">{row.verified}</TableCell>
              <TableCell align="left">{row.account}</TableCell>
              <TableCell align="left">{row.active}</TableCell>
              <TableCell align="left">{row.action}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
