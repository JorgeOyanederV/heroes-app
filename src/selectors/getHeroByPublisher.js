import { heroes } from "../data/heroes"

export const getHeroeByPublisher = (publisher) => {
   // return heroes.filter(hero => hero.publisher === publisher);
   const publisherLowerCase = publisher.toLowerCase();
   return heroes.filter(hero => hero.publisher.toLowerCase().includes(publisherLowerCase));

} 