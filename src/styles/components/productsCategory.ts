import { styled } from "..";
import Link from "next/link";

export const Nav = styled("section", {
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: 10,
  padding: 10,
});

export const NavLink = styled(Link, {
  borderTop: `2px solid transparent`,
  "&:hover": {
    borderTop: `2px solid $gray800`,
  },
});
