import React from "react";
import styled from "styled-components";

export const MessageInfo = (props) => {
  const { message, color = "#0022ff" } = props;
  const MessageSuccess = styled.p({
    color: `${color}`,
    margin: "0",
    padding: "0",
    textAlign: "center",

    fontWeight: "bold",
  });
  return <MessageSuccess>{message}</MessageSuccess>;
};
