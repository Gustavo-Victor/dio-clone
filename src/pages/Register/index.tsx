import {
  Container,
  Title,
  Column,
  Text,
  TitleLogin,
  Wrapper,
  ErrorElement,
} from "./style";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { MdPerson, MdEmail, MdLock } from "react-icons/md";
import { useForm, Controller, type SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from "../../schemas/yupSchema";
import { Link, useNavigate } from "react-router-dom";
import { userApi } from "../../api/userApi";
import { type IRegisterFormData } from "../Login/types";
//import banner from "../../assets/banner.png";

export default function Register() {
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<IRegisterFormData>({ resolver: yupResolver(registerSchema), mode: "onChange" });

  const navigate = useNavigate(); 

  const onSubmit: SubmitHandler<IRegisterFormData> = async (formData) => {
    console.log(formData);
    let { name, email, password } = formData; 
  
    try {
      const { data } = await userApi.get(`/users?email=${email}`); 

      if(data.length > 0) {
        window.alert("This email is already in use. Enter another one."); 
        return ;
      } else {
        const objModel = {
          name: name.trim(),
          email: email.trim(), 
          password: password.trim()
        }; 

        await userApi.post("/users", objModel);   
        window.alert("User successfully registered!"); 
        navigate("/feed"); 
      }
    } catch(e) {
      window.alert("Sorry. Try again later.");
      console.log(e);
    }
    
    
  };

  return (
    <Container>
      <Column>
        <Title>
          The platform for you to learn from experts, master key technologies, and get into the most desirable companies faster.
        </Title>
      </Column>
      <Column>
        <Wrapper>
          <TitleLogin>Get started now for free</TitleLogin>
          <Text>Create your account and make the change</Text>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Controller
              name="name"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <Input
                  {...field}
                  name={"name"}
                  id="name"
                  type="name"
                  placeholder="Full name"
                  required
                  leftIcon={<MdPerson />}
                />
              )}
            />
            {errors.name && (
              <ErrorElement>{errors.name?.message}</ErrorElement>
            )}

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
                  placeholder="Email"
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
                  placeholder="Password"
                  required
                  leftIcon={<MdLock />}
                />
              )}
            />
            {errors.password && (
              <ErrorElement>{errors.password?.message}</ErrorElement>
            )}
            <Button full={true} type="submit" variant="secondary">
              Create my account
            </Button>
          </form>
          <Column>
            <Text>By clicking "create my free account", I declare that I accept DIO's Privacy Policy and Terms of Use.
            </Text>
            <Text className="small">
              Alread have an account? <Link className="login" to="/login">Log in</Link>
            </Text>
          </Column>
        </Wrapper>
      </Column>
    </Container>
  );
}
