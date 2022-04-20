import { useEffect, useReducer } from "react"
import { Routes, Route } from "react-router-dom"
import { AuthContext } from "../auth/authContext"
import { authReducer } from "../auth/authReducer"

import { LoginScreen } from '../components/login/LoginScreen'
import { DashboardRoutes } from './DashboardRoutes'

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
            <Route exact path='/login' element={<LoginScreen />} />
            <Route path='/*' element={<DashboardRoutes />} />
         </Routes>
      </AuthContext.Provider>
   )
}
