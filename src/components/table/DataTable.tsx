import React, { useState } from "react";
import * as Styled from "./DataTable.styled";

import data from "../../../fixtures/mockData";
import VerifiedIcon from "../../../public/assets/icons/verified.svg";
import WarningIcon from "../../../public/assets/icons/warning.svg";
import SearchIcon from "../../../public/assets/icons/search.svg";
import BinIcon from "../../../public/assets/icons/bin.svg";
import LockCloseIcon from "../../../public/assets/icons/lockclose.svg";
import UnlockIcon from "../../../public/assets/icons/unlock.svg";
import WriteIcon from "../../../public/assets/icons/write.svg";
import SettingsIcon from "../../../public/assets/icons/settings.svg";

import TableBody from "@mui/material/TableBody";
import { MenuItem, InputAdornment, Table, TableRow } from "@mui/material";
import { Button } from "../button/Button";

interface sortKeys {
  id: number;
  fullName: string;
  accessTo: string;
  mail: string;
  verified: boolean;
  accountCreated: string;
  lastActive: string;
  setActions: string;
}

export const DataTable = () => {
  const [sortOrder, setSortOrder] = useState("");
  const [sortedTable, setSortedTable] = useState(data);
  const [searchValue, setSearchValue] = useState("");

  const sortOptions = [
    {
      label: "fullName",
      value: "Name",
    },
    {
      label: "mail",
      value: "E-mail",
    },
    {
      label: "verified",
      value: "Geverifieerd",
    },
    {
      label: "accessTo",
      value: "Toegang",
    },
  ];

  const filteredTable = sortedTable.filter((value) => {
    if (searchValue === "") {
      return true;
    }
    if (
      value.fullName.toLowerCase().includes(searchValue.toLocaleLowerCase()) ||
      value.mail.toLowerCase().includes(searchValue.toLocaleLowerCase())
    ) {
      return true;
    }
  });

  const handleSort = (sortOptions: string) => {
    const sort = data.sort((a, b) => {
      const keyA = a[sortOptions as keyof sortKeys];
      const keyB = b[sortOptions as keyof sortKeys];

      if (keyA < keyB) {
        return -1;
      }
      if (keyA > keyB) {
        return 1;
      }
      return 0;
    });

    setSortedTable(sort);
  };

  return (
    <>
      <Styled.Wrapper>
        <div>
          <Styled.Label>Sorteer op</Styled.Label>
          <Styled.CustomSelect
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value as string)}
          >
            {sortOptions.map(({ label, value }) => (
              <MenuItem key={label} value={value} onClick={() => handleSort(label)}>
                {value}
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
                <Styled.TableRowCell>{row.accessTo}</Styled.TableRowCell>
                <Styled.TableRowCell>{row.mail}</Styled.TableRowCell>
                <Styled.TableCellIcons>
                  {row.verified ? <VerifiedIcon /> : <WarningIcon />}
                </Styled.TableCellIcons>
                <Styled.TableRowCell>{row.accountCreated}</Styled.TableRowCell>
                <Styled.TableRowCell>{row.lastActive}</Styled.TableRowCell>
                <Styled.TableRowCell>
                  {row.setActions.map((icon, index) => (
                    <Button key={index}>
                      {icon === "bin" && <BinIcon />}
                      {icon === "lock" && <LockCloseIcon />}
                      {icon === "unlock" && <UnlockIcon />}
                      {icon === "write" && <WriteIcon />}
                      {icon === "settings" && <SettingsIcon />}
                    </Button>
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
