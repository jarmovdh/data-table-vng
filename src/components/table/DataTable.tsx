import React, { useEffect, useState } from "react";
import * as Styled from "./DataTable.styled";

import data from "../../../fixtures/mockData";
import VerifiedIcon from "../../../public/assets/icons/verified.svg";
import WarningIcon from "../../../public/assets/icons/warning.svg";
import SearchIcon from "../../../public/assets/icons/search.svg";

import TableBody from "@mui/material/TableBody";
import { MenuItem, InputAdornment, OutlinedInput, Table } from "@mui/material";
import { Button } from "../button/Button";

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
        return sortOrder === "E-mail" ? -1 : 1;
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

  const buttonIcons = data.map((entry) => entry.action);
  console.log(buttonIcons);
  return (
    <>
      <Styled.Wrapper>
        <div>
          <Styled.Label htmlFor="">Sorteer op</Styled.Label>
          <Styled.CustomSelect
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value as string)}
          >
            {sortOptions.map((label) => (
              <MenuItem key={label} value={label}>
                {label}
              </MenuItem>
            ))}
          </Styled.CustomSelect>
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

      <Styled.Container>
        <Table aria-label="data table" role="table">
          <Styled.TableHead>
            <Styled.CustomRow role="row">
              <Styled.TableHeader role="rowheader">Naam</Styled.TableHeader>
              <Styled.TableHeader role="rowheader">Data Toegang</Styled.TableHeader>
              <Styled.TableHeader role="rowheader">e-mail</Styled.TableHeader>
              <Styled.TableHeader role="rowheader">Geverifieerd</Styled.TableHeader>
              <Styled.TableHeader role="rowheader">Account aangemaakt</Styled.TableHeader>
              <Styled.TableHeader role="rowheader">Laatst actief op</Styled.TableHeader>
              <Styled.TableHeader role="rowheader">Actie</Styled.TableHeader>
            </Styled.CustomRow>
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
                <Styled.CustomRow
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
                  <Styled.TableRowCell role="cell">
                    <Button icon={row.action} />
                  </Styled.TableRowCell>
                </Styled.CustomRow>
              ))}
          </TableBody>
        </Table>
      </Styled.Container>
    </>
  );
};
