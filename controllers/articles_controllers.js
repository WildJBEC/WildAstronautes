'use strict'

function refreshList(liste, articles) {
	liste.innerHTML = "";

	  articles.data.forEach((article) => {
	  //  appendTableRow(liste, article);
	  console.log(document.querySelector('.Article__list'));
	  console.log(`${article.art_theme}`);
	  document.querySelector('.Article__list').innerHTML += `<li class="Article__item ${article.art_theme}">
					<figure class="Article__figure">
						<img src=${article.img_Large_url} alt="${article.img_alt}"/>

					</figure>
					<div class="Article__content">
						<a href="article.html?id=${article.id}" class="Article__link">
							<h2 class="Article__title">${article.art_titre}</h2>
						</a>
						<p class="Article__desc">${article.art_blo}</p>
					</div>
					<div class="Article__footer">

						<a class="Article__button Button" data-target="article" href="article.html">Lire l'article &#8594;</a>

						<ul class="Article__partage">
							<li class="Partage__item Partage__item--facebook"><!--Facebook icone-->
								<a href="#" class="Partage__link">
									<svg class="svg-icon" viewBox="0 0 20 20">
										<path fill="none" d="M11.344,5.71c0-0.73,0.074-1.122,1.199-1.122h1.502V1.871h-2.404c-2.886,0-3.903,1.36-3.903,3.646v1.765h-1.8V10h1.8v8.128h3.601V10h2.403l0.32-2.718h-2.724L11.344,5.71z"></path>
									</svg>
								</a>
							</li>
							<li class="Partage__item Partage__item--twitter"><!--Twitter icone-->
								<a href="#" class="Partage__link">
									<svg class="svg-icon" viewBox="0 0 20 20">
										<path fill="none" d="M18.258,3.266c-0.693,0.405-1.46,0.698-2.277,0.857c-0.653-0.686-1.586-1.115-2.618-1.115c-1.98,0-3.586,1.581-3.586,3.53c0,0.276,0.031,0.545,0.092,0.805C6.888,7.195,4.245,5.79,2.476,3.654C2.167,4.176,1.99,4.781,1.99,5.429c0,1.224,0.633,2.305,1.596,2.938C2.999,8.349,2.445,8.19,1.961,7.925C1.96,7.94,1.96,7.954,1.96,7.97c0,1.71,1.237,3.138,2.877,3.462c-0.301,0.08-0.617,0.123-0.945,0.123c-0.23,0-0.456-0.021-0.674-0.062c0.456,1.402,1.781,2.422,3.35,2.451c-1.228,0.947-2.773,1.512-4.454,1.512c-0.291,0-0.575-0.016-0.855-0.049c1.588,1,3.473,1.586,5.498,1.586c6.598,0,10.205-5.379,10.205-10.045c0-0.153-0.003-0.305-0.01-0.456c0.7-0.499,1.308-1.12,1.789-1.827c-0.644,0.28-1.334,0.469-2.06,0.555C17.422,4.782,17.99,4.091,18.258,3.266"></path>
									</svg>
								</a>
							</li>
							<li class="Partage__item Partage__item--email"><!--Email icone-->
								<a href="#" class="Partage__link">
									<svg class="svg-icon" viewBox="0 0 20 20">
										<path d="M17.218,2.268L2.477,8.388C2.13,8.535,2.164,9.05,2.542,9.134L9.33,10.67l1.535,6.787c0.083,0.377,0.602,0.415,0.745,0.065l6.123-14.74C17.866,2.46,17.539,2.134,17.218,2.268 M3.92,8.641l11.772-4.89L9.535,9.909L3.92,8.641z M11.358,16.078l-1.268-5.613l6.157-6.157L11.358,16.078z"></path>
									</svg>
								</a>
							</li>
						</ul>
					</div>
				</li>`;


// <script type="text/javascript">
// function ajout() {
//     document.getElementById('liste').innerHTML += "<li>objet</li>";
// }
// </script>

// <ul id="liste">
//     <li>objet1</li>
//     <li>objet2</li>
// </ul>
// <a href="javascript:ajout()">Ajouter</a>

		})
}

// remplissage page article
// function refreshArticle(liste, articles) {
// 	console.log("REFRESH_Article")
// 	liste.innerHTML = "";
// 	console.log(articles)
//
// 		articles.data.forEach((article) => {
// 	  //  appendTableRow(liste, article);
// 	//  console.log(document.querySelector('.Article__list'))
// 	  document.querySelector('.Section__fullArticle').innerHTML =
// 	   `<article class="fullArticle__content">
//
// 				<figure class="fullArticle__img" style="background-image: url(img/article-image.jpg)">
// 				</figure>
//
// 				<header class="fullArticle__header">
// 					<h2 class="fullArticle__title">Rocky Mountains From Orbit</h2>
//
// 					<div class="fullArticle__infos">
// 						<date class="fullArticle__date">
// 							Publié le 25 Janvier 2017
// 						</date>
// 						<span class="fullArticle__author">
// 							par Elisa Etcheverry
// 						</span>
// 					</div>
// 				</header>
//
// 				<div class="fullArticle__desc">
// 					<p class="">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
// 					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
// 					<p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
// 					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
// 				</div>
//
// 				<div class="fullArticle__floating desktop" >
// 					<div class="fullArticle__menuFloat" data-scroll="fixed">
// 						<ul>
// 							<li class="fullArticle__text">Partager</li>
// 							<li class="fullArticle__buttonTweet">
// 								<svg class="svg-icon" width="29" height="29" viewBox="0 0 29 29">
//               						<path fill="none" d="M18.258,3.266c-0.693,0.405-1.46,0.698-2.277,0.857c-0.653-0.686-1.586-1.115-2.618-1.115c-1.98,0-3.586,1.581-3.586,3.53c0,0.276,0.031,0.545,0.092,0.805C6.888,7.195,4.245,5.79,2.476,3.654C2.167,4.176,1.99,4.781,1.99,5.429c0,1.224,0.633,2.305,1.596,2.938C2.999,8.349,2.445,8.19,1.961,7.925C1.96,7.94,1.96,7.954,1.96,7.97c0,1.71,1.237,3.138,2.877,3.462c-0.301,0.08-0.617,0.123-0.945,0.123c-0.23,0-0.456-0.021-0.674-0.062c0.456,1.402,1.781,2.422,3.35,2.451c-1.228,0.947-2.773,1.512-4.454,1.512c-0.291,0-0.575-0.016-0.855-0.049c1.588,1,3.473,1.586,5.498,1.586c6.598,0,10.205-5.379,10.205-10.045c0-0.153-0.003-0.305-0.01-0.456c0.7-0.499,1.308-1.12,1.789-1.827c-0.644,0.28-1.334,0.469-2.06,0.555C17.422,4.782,17.99,4.091,18.258,3.266"></path>
//             					</svg>
//             				</li>
// 							<li class="fullArticle__buttonFacebook">
// 								<svg class="svg-icon" width="29" height="29" viewBox="0 0 29 29">
//               						<path fill="none" d="M11.344,5.71c0-0.73,0.074-1.122,1.199-1.122h1.502V1.871h-2.404c-2.886,0-3.903,1.36-3.903,3.646v1.765h-1.8V10h1.8v8.128h3.601V10h2.403l0.32-2.718h-2.724L11.344,5.71z"></path>
//             					</svg>
//             				</li>
// 						</ul>
// 					</div>
// 				</div>
//
// 				<footer class="fullArticle__footer">
//
// 					<div class="fullArticle__foot">
// 						<p>
// 							Article traduit depuis le site de la
// 						</p>
// 						<img src="img/NASA_logo.svg" alt="Nasa"></img>
// 					</div>
// 				</footer>
// 			</article>`;
// 	}
// }

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

    		let liste = document.querySelector('.Article__list');

			refreshList(liste, articles);

			let input = document.getElementById('searchInput');
        	input.addEventListener('keyup', (event) => {
	          let value = event.currentTarget.value.split(" ").join(" ");
	          if(value) {
	              articles.filterArticles(value);
				  refreshList(liste, articles);
	          }
	          articles.data = articles.unfilteredData;
	        });

			$(document).ready(function () {
				$('.Categories__list').on('click', '.Category__item', function() {
					let category = $(this).closest('.Category__item').data('category');
					// console.log(category);
					// $('.Article__item').css('display', 'none');
					// $('.' + category).css('display', 'flex');
					$('.Article__item').hide();
					$('.' + category).show();
					}
					// $('.Article__list').filter($(category));
			)});

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
