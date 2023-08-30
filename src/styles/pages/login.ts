import { styled } from "..";

export const FormContainer = styled("div", {
  height: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});
export const FormWrapper = styled("div", {
  padding: 2,

  form: {
    display: "flex",
    flexDirection: "column",
    gap: 3,
  },
});
