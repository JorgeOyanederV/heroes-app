import queryString from 'query-string'
import { useMemo } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useForm } from "../../helpers/useForm"
import { getHeroesByName } from "../../selectors/getHeroesByName"
import { HeroCard } from "../hero/HeroCard"

export const SearchScreen = () => {
   const location = useLocation();
   const { q = '' } = queryString.parse(location.search);
   const navigation = useNavigate();
   const [formValues, handleInputChange] = useForm({
      name: q
   })
   const { name } = formValues;
   const heroesFiltered = useMemo(() => getHeroesByName(q), [q]);

   const handleSubmit = (event) => {
      event.preventDefault();
      navigation(`?q=${name}`);
   }
   return (
      <div className="row">
         <div className="col-4">
            <label>Buscar Heroe</label>
            <hr />
            <form onSubmit={handleSubmit}>
               <input
                  type="text"
                  autoComplete="off"
                  onChange={handleInputChange}
                  name="name"
                  className="form-control"
                  value={name}
               />
               <button
                  type="submit"
                  className="btn btn-outline-primary mt-2"
               >
                  Buscar
               </button>
            </form>


         </div>
         <div className="col-8">
            <label>Resultados</label>
            <hr />
            {
               heroesFiltered.map(heroe =>
                  <HeroCard {...heroe} key={heroe.id} />
               )
            }
         </div>
      </div>
   )
}
