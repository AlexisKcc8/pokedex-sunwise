import styled from "styled-components";
import { Form } from "../components/Form";
import { InputForm } from "../components/InputForm";
import { MyButton } from "../components/MyButton";
import { ContainerFluid } from "../components/ContainerFluid";

export const LoginPage = () => {
  return (
    <ContainerFluid>
      <ContainerCenterLogin>
        <SectionDataAndImageLogin>
          <h2>Inicio de sesión - Pokédex</h2>
          <Form>
            <InputForm
              type={"email"}
              placeHolder={"Correo Electronico"}
              urlIcon="/icons/icon-email.svg"
            />

            <InputForm
              type={"password"}
              placeHolder={"Contraseña"}
              urlIcon="/icons/pws.svg"
            />
            <MyButton title={"Iniciar Sesión"} />
          </Form>
          <a>Crear Cuenta</a>
        </SectionDataAndImageLogin>
        <SectionDataAndImageLogin>
          <FigureImgLogin>
            <LayerFigure />
          </FigureImgLogin>
        </SectionDataAndImageLogin>
      </ContainerCenterLogin>
    </ContainerFluid>
  );
};
const ContainerCenterLogin = styled.section({
  width: "60%",
  height: "35rem",
  display: "flex",
  justifyContent: "center",
  border: "1px solid green",
  borderRadius: "10px",
  overflow: "hidden",
});
const SectionDataAndImageLogin = styled.section({
  width: "50%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
});
const FigureImgLogin = styled.figure({
  position: "relative",
  width: "100%",
  height: "100%",
  margin: "0",
  overflow: "hidden",
  backgroundImage: "url(/images/img-pikachu.jpg)",
  backgroundPosition: "center",
  backgroundSize: "cover",
});

const LayerFigure = styled.div({
  width: "100%",
  height: "100%",
  position: "absolute",
  top: "0",
  left: "0",
  backgroundColor: "rgba(0, 0, 0, 0.489)",
});
