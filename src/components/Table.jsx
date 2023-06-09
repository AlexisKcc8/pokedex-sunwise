import styled from "styled-components";

export const Table = styled.table({
  tableLayout: "fixed",
  width: "100%",
  borderCollapse: "collapse",
  border: "1px solid var(--bg-thead)",

  textAlign: "center",

  "& > thead tr th": {
    backgroundColor: "var(--bg-thead)",
    padding: ".5rem",
    zIndex: "50",
  },
  "&:hover": {
    cursor: "pointer",
  },

  "& > tbody td": {
    padding: ".2rem",
  },

  "& > tbody tr:nth-child(odd)": {
    backgroundColor: "var(--tbody-tr-nth-child-odd)",
  },
  "& > tbody tr:nth-child(even)": {
    backgroundColor: "var(--tbody-tr-nth-child-even)",
  },
});
