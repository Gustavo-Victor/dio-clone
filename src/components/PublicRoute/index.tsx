import { type ReactNode } from "react";
import { useAuth } from "../../hooks/useAuth";
import { Navigate } from "react-router-dom";

export default function PublicRoute({ children }: {children: ReactNode | Promise<ReactNode>}) {
    const { user } = useAuth(); 
    const authenticated = user != undefined && JSON.stringify(user) != "{}"; 

    if(authenticated) {
        return <Navigate to="/feed" replace />
    } else {
        return (
            <>
              {children}
            </>
        )
    }
}