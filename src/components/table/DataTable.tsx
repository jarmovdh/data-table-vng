import React, { useEffect, useState } from "react";
import * as Styled from "./DataTable.styled";

import { Button } from "../button/Button";
import VerifiedIcon from "../../../public/assets/icons/verified.svg";
import WarningIcon from "../../../public/assets/icons/warning.svg";
import SearchIcon from "../../../public/assets/icons/search.svg";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { MenuItem, Select, OutlinedInput, InputAdornment } from "@mui/material";

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
];

export const DataTable = () => {
  const [sortOrder, setSortOrder] = useState("");
  const [sortedTable, setSortedTable] = useState(data);
  const [searchValue, setSearchValue] = useState("");

  const sortOptions = ["Naam", "E-mail", "Geverifieerd"];

  const handleSort = () => {
    const sort = data.sort((a, b) => {
      if (a.name < b.name) {
        return sortOrder === "Naam" ? 1 : -1;
      }
      if (b.mail < a.mail) {
        return sortOrder === "E-mail" ? 1 : -1;
      }
      if (a.verified < b.verified) {
        return sortOrder === "Geverifieerd" ? 1 : -1;
      }

      return 0;
    });

    setSortedTable(sort);
  };

  useEffect(() => {
    handleSort();
  }, [sortOrder, data]);

  return (
    <>
      <Styled.Wrapper>
        <div>
          <Styled.Label htmlFor="">Sorteer op</Styled.Label>
          <Select
            style={{ minWidth: 200 }}
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
          >
            {sortOptions.map((label) => (
              <MenuItem key={label} value={label}>
                {label}
              </MenuItem>
            ))}
          </Select>
        </div>
        <OutlinedInput
          type="text"
          placeholder="Zoek gebruiker"
          id="input-with-icon-adornment"
          onChange={(e) => {
            setSearchValue(e.target.value);
          }}
          endAdornment={
            <InputAdornment position="end">
              <SearchIcon />
            </InputAdornment>
          }
        />
      </Styled.Wrapper>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="data table" role="table">
          <Styled.TableHead>
            <TableRow role="row">
              <Styled.TableHeader role="rowheader">Naam</Styled.TableHeader>
              <Styled.TableHeader role="rowheader">Data Toegang</Styled.TableHeader>
              <Styled.TableHeader role="rowheader">e-mail</Styled.TableHeader>
              <Styled.TableHeader role="rowheader">Geverifieerd</Styled.TableHeader>
              <Styled.TableHeader role="rowheader">Account aangemaakt</Styled.TableHeader>
              <Styled.TableHeader role="rowheader">Laatst actief op</Styled.TableHeader>
              <Styled.TableHeader role="rowheader">Actie</Styled.TableHeader>
            </TableRow>
          </Styled.TableHead>
          <TableBody>
            {sortedTable
              .filter((value) => {
                if (searchValue === "") {
                  return value;
                } else if (
                  value.name.toLowerCase().includes(searchValue.toLocaleLowerCase()) ||
                  value.mail.toLowerCase().includes(searchValue.toLocaleLowerCase())
                ) {
                  return value;
                }
              })
              .map((row, index) => (
                <TableRow
                  key={index}
                  sx={{
                    "&:last-child td, &:last-child th": { border: 0 },
                  }}
                >
                  <Styled.TableRowCell scope="row" role="cell">
                    {row.name}
                  </Styled.TableRowCell>
                  <Styled.TableRowCell role="cell">{row.data}</Styled.TableRowCell>
                  <Styled.TableRowCell role="cell">{row.mail}</Styled.TableRowCell>
                  <Styled.TableCellIcons role="cell">
                    {row.verified ? <VerifiedIcon /> : <WarningIcon />}
                  </Styled.TableCellIcons>
                  <Styled.TableRowCell role="cell">{row.account}</Styled.TableRowCell>
                  <Styled.TableRowCell role="cell">{row.active}</Styled.TableRowCell>
                  <Styled.TableRowCell role="cell">{row.action}</Styled.TableRowCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};
