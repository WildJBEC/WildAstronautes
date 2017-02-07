'use strict'
class Article {

  constructor(json){

    this.art_theme = json.art_theme.toUpperCase();
    this.date_art = json.date_art;
    this.date_trad = json.date_trad;
    this.author = json.author;
    this.auteur = json.auteur;
  /*on enleve le tableau pour les images 
    this.img[]._theme = json.img[]._theme;
    this.img.spec.img_url = json.img.spec.img_url;
    this.img.spec.img_taille = json.img.spec.img_taille;
    this.img.img_alt = json.
    this.img.img_caption =
    this.img.img_credit = */
    //this.img = json.img;
    this.art_txt = json.art_txt;
    this.art_titre = json.art_titre;
    this.art_liennasa = json.art_liennasa;
  }

  extraitarticle () {
    return this.art_text+ " " + this.art_liennasa; // trouver la fonction jquery certain nbre de mots
  }

}
