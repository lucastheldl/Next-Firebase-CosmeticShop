import { styled } from "..";
import Link from "next/link";

export const CardContainer = styled(Link, {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: 3,

  overflow: "hidden",
  padding: "0 0 1rem 0",

  borderRadius: 5,
  backgroundColor: "$gray100",
  boxShadow: "0 0 10px 0 0.7",
  border: `1px solid transparent`,
  cursor: "pointer",

  textDecoration: "none",
  color: "$gray800",
  "&:hover": {
    border: `1px solid $gray800`,
    transition: "0.2s border-color",
  },
});
