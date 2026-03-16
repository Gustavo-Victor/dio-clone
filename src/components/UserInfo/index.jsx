import { Container, NameText, Progress, UserPicture } from "./style"

export default function UserInfo({name, image, percentual=0}) {
  return (
    <Container>
        <UserPicture src={image} />
        <div>
            <NameText>{name}</NameText>
            <Progress percentual={percentual} />
        </div>
    </Container>
  )
}
