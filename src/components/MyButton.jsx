import styled from "styled-components";

export const MyButton = (props) => {
  const { title } = props;
  return <Button>{title}</Button>;
};
const Button = styled.button({
  border: "none",
  minWidth: "5rem",
  padding: ".7rem",
  borderRadius: ".5rem",
  backgroundColor: "var(--bg-btns)",
});
