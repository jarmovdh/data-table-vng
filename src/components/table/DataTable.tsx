import React from "react";
import * as Styled from "./DataTable.styled";

import { Button } from "../button/Button";
import VerifiedIcon from "../../../public/assets/icons/verified.svg";
import WarningIcon from "../../../public/assets/icons/warning.svg";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const data = [
  {
    name: "Niene Boyen",
    data: "DEGO DOOK Autobranche",
    mail: "niene@maasland.nl",
    verified: true,
    account: "2 nov 2022",
    active: "2 nov 2022 11:05",
    action: (
      <>
        <Button writeIcon={true} />
        <Button lockCloseIcon={true} />
        <Button binIcon={true} />
      </>
    ),
  },
  {
    name: "Ruben Werdmulier Von Elg",
    data: "DEGO DOOK Autobranche",
    mail: "ruben@ontwikkelaar.nl",
    verified: true,
    account: "2 nov 2022",
    active: "2 nov 2022 11:05",
    action: (
      <>
        <Button writeIcon={true} />
        <Button lockCloseIcon={true} />
        <Button binIcon={true} />
      </>
    ),
  },
  {
    name: "Stephan de Preeker",
    data: "-",
    mail: "stephan@memory.com",
    verified: false,
    account: "2 nov 2022",
    active: "2 nov 2022 11:05",
    action: (
      <>
        <Button writeIcon={true} />
        <Button lockCloseIcon={true} />
        <Button binIcon={true} />
      </>
    ),
  },
  {
    name: "Niene Boyen",
    data: "DEGO DOOK Autobranche",
    mail: "niene@maasland.nl",
    verified: true,
    account: "2 nov 2022",
    active: "2 nov 2022 11:05",
    action: "",
  },
  {
    name: "Ruben Werdmulier Von Elg",
    data: "DEGO DOOK Autobranche",
    mail: "ruben@ontwikkelaar.nl",
    verified: true,
    account: "2 nov 2022",
    active: "2 nov 2022 11:05",
    action: "",
  },
  {
    name: "Stephan de Preeker",
    data: "-",
    mail: "stephan@memory.com",
    verified: false,
    account: "2 nov 2022",
    active: "2 nov 2022 11:05",
    action: "",
  },
];

export const DataTable = () => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <Styled.TableHead>
          <TableRow>
            <Styled.TableHeader>Naam</Styled.TableHeader>
            <Styled.TableHeader>Data Toegang</Styled.TableHeader>
            <Styled.TableHeader>e-mail</Styled.TableHeader>
            <Styled.TableHeader>Geverifieerd</Styled.TableHeader>
            <Styled.TableHeader>Account aangemaakt</Styled.TableHeader>
            <Styled.TableHeader>Laatst actief op</Styled.TableHeader>
            <Styled.TableHeader>Actie</Styled.TableHeader>
          </TableRow>
        </Styled.TableHead>
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
              <TableCell align="center">
                {row.verified ? <VerifiedIcon /> : <WarningIcon />}
              </TableCell>
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
