import { Container, NameText, Progress, UserPicture } from "./style"; 
import { type IUserInfo } from "./types";

export default function UserInfo({name, image, percentual=0} : IUserInfo) {
  return (
    <Container>
        <UserPicture src={image} />
        <div>
            <NameText>{name}</NameText>
            <Progress $percentual={percentual} />
        </div>
    </Container>
  )
}
