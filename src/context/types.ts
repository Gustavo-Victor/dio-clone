import React, { type SetStateAction } from "react"; 
import { type IUser } from "../types/User"; 


export interface IAuthContext {
    user: IUser;
    setUser: React.Dispatch<SetStateAction<IUser>> 
    login: (loginData: ILoginData) => Promise<void>;
    register: (registerData: IRegisterData) => Promise<void>; 
    logout: () => void;
}

export interface IAuthProviderProps {
    children: React.ReactNode; 
}

export interface ILoginData {
    email: string; 
    password: string; 
}

export interface IRegisterData extends ILoginData {
    name: string; 
}