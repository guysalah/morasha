import { Button, ButtonProps } from "@mui/material";

export const CustomButton = ({ children, ...props }: ButtonProps) => {
  return <Button {...props}>{children}</Button>;
};
