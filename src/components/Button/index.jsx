import { Btn } from "./style"

export default function Button({children, full=false, variant="primary", onClick, type="button"}) {
  return (
    <Btn $variant={variant} $full={full} onClick={onClick} $type={type}>
        {children}
    </Btn>
  )
}
