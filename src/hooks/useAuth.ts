import { useContext } from "react";
import { AuthContext } from "../context/Auth";

export function useAuth() {
    const context = useContext(AuthContext);

    if(!context) {
        throw new Error("There is no auth context"); 
    }

    return context;
} 
