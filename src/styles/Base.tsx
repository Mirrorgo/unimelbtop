import { styled } from "@mui/material";

const BaseClickableItem = styled("div")`
  padding: 10px 20px;
  cursor: pointer;
  transition: transform 0.2s;
  &:active {
    transform: scale(0.95);
  }
`;
export { BaseClickableItem };
