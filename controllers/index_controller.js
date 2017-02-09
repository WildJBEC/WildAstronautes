'use strict'
// remplissage page article
function refreshArticle(liste, articles) {
	console.log("REFRESH_Article");
	liste.innerHTML = "";

    let indiceArticle = articles.data.length - 1;
    let article = [];
    let currentArticle = (indice) => {
        article = articles.data[indice];
        return article;
    }

    currentArticle(indiceArticle);

		// articles.data.forEach((article) => {
	  //  appendTableRow(liste, article);
	//  console.log(document.querySelector('.Article__list'))

		//$("header").append("");

	  liste.innerHTML =`<div class="Section Hero-unit" style="background-image:linear-gradient(0deg,rgba(0,0,0,0.9),rgba(0,0,0,0)),url(${article.img_Large_url});background-size: cover;
  background-position: bottom;
  background-repeat: no-repeat;">
         <a href="article.html?id=${article.id}" class="Hero-unit__link">
            <h2 class="Hero-unit__title">${article.art_titre}</h2>
            <p class="Hero-unit__desc">${article.art_blo}</p>
          </a> 
        </div>`;

      console.log(document.querySelector('Header').nextSibling.innerHTML);
};

(function() {
  // Create HttpRequest
  let req = new XMLHttpRequest();

  let url = "data/articles_list.json";

  req.open('GET', url, true);

  req.onreadystatechange = function(event) {
    // 0:UNSENT 1:OPENED 2:HEADERS_RECEIVED 3:LOADING 4:DONE
    if (req.readyState === 4){
    	if (req.status === 200){
    		let articlesJSON = JSON.parse(req.responseText);
    		let articles = new Articles(articlesJSON);

    		let liste = document.querySelector('.Accueil');

			refreshArticle(liste, articles);

			// button.addEventListener('click', (event) => {
	        //   let value = input.value;
	        //   if(value) {
	        //       articles.filterArticles(value);
	        //   }
	        //   else {
	        //       articles.data = articles.unfilteredData;
	        //   }
	        //   refreshList(liste, articles);
	        // });

			} else {
				alert(`Status: ${req.status} - Could not load ${url}`);
			}
		} else {
			console.log("Loading");
		}
	}
	req.send();

})()
