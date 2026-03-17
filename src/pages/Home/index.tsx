import Button from "../../components/Button";
import { Container, Title, TextContent, TitleHighLight } from "./style";
import banner from "../../assets/banner.png";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <Container>
      <div>
        <Title>           
          <TitleHighLight>Implement <br /></TitleHighLight> 
          Your global future now
        </Title>
        <TextContent>
          Master the technologies used by the world's most innovative companies and embrace your new professional challenge, evolving in community with the best experts.
        </TextContent>
        <Link to="/register">
          <Button full={true} variant="secondary">Start Now</Button>
        </Link>
        
      </div>
      <div>
        <img src={banner} alt="DIO main banner" title="banner" />
      </div>
    </Container>
  );
}
