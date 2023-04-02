import styled from "styled-components";

export const InputForm = (props) => {
  const { type, placeHolder, urlIcon, altIcon } = props;
  return (
    <ContainerIconInput>
      {urlIcon ? (
        <FigureIcon>
          <Icon src={urlIcon} alt={altIcon} />
        </FigureIcon>
      ) : null}
      <MyInput type={type} placeholder={placeHolder} required />
    </ContainerIconInput>
  );
};

const ContainerIconInput = styled.div({
  position: "relative",
  minWidth: "5rem",
  backgroundColor: "red",
});
const FigureIcon = styled.figure({
  margin: "0",
  padding: "0",
  position: "absolute",
  width: "1.4rem",
  left: "10px",
  top: "50%",
  transform: "translateY(-50%)",
});
const Icon = styled.img({
  width: "100%",
  height: "100%",
});
const MyInput = styled.input({
  boxSizing: "border-box",
  color: "#191919",
  padding: "15px 15px 15px 35px",
  width: "100%",
});
