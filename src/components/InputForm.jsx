import styled from "styled-components";

export const InputForm = (props) => {
  const { type, placeHolder, urlIcon, altIcon, handleChange, name, value } =
    props;
  return (
    <ContainerIconInput>
      {urlIcon ? (
        <FigureIcon>
          <Icon src={urlIcon} alt={altIcon} />
        </FigureIcon>
      ) : null}
      <MyInput
        type={type}
        value={value}
        placeholder={placeHolder}
        onChange={handleChange}
        name={name}
        required
      />
    </ContainerIconInput>
  );
};

const ContainerIconInput = styled.div({
  position: "relative",
  minWidth: "5rem",
  border: "none",
  outline: "none",
  borderRadius: "10px",
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
  padding: "1.2rem 1.2rem 1.2rem 2.5rem",
  width: "100%",

  borderRadius: "10px",
});
