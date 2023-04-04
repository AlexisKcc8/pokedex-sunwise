import React from "react";
import styled from "styled-components";

export const MessageInfo = (props) => {
  const { message, color = "#0022ff" } = props;

  return <MessageSuccess>{message}</MessageSuccess>;
};
const MessageSuccess = styled.p({
  color: `blue`,
  margin: "0",
  padding: "0",
  textAlign: "center",

  fontWeight: "bold",
});
