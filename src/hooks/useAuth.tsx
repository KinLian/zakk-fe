import { authContext } from "@/providers/auth"
import { useContext } from "react"

export const useAuth = () => {
    return useContext(authContext);
}