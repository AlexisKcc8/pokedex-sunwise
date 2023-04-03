import styled from "styled-components";
import { FormLogin } from "../components/FormLogin";

import { ContainerFluid } from "../components/ContainerFluid";

export const LoginPage = () => {
  return (
    <ContainerFluid>
      <ContainerCenterLogin>
        <SectionDataAndImageLogin>
          <FormLogin />
          <SvgOlaTop xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="var(--bg-thead)"
              fillOpacity="1"
              d="M0,320L60,293.3C120,267,240,213,360,186.7C480,160,600,160,720,181.3C840,203,960,245,1080,245.3C1200,245,1320,203,1380,181.3L1440,160L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
            ></path>
          </SvgOlaTop>
          <SvgOlaBottom
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
          >
            <path
              fill="var(--bg-thead)"
              fillOpacity="1"
              d="M0,160L60,176C120,192,240,224,360,197.3C480,171,600,85,720,58.7C840,32,960,64,1080,69.3C1200,75,1320,53,1380,42.7L1440,32L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
            ></path>
          </SvgOlaBottom>
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
  position: "relative",
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
const SvgOlaTop = styled.svg({
  position: "absolute",
  top: "0",
  left: "0",
  width: "100%",
  zIndex: "-1",
});
const SvgOlaBottom = styled.svg({
  position: "absolute",
  bottom: "0",
  left: "0",
  width: "100%",
  zIndex: "-1",
});
const LayerFigure = styled.div({
  width: "100%",
  height: "100%",
  position: "absolute",
  top: "0",
  left: "0",
  backgroundColor: "rgba(0, 0, 0, 0.489)",
});
