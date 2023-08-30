import { styled } from "..";

export const CardContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  overflow: "hidden",
  gap: 3,
  padding: "0 0 1rem 0",
  borderRadius: 5,
  backgroundColor: "$gray100",
  boxShadow: "0 0 10px 0 0.7",
  cursor: "pointer",
  border: `1px solid transparent`,
  "&:hover": {
    border: `1px solid $gray800`,
    transition: "0.2s border-color",
  },
});
