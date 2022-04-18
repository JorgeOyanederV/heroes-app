import React, { useMemo } from 'react'
import { getHeroeByPublisher } from '../../selectors/getHeroByPublisher'
import { HeroCard } from './HeroCard';

export const HeroList = ({ publisher }) => {
   const heroes = useMemo(() => getHeroeByPublisher(publisher), [publisher]);
   return (
      <div className='row'>
         {
            heroes.map(hero => (
               <div className='col-12 col-md-4' key={hero.id}>
                  <HeroCard  {...hero} />
               </div>
            ))
         }
      </div>
   )
}
