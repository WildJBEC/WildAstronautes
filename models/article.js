'use strict'
class Article {

  constructor(json){
    this.art_theme = json.art_theme;
    this.date_art = json.date_art;
    this.date_trad = json.date_trad;
    this.author = json.author;
    this.auteur = json.auteur;
  /*on enleve le tableau pour les images
    this.img = {} 
    this.img._theme = json.img[0]._theme;
    this.img.spec = {}
    this.img.spec.img_url = json.img.spec.img_url;
    this.img.spec.img_taille = json.img.spec.img_taille;
    this.img.img_alt = json.
    this.img.img_caption =
    this.img.img_credit = */
    //this.img = json.img;
    this.art_txt = json.art_txt;
    this.art_blo = this.extraitarticle(json.art_txt,400);
    this.art_titre = json.art_titre;
    this.art_liennasa = json.art_liennasa;
    this.art_accueil = this.extraitarticle(json.art_txt,200)
  }

  extraitarticle (sentence, nombre) {
    let extrait = sentence.slice(0, nombre);
    return extrait 
  }

}
