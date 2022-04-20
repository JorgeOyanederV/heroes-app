import { useEffect, useReducer } from "react"
import { Routes, Route } from "react-router-dom"
import { AuthContext } from "../auth/authContext"
import { authReducer } from "../auth/authReducer"

import { LoginScreen } from '../components/login/LoginScreen'
import { DashboardRoutes } from './DashboardRoutes'
import { PrivateRoute } from "./PrivateRoute"
import { PublicRoute } from "./PublicRoute"

// const init = () => {
//    return {
//       logged: true,
//       name: 'jorge'
//    }
// }
const init = () => {
   return JSON.parse(localStorage.getItem('user')) || { logged: false };
}
export const AppRouter = () => {

   const [user, dispatch] = useReducer(authReducer, {}, init)

   useEffect(() => {
      if (!user) return;
      localStorage.setItem('user', JSON.stringify(user));

   }, [user])
   return (
      <AuthContext.Provider value={{ user, dispatch }}>
         <Routes>
            <Route exact path='/login' element={
               <PublicRoute>
                  <LoginScreen />
               </PublicRoute>
            } />
            <Route path='/*' element={
               <PrivateRoute>
                  <DashboardRoutes />
               </PrivateRoute>} />
         </Routes>
      </AuthContext.Provider>
   )
}
