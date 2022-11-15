import { OutlinedInput, Select, Table, TableContainer, TableRow } from "@mui/material";
import styled from "styled-components";

export const Container = styled(TableContainer)`
  border-radius: 1px;
`;

export const CustomOutlineInput = styled(OutlinedInput)`
  border-radius: 1px;
  height: 42px;
`;

export const CustomRow = styled(TableRow)`
  border-bottom: 1px solid #757575;
`;

export const CustomSelect = styled(Select)`
  border-radius: 1px;
  height: 42px;
  min-width: 150px;
`;

export const CustomTable = styled(Table)`
  border-radius: 1px;
`;

export const Label = styled.label`
  padding-right: 10px;
`;

export const TableHead = styled.thead`
  background: #f3f3f3;
  height: 75px;
`;

export const TableHeader = styled.th`
  color: #212121;
  font-size: 16px;
  font-weight: 600;
  padding: 16px;
  text-align: "left";
`;

export const TableRowCell = styled.th`
  font-size: 13px;
  font-weight: 400;
  padding: 20px;
  text-align: "left";
`;

export const TableCellIcons = styled.th`
  text-align: "center";
`;

export const Wrapper = styled.div`
  align-items: center;
  display: flex;
  gap: 20px;
  justify-content: flex-end;
  padding-bottom: 15px;

  @media screen and (max-width: 730px) {
    align-items: flex-end;
    display: flex;
    flex-direction: column;
  }
`;
