import styled from "styled-components";

export const Input = styled("input")({
  padding: 10,
});

export const Label = styled("label")({
  paddingRight: 10,
});
export const Select = styled("select")({
  color: " #757575",
  padding: 10,
});

export const TableHead = styled("thead")({
  background: "#F3F3F3",
  height: "75px",
});

export const TableHeader = styled("th")({
  borderBottom: "1px solid #000",
  fontSize: 16,
  fontWeight: "bold",
  padding: 16,
  textAlign: "left",
});

export const TableRowCell = styled("th")({
  borderBottom: "1px solid #000",
  fontSize: 13,
  padding: 20,
  textAlign: "left",
});

export const TableCellIcons = styled("th")({
  borderBottom: "1px solid #000",
  textAlign: "center",
});

export const Wrapper = styled("div")({
  alignItems: "center",
  display: "flex",
  gap: 20,
  justifyContent: "flex-end",
  paddingBottom: 15,
});
