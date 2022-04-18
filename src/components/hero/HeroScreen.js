import { useMemo } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { getHeroById } from "../../selectors/getHeroById";

export const HeroScreen = () => {
   const { id: heroId } = useParams();

   const hero = useMemo(() => getHeroById(heroId) , [heroId]);

   const navigate = useNavigate();

   if (!hero) {
      return <Navigate to={'/'} />
   }
   const handleReturn = () => {
      navigate(-1)
   }
   const {
      id,
      superhero,
      publisher,
      alter_ego,
      first_appearance,
      characters } = hero;

   const imagePath = `/assets/${id}.jpg`;
   return (
      <div className="row mt-5">
         <div className="col-4">
            <img
               src={imagePath}
               className='img-thumbnail'
               alt={superhero} />
         </div>
         <div className="col-8">
            <h3>{superhero}</h3>
            <ul className="list-group">
               <li className="list-group-item"><b>Alter ego: </b> {alter_ego}</li>
               <li className="list-group-item"><b>Publisher: </b> {publisher}</li>
               <li className="list-group-item"><b>Frist Appearance: </b> {first_appearance}</li>
            </ul>

            <h3 className="mt-5">Characters</h3>
            <p>{characters}</p>

            <button className="btn btn-outline-info"
               onClick={handleReturn}>
               Regresar
            </button>
         </div>
      </div>
   )
}
