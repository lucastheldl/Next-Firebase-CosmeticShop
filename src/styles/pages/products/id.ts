import { styled } from "../../index";

export const ProdContainer = styled("section", {
  maxWidth: 1120,
  margin: "7rem auto",
});

export const ProdWrapper = styled("div", {
  display: "flex",
  gap: "5rem",

  width: "100%",
  margin: "2rem auto",

  img: {
    objectFit: "cover",
  },
});

export const ProdInfo = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "2rem",

  width: "100%",
  padding: "1rem",

  strong: {
    fontSize: "$2xl",
  },
  p: {
    fontSize: "$md",
  },
  span: {
    fontSize: "$2xl",
    fontWeight: "bold",
  },
});
