import { InputContainer, InputElement } from './style'

export default function Input({leftIcon, name, ...rest}) {
  return (
    <InputContainer>
        {leftIcon && leftIcon}
        <InputElement name={name} {...rest} />
    </InputContainer>
  )
}
