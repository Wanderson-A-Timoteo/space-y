import { ReactNode } from "react";
import { ButtonStyle } from "./style";

interface ButtonProps {
  text: string;
}

function Button({ text } : ButtonProps) {
  return (
    <>
      <ButtonStyle /> 
             
    </>
  );
}

export default Button;