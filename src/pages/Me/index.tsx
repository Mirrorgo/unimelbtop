import { styled } from "@mui/material";

const Me = () => (
  <>
    <FlexContainer>
      <FlexItem>1</FlexItem>
      <FlexItem>2</FlexItem>
      <FlexItem>3</FlexItem>
      <FlexItem>4</FlexItem>
      <FlexItem>5</FlexItem>
      <FlexItem>6</FlexItem>
      <FlexItem>7</FlexItem>
      <FlexItem>8</FlexItem>
      <FlexItem>9</FlexItem>
      <FlexItem>10</FlexItem>
    </FlexContainer>
  </>
);
export default Me;

const FlexContainer = styled("div")({
  display: "flex",
  flexWrap: "wrap",
  gap: "10px",
});

const FlexItem = styled("div")({
  width: "80px",
  height: "80px",
  background: "lightblue",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "16px",
});
