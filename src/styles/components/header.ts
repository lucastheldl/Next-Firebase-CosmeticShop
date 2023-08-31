import { styled } from "..";
import Link from "next/link";

export const HeaderContainer = styled("header", {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "1.5rem",
  backgroundColor: "$gray100",
  ul: {
    display: "flex",
    gap: 3,

    listStyleType: "none",

    li: {
      marginLeft: "2rem",
    },
  },
});

export const OptionLink = styled(Link, {
  textDecoration: "none",
  color: "$gray800",
  fontSize: "1.2rem",
  "&:hover": {
    color: "$gray400",
    transition: "0.2s border-color",
  },
});
