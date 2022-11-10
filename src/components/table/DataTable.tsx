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
          <Styled.Select value={sortOrder} onChange={(e) => setSortOrder(e.target.value)}>
            {sortOptions.map((label) => (
              <option key={label} label={label} value={label}>
                {label}
              </option>
            ))}
          </Styled.Select>
        </div>
        <SearchIcon style={{ position: "absolute" }} />
        <Styled.Input
          type="text"
          placeholder="Zoek gebruiker"
          onChange={(e) => {
            setSearchValue(e.target.value);
          }}
        />
      </Styled.Wrapper>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="data table">
          <Styled.TableHead>
            <TableRow role="row">
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
                  <Styled.TableRowCell scope="row">{row.name}</Styled.TableRowCell>
                  <Styled.TableRowCell>{row.data}</Styled.TableRowCell>
                  <Styled.TableRowCell>{row.mail}</Styled.TableRowCell>
                  <Styled.TableCellIcons align="center">
                    {row.verified ? <VerifiedIcon /> : <WarningIcon />}
                  </Styled.TableCellIcons>
                  <Styled.TableRowCell>{row.account}</Styled.TableRowCell>
                  <Styled.TableRowCell>{row.active}</Styled.TableRowCell>
                  <Styled.TableRowCell>{row.action}</Styled.TableRowCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};
