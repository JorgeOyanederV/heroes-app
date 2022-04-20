import React, { useMemo } from 'react'
import { getHeroeByPublisher } from '../../selectors/getHeroByPublisher'
import { HeroCard } from './HeroCard';

export const HeroList = ({ publisher }) => {
   const heroes = useMemo(() => getHeroeByPublisher(publisher), [publisher]);
   return (
      <div className='row justify-content-between'>
         {
            heroes.map(hero => (
               <div className='col-12 col-lg-4 mb-3' key={hero.id}>
                  <HeroCard  {...hero} />
               </div>
            ))
         }
      </div>
   )
}
