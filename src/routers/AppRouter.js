import { Routes, Route } from "react-router-dom"

import { LoginScreen } from '../components/login/LoginScreen'
import { Navbar } from '../components/ui/Navbar'
import { DashboardRoutes } from './DashboardRoutes'

export const AppRouter = () => {
   return (
      <div>
         <Navbar />
         <div className="container">
            <Routes>
               <Route exact path='/login' element={<LoginScreen />} />
               <Route path='/*' element={<DashboardRoutes />} />
            </Routes>
         </div>

      </div>
   )
}
