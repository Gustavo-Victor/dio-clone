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
} from "./style";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { MdEmail, MdLock } from "react-icons/md";
import { useForm, Controller, type SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginShema } from "../../schemas/yupSchema";
import { Link } from "react-router-dom";
import { type ILoginFormData } from "./types"
import { useContext } from "react";
import { AuthContext } from "../../context/Auth"; 
//import banner from "../../assets/banner.png";

export default function Login() {
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<ILoginFormData>({ resolver: yupResolver(loginShema), mode: "onChange" });
  const { login } = useContext(AuthContext);

  const onSubmit: SubmitHandler<ILoginFormData> = async (formData) => {
    console.log(formData);
    await login(formData); 
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
