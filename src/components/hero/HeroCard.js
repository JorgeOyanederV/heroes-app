import React from 'react'
import { Link } from 'react-router-dom';
import { heroesImages } from '../../helpers/heroesImages';

export const HeroCard = ({
   id,
   superhero,
   alter_ego,
   first_appearance,
   characters
}) => {
   return (
      <div className='card'>
         <div className='row no-gutters'>
            <div className='col-4'>
               <img src={heroesImages(`./${id}.jpg`)} className='card-img' alt={superhero} />
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
