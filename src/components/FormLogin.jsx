import styled from "styled-components";
import { InputForm } from "./InputForm";
import { MyButton } from "./MyButton";
import { useAuth } from "../hooks/useAuth";
import { MessageInfo } from "./MessageInfo";

export const FormLogin = () => {
  const {
    handleSubmit,
    handleChange,
    newSignUp,
    user,
    isSignUp,
    passwordEquals,
    registerSuccess,
    errorLogin,
  } = useAuth();
  return (
    <MyForm onSubmit={handleSubmit}>
      {isSignUp ? (
        <SpanPrevios onClick={() => newSignUp(false)}>⬅️</SpanPrevios>
      ) : null}
      {isSignUp ? (
        <h2>Ingresa los siguientes datos para registrarte</h2>
      ) : (
        <h2>Inicio de sesión - Pokédex ☀️</h2>
      )}
      {isSignUp ? (
        <InputForm
          type={"text"}
          name="name"
          value={user.name}
          handleChange={handleChange}
          placeHolder={"Nombre de usuario"}
          urlIcon="/icons/icon-user.svg"
        />
      ) : null}
      <InputForm
        type={"email"}
        name="email"
        value={user.email}
        handleChange={handleChange}
        placeHolder={"Correo Electronico"}
        urlIcon="/icons/icon-email.svg"
      />

      <InputForm
        type={"password"}
        name="password"
        value={user.password}
        handleChange={handleChange}
        placeHolder={"Contraseña"}
        urlIcon="/icons/pws.svg"
      />
      {errorLogin ? (
        <MessageInfo
          message="Estos datos no pertenecen a ningun usuario, por favor reviselas"
          color="red"
        />
      ) : null}
      {isSignUp ? (
        <InputForm
          type={"password"}
          name="confirmPassword"
          value={user.confirmPassword}
          handleChange={handleChange}
          placeHolder={"Confirmar Contraseña"}
          urlIcon="/icons/pws.svg"
        />
      ) : null}
      {passwordEquals ? null : (
        <MessageInfo
          message="Las Contraseñas no coinciden, por favor revisalas."
          color="red"
        />
      )}
      {registerSuccess ? (
        <MessageInfo message="Usuario registrado con éxito!." color="green" />
      ) : null}
      <MyButton title={isSignUp ? "Registrarse" : "Iniciar Sesión"} />
      {isSignUp ? null : (
        <p>
          ¿No tienes una cuenta?{" "}
          <SpanRegister onClick={() => newSignUp(true)}>
            Registrate
          </SpanRegister>
        </p>
      )}
    </MyForm>
  );
};
const MyForm = styled.form({
  position: "relative",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  padding: "2em",
  gap: "2em",
  textAlign: "center",
});
const SpanRegister = styled.span({
  color: "blue",
  fontWeight: "bold",
  "&:hover": {
    cursor: "pointer",
  },
});
const SpanPrevios = styled.span({
  position: "absolute",
  top: "4rem",
  left: "0",
  fontWeight: "bold",
  fontSize: "2rem",
  "&:hover": {
    cursor: "pointer",
  },
});
