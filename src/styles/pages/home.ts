import { styled } from "..";

export const Container = styled("main", {
  width: "100%",
  maxWidth: 1120,
  margin: "2rem auto 0",
  padding: "0 1.5rem",
});
export const ListContainer = styled("div", {
  width: "100%",
  padding: 10,
  margin: "0 auto",
  display: "grid",
  gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr",
  gap: 10,
  flexWrap: "wrap",
});
