import { useContext, useEffect } from "react"
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../auth/authContext"


export const PrivateRoute = ({ children }) => {
   const { user } = useContext(AuthContext);
   const { pathname, search } = useLocation();


   useEffect(() => {
      localStorage.setItem('lastPath', pathname + search);
   }, [pathname])

   return user.logged
      ?
      children
      :
      <Navigate to={'login'} />
}
