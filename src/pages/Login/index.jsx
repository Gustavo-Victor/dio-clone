import {
  Container,
  Title,
  Column,
  Row,
  CreateText,
  SpecialText,
  Text,
  TitleLogin,
  Wrapper,
  ErrorElement,
} from "./sytle";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { MdEmail, MdLock } from "react-icons/md";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginShema } from "../../schemas/yupSchema";
import { Link, useNavigate } from "react-router-dom";
import { userApi } from "../../api/userApi";
//import banner from "../../assets/banner.png";

export default function Login() {
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm({ resolver: yupResolver(loginShema), mode: "onChange" });
  const navigate = useNavigate(); 


  const onSubmit = async (formData) => {
    console.log(formData);

    try {
      const { email, password } = formData;
      const { data } = await userApi.get(`/users?email=${email}`); 

      if(data.length > 0) {
        const responseUser = data[0]; 

        if(responseUser.password !== password) {
          window.alert("Wrong password"); 
          
          return ;
        } else {
          window.alert("User logged in");
          navigate("/feed"); 
        }
      } else {
        window.alert("User does not exist"); 
        return ;
      }

    } catch(e) {
      window.alert("Sorry. Try again later.");
      console.log(e);
    };
  }

  return (
    <Container>
      <Column>
        <Title>
          The platform where you can learn with experts, master the main
          tecnologies and get in the most desirable companies.
        </Title>
      </Column>
      <Column>
        <Wrapper>
          <TitleLogin>Create your account</TitleLogin>
          <Text>Log in and make the change</Text>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Controller
              name="email"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <Input
                  {...field}
                  name={"email"}
                  id="email"
                  type="email"
                  placeholder="Enter your email..."
                  required
                  leftIcon={<MdEmail />}
                />
              )}
            />
            {errors.email && (
              <ErrorElement>{errors.email?.message}</ErrorElement>
            )}

            <Controller
              name="password"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <Input
                  {...field}
                  name={"password"}
                  id="password"
                  type="password"
                  placeholder="Enter your password..."
                  required
                  leftIcon={<MdLock />}
                />
              )}
            />
            {errors.password && (
              <ErrorElement>{errors.password?.message}</ErrorElement>
            )}
            <Button full={true} type="submit" variant="secondary">
              Enter
            </Button>
          </form>
          <Row>
            <SpecialText>Forgot my password</SpecialText>
            <CreateText>
              <Link to="/register">Create a new account</Link>
            </CreateText>
          </Row>
        </Wrapper>
      </Column>
    </Container>
  );
}
