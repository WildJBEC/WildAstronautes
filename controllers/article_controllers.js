'use strict'
// remplissage page article
function refreshArticle(liste, articles) {
	console.log("REFRESH_Article");
	liste.innerHTML = "";

    let indiceArticle = window.location.search.split("?")[1].split("=")[1];
    let article = [];
    let currentArticle = (indice) => {
        article = articles.data[indice];
        return article;
    }

    currentArticle(indiceArticle);

		// articles.data.forEach((article) => {
	  //  appendTableRow(liste, article);
	//  console.log(document.querySelector('.Article__list'))
	  document.querySelector('.Section__fullArticle').innerHTML =`<article class="fullArticle__content">

				<figure class="fullArticle__img" style="background-image: url(${article.img_Large_url})">
				</figure>

				<header class="fullArticle__header">
					<h2 class="fullArticle__title">${article.art_titre}</h2>

					<div class="fullArticle__infos">
						<date class="fullArticle__date">
							Publié le ${article.date_art}
						</date>
						<span class="fullArticle__author">
							par ${article.auteur}
						</span>
					</div>
				</header>

				<div class="fullArticle__desc">
                    ${article.art_txt}
				</div>
					<ul class="fullArticle__menuFloat desktop">
						<li class="fullArticle__text">Partage</li>
						<li class="fullArticle__buttonTweet">
							<svg class="svg-icon" width="29" height="29" viewBox="0 0 29 29">
          						<path fill="none" d="M18.258,3.266c-0.693,0.405-1.46,0.698-2.277,0.857c-0.653-0.686-1.586-1.115-2.618-1.115c-1.98,0-3.586,1.581-3.586,3.53c0,0.276,0.031,0.545,0.092,0.805C6.888,7.195,4.245,5.79,2.476,3.654C2.167,4.176,1.99,4.781,1.99,5.429c0,1.224,0.633,2.305,1.596,2.938C2.999,8.349,2.445,8.19,1.961,7.925C1.96,7.94,1.96,7.954,1.96,7.97c0,1.71,1.237,3.138,2.877,3.462c-0.301,0.08-0.617,0.123-0.945,0.123c-0.23,0-0.456-0.021-0.674-0.062c0.456,1.402,1.781,2.422,3.35,2.451c-1.228,0.947-2.773,1.512-4.454,1.512c-0.291,0-0.575-0.016-0.855-0.049c1.588,1,3.473,1.586,5.498,1.586c6.598,0,10.205-5.379,10.205-10.045c0-0.153-0.003-0.305-0.01-0.456c0.7-0.499,1.308-1.12,1.789-1.827c-0.644,0.28-1.334,0.469-2.06,0.555C17.422,4.782,17.99,4.091,18.258,3.266"></path>
        					</svg>
        				</li>
						<li class="fullArticle__buttonFacebook">
							<svg class="svg-icon" width="29" height="29" viewBox="0 0 29 29">
          						<path fill="none" d="M11.344,5.71c0-0.73,0.074-1.122,1.199-1.122h1.502V1.871h-2.404c-2.886,0-3.903,1.36-3.903,3.646v1.765h-1.8V10h1.8v8.128h3.601V10h2.403l0.32-2.718h-2.724L11.344,5.71z"></path>
        					</svg>
        				</li>
					</ul>

				<footer class="fullArticle__footer">
						<p>
							Article traduit depuis le site de la
						</p>
						<img src="img/NASA_logo.svg" alt="Nasa"></img>
				</footer>
			</article>`;
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

    		let liste = document.querySelector('.Section__fullArticle');

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
