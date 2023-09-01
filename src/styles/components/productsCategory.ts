import { styled } from "..";
import Link from "next/link";

export const Nav = styled("section", {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: 10,
});

export const NavLink = styled(Link, {
  borderTop: `1px solid transparent`,
  "&:hover": {
    borderTop: `2px solid $gray800`,
  },
});
