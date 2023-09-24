import { styled } from "..";

export const Container = styled("main", {
  maxWidth: 1120,
  width: "100%",
  margin: "7rem auto",
  padding: "0 1.5rem",
});
export const ListContainer = styled("section", {
  width: "100%",
  padding: 10,
  margin: "0 auto",
  display: "grid",
  gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr",
  gap: 10,
  flexWrap: "wrap",
});
