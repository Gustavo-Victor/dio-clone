import { createContext, useState, useEffect } from "react";
import {
  type IAuthContext,
  type IAuthProviderProps,
  type ILoginData,
  type IRegisterData,
} from "./types";
import { type IUser } from "../types/User";
import { useNavigate } from "react-router-dom";
import { userApi } from "../api/userApi";

export const AuthContext = createContext<IAuthContext>({} as IAuthContext);

export default function AuthProvider({ children }: IAuthProviderProps) {
  const [user, setUser] = useState<IUser>({} as IUser);
  const navigate = useNavigate();

  const login = async (loginData: ILoginData) => {
    try {
      const { email, password } = loginData;
      const { data } = await userApi.get(`/users?email=${email}`);

      if (data.length > 0) {
        const responseUser = data[0];

        if (responseUser.password !== password) {
          window.alert("Wrong password");
          return;
        } else {
          window.alert("User logged in");
          setUser({ id: data[0].id, name: data[0].name, email, password });
          navigate("/feed");
        }
      } else {
        window.alert("User does not exist");
        return;
      }
    } catch (e) {
      window.alert("Sorry. Try again later.");
      console.log(e);
    }
  };

  const register = async (registerData: IRegisterData) => {
    let { name, email, password } = registerData;

    try {
      const { data } = await userApi.get(`/users?email=${email}`);

      if (data.length > 0) {
        window.alert("This email is already in use. Enter another one.");
        return;
      } else {
        const objModel = {
          name: name.trim(),
          email: email.trim(),
          password: password.trim(),
        };

        await userApi.post("/users", objModel);
        setUser({...objModel}); 
        window.alert("User successfully registered!");
        navigate("/feed");
      }
    } catch (e) {
      window.alert("Sorry. Try again later.");
      console.log(e);
    }
  };

  const logout = () => {
    if(user) {
      setUser({} as IUser); 
      navigate("/"); 
    }
  }

  useEffect(() => {
    const storagedUser = localStorage.getItem("user");
    if(storagedUser && storagedUser != "undefined") {
      setUser(JSON.parse(storagedUser)); 
    }
  }, []); 

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user)); 
  }, [user])

  return (
    <AuthContext.Provider value={{ user, setUser, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
