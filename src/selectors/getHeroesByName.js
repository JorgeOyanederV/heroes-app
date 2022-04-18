import { heroes } from "../data/heroes"


export const getHeroesByName = (name = '') => {
   if (name.length === 0) {
      return []
   }
   const nameHero = name.toLocaleLowerCase();
   return heroes.filter(hero => (hero.superhero.toLowerCase().includes(nameHero)));
}
