import { OutlinedInput, Select, Table, TableContainer, TableRow } from "@mui/material";
import styled from "styled-components";

export const Container = styled(TableContainer)({
  borderRadius: 1,
});

export const CustomOutlineInput = styled(OutlinedInput)({
  borderRadius: 1,
  height: 42,
});

export const CustomRow = styled(TableRow)({
  borderBottom: "1px solid #757575",
});

export const CustomSelect = styled(Select)({
  borderRadius: 1,
  height: 42,
  minWidth: 150,
});

export const CustomTable = styled(Table)({
  borderRadius: 1,
});

export const Label = styled("label")({
  paddingRight: 10,
});

export const TableHead = styled("thead")({
  background: "#F3F3F3",
  height: "75px",
});

export const TableHeader = styled("th")({
  color: "#212121",
  fontSize: 16,
  fontWeight: 600,
  padding: 16,
  textAlign: "left",
});

export const TableRowCell = styled("th")({
  fontSize: 13,
  fontWeight: 400,
  padding: 20,
  textAlign: "left",
});

export const TableCellIcons = styled("th")({
  textAlign: "center",
});

export const Wrapper = styled("div")({
  alignItems: "center",
  display: "flex",
  gap: 20,
  justifyContent: "flex-end",
  paddingBottom: 15,
  "@media (max-width: 730px)": {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
  },
});
