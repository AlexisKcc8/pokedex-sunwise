import styled from "styled-components";
const MyForm = styled.form({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  padding: "2em",
  gap: "2em",
});
export const Form = (props) => {
  const { children } = props;
  return <MyForm>{children}</MyForm>;
};
