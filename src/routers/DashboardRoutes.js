import { Routes, Route } from "react-router-dom"
import { DcScreen } from "../components/dc/DcScreen"
import { HeroScreen } from "../components/hero/HeroScreen"
import { MarvelScreen } from "../components/marvel/MarvelScreen"
import { SearchScreen } from "../components/search/SearchScreen"
import { Navbar } from "../components/ui/Navbar"

export const DashboardRoutes = () => {
   return (
      <>
         <Navbar />
         <div className="container mt-3">
            <Routes>
               <Route exact path='marvel' element={<MarvelScreen />} />
               <Route exact path='dc' element={<DcScreen />} />
               <Route exact path='search' element={<SearchScreen />} />
               <Route exact path='hero/:id' element={<HeroScreen />} />
            </Routes>
         </div>
      </>
   )
}
