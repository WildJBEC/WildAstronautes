'use strict'
class Articles {

  constructor(articlesJSON) {
    this.data = [];

    // c'est le tri pour l'affichage : à modifier !

    articlesJSON.forEach((sJSON) => {
      let article = new Article(sJSON);

      this.data.push(article);
    }) 

    // Important for "filter" exercise - little hint here ;)
    this.unfilteredData = this.data;
  } 
}