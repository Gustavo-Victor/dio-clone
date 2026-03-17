import { InputContainer, InputElement } from './style'; 
import { type IInput } from "./types";

export default function Input({leftIcon, name, ...rest} : IInput) {
  return (
    <InputContainer>
        {leftIcon && leftIcon}
        <InputElement name={name} {...rest} />
    </InputContainer>
  )
}
