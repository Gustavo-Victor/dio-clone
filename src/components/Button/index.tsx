import { Btn } from "./style"; 
import { type IButton } from "./types";

export default function Button({children, full=false, variant="primary", onClick, type="button"}: IButton) {
  return (
    <Btn $variant={variant} $full={full} onClick={onClick ?? (() => {})} $type={type}>
      {children}
    </Btn>
  )
}