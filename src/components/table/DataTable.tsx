import React, { useEffect, useState } from "react";
import * as Styled from "./DataTable.styled";

import data from "../../../fixtures/mockData";
import VerifiedIcon from "../../../public/assets/icons/verified.svg";
import WarningIcon from "../../../public/assets/icons/warning.svg";
import SearchIcon from "../../../public/assets/icons/search.svg";

import TableBody from "@mui/material/TableBody";
import { MenuItem, InputAdornment, Table } from "@mui/material";
import { Button } from "../button/Button";

export const DataTable = () => {
  const [sortOrder, setSortOrder] = useState("");
  const [sortedTable, setSortedTable] = useState(data);
  const [searchValue, setSearchValue] = useState("");

  const sortOptions = ["Naam", "E-mail", "Geverifieerd"];

  const filteredTable = sortedTable.filter((value) => {
    if (searchValue === "") {
      return value;
    } else if (
      value.fullName.toLowerCase().includes(searchValue.toLocaleLowerCase()) ||
      value.mail.toLowerCase().includes(searchValue.toLocaleLowerCase())
    ) {
      return value;
    }
  });

  const handleSort = () => {
    const sort = data.sort((a, b) => {
      if (a.fullName < b.fullName) {
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

  const buttonIcons = data.map((entry) => entry.setActions);

  return (
    <>
      <Styled.Wrapper>
        <div>
          <Styled.Label>Sorteer op</Styled.Label>
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
        <Styled.CustomOutlineInput
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
        <Table aria-label="data table">
          <Styled.TableHead>
            <Styled.CustomRow>
              <Styled.TableHeader>Naam</Styled.TableHeader>
              <Styled.TableHeader>Data Toegang</Styled.TableHeader>
              <Styled.TableHeader>e-mail</Styled.TableHeader>
              <Styled.TableHeader>Geverifieerd</Styled.TableHeader>
              <Styled.TableHeader>Account aangemaakt</Styled.TableHeader>
              <Styled.TableHeader>Laatst actief op</Styled.TableHeader>
              <Styled.TableHeader>Actie</Styled.TableHeader>
            </Styled.CustomRow>
          </Styled.TableHead>
          <TableBody>
            {filteredTable.map((row, index) => (
              <Styled.CustomRow key={index}>
                <Styled.TableRowCell scope="row">{row.fullName}</Styled.TableRowCell>
                <Styled.TableRowCell>{row.accesTo}</Styled.TableRowCell>
                <Styled.TableRowCell>{row.mail}</Styled.TableRowCell>
                <Styled.TableCellIcons>
                  {row.verified ? <VerifiedIcon /> : <WarningIcon />}
                </Styled.TableCellIcons>
                <Styled.TableRowCell>{row.accountCreated}</Styled.TableRowCell>
                <Styled.TableRowCell>{row.lastActive}</Styled.TableRowCell>
                <Styled.TableRowCell>
                  {buttonIcons.map((action, index) => (
                    <Button key={index} icon={action[index]} />
                  ))}
                </Styled.TableRowCell>
              </Styled.CustomRow>
            ))}
          </TableBody>
        </Table>
      </Styled.Container>
    </>
  );
};
