import React from 'react'
import { Link } from 'react-router-dom';
export const HeroCard = ({
   id,
   superhero,
   publisher,
   alter_ego,
   first_appearance,
   characters
}) => {
   const imgPath = `assets/${id}.jpg`;
   return (
      <div className='card'>
         <div className='row no-gutters'>
            <div className='col-4'>
               <img src={imgPath} className='card-img' alt={superhero} />
            </div>
            <div className='col-8'>
               <h5 className='card-title'>{superhero}</h5>
               <p className='card-text'>{alter_ego}</p>
               {
                  (alter_ego !== characters) && <p className='text-muted'>{characters}</p>
               }
               <p className='text-muted'>{first_appearance}</p>
               <Link to={`/hero/${id}`}> Mas...</Link>
            </div>
         </div>
      </div>

   )
}