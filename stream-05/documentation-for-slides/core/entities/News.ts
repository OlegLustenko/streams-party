export interface News {
  user: string;
  hashtags: string
}

export class News {
  constructor(user: string, hashtags: string) {
    this.user = user;
    this.hashtags = hashtags;
  }
}



/*

FrontEnd layers of architecture

DOMAIN LAYER
 entities
 services
 constants

SERVICE LAYER
  use-case            (BA), Product Owner,
   for news portal
     - create new news
     - delete news
     - set ratings
   service, factories, порождающие паттерны, билдер и тд

INFRASTRUCTURE LAYER
 API calls (Data) -> Services -> Data ->
 -> Mappers, Selectors, Getters(ViewModel)

APPLICATION LAYER
 React Components, with-click-outside // LOCAL STATE
 DOM manipulation

 React Components should be free from:

  - MAPPINGS,
  - Data manipulation, Calculations, etc


  Interfaces flat

 */
