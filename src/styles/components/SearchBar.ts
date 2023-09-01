import { styled } from "..";

export const SearchContainer = styled("form", {
  display: "flex",
  alignItems: "center",

  maxWidth: "500px",
  position: "relative",
  width: "100%",

  input: {
    width: "100%",
    padding: 10,

    borderRadius: 10,
    border: "none",

    fontSize: "md",
  },
  button: {
    position: "absolute",
    right: 10,

    padding: 3,

    background: "transparent",
    border: "none",

    cursor: "pointer",
  },
});
