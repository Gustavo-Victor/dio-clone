import { type ReactNode } from "react";
import { useAuth } from "../../hooks/useAuth";
import { Navigate } from "react-router-dom";

export default function PrivateRoute({ children }: {children: ReactNode | Promise<ReactNode>}) {
    const { user } = useAuth(); 
    const authenticated = user != undefined && JSON.stringify(user) != "{}"; 

    if(!authenticated) {
        return <Navigate to="/login" replace />
    } else {
        return (
            <>
              {children}
            </>
        )
    }
}