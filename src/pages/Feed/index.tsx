import { Container, Column, Title, TitleHighlight } from "./style";
import Card from "../../components/Card";
import UserInfo from "../../components/UserInfo";

export default function Feed() {
  return (
    <Container>
      <Column $flex={3}>
        <Title>Feed</Title>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </Column>
      <Column $flex={1}>
        <TitleHighlight>Weekly Ranking</TitleHighlight>
        <UserInfo
          name={"Gustavo Victor"}
          image={"https://avatars.githubusercontent.com/u/81335575?v=4"}
          percentual={80}
        />
        <UserInfo
          name={"Gustavo Victor"}
          image={"https://avatars.githubusercontent.com/u/81335575?v=4"}
          percentual={65}
        />
        <UserInfo
          name={"Gustavo Victor"}
          image={"https://avatars.githubusercontent.com/u/81335575?v=4"}
          percentual={48}
        />
        <UserInfo
          name={"Gustavo Victor"}
          image={"https://avatars.githubusercontent.com/u/81335575?v=4"}
          percentual={32}
        />
      </Column>
    </Container>
  );
}
