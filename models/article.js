'use strict'
class Article {

  constructor(json){
    this.id = json.id;
    this.art_theme = json.art_theme;
    this.date_art = json.date_art;
    this.date_trad = json.date_trad;
    this.author = json.author;
    this.auteur = json.auteur;
    this.img_theme_ = json.img_theme_;
    this.img_Small_url = json.img_Small_url;
    this.img_Large_url = json.img_Large_url;
    this.img_taille = json.img_taille;
    this.img_alt = json.img_alt;
    this.img_caption = json.img_caption;
    this.img_credit = json.img_credit;
    this.art_txt = json.art_txt;
    this.art_blo = this.extraitarticle(json.art_txt,400);
    this.art_titre = json.art_titre;
    this.art_liennasa = json.art_liennasa;
    this.art_accueil = this.extraitarticle(json.art_txt,200)
  }

   extraitarticle(sentence, nombre) {
    let extrait = sentence.slice(0, nombre);
    return extrait ;
  }

}
