import styled from "styled-components";

export const MyButton = (props) => {
  const { title, bgColor = "var(--bg-btns)", event } = props;

  return (
    <Button onClick={event} name="my-button">
      {title}
    </Button>
  );
};
const Button = styled.button({
  border: "none",
  minWidth: "5rem",
  padding: ".7rem",
  borderRadius: ".5rem",
  backgroundColor: "var(--bg-btns)",
  zIndex: "100",
});
