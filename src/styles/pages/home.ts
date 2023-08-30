import { styled } from "..";

export const Container = styled("main", {
  height: "100%",
  width: "100%",
  backgroundColor: "$gray300",
});
export const ListContainer = styled("div", {
  width: 1020,
  padding: 10,
  margin: "0 auto",
  display: "grid",
  gridTemplateColumns: "1fr 1fr 1fr 1fr",
  gap: 10,
  flexWrap: "wrap",
});
