document.addEventListener("DOMContentLoaded",function(){
	var articlesPhoto = document.querySelectorAll(".articles-photo");
	var articlesLink = document.querySelectorAll(".articles-link");
	var wrapAll = document.querySelectorAll(".wrap");

	var tag = document.querySelectorAll(".tag");
	var wrapArticles = document.querySelectorAll(".articles-wrap");

	// window.addEventListener("load", function(){
	// 	var loadScreen = document.querySelector(".load-screen");
	// 	document.body.removeChild(loadScreen);
	// });

	for(let i=0; i<articlesPhoto.length; i++) {
		articlesPhoto[i].onclick = function(){
			for (let i = 0; i < articlesPhoto.length; i++) {
				articlesLink[i].classList.remove("is-articles-link-selected");
			}
			articlesLink[i].classList.add("is-articles-link-selected");
		}

		articlesPhoto[i].onmouseover = function(){
			for (let i = 0; i < articlesPhoto.length; i++) {
				articlesLink[i].classList.remove("is-articles-link-selected");
			}
			articlesLink[i].classList.add("is-articles-link-selected");
		}

	}

	for (let i = 0; i < tag.length; i++) {
		tag[i].onclick = function() {
			let keyTag = this.innerHTML.substr(1);
			console.log(keyTag);
			for (let j = 0; j < tag.length; j++) {
				tag[j].classList.remove("is-tag-selected");
			}
			tag[i].classList.add("is-tag-selected");

			// convert html to the same with class

			for (let i = 0; i < wrapArticles.length; i++) {
				wrapArticles[i].classList.add("hide-tag-articles");
				if(keyTag === "all") {
					wrapArticles[i].classList.remove("hide-tag-articles");
				}
				else if(wrapArticles[i].classList.contains(keyTag)) {
					wrapArticles[i].classList.remove("hide-tag-articles");
				}
			}
			
			
		}
	}



	// for (let i = 0; i < bannerSlide.length; i++) {
	// 	bannerSlide.eq(i).on("click", function(){
	// 		for (let j = 0; j < bannerSlide.length; j++) {
	// 			bannerSlide.eq(j).removeClass("line-beside");
	// 		}
	// 		bannerSlide.eq(i).addClass("line-beside");
	// 	});
	// }


}, false);


// document.addEventListener("DOMContentLoaded",function(){
// 	// MODEL BOX
// 	var articlesPhoto = document.querySelectorAll(".articles-photo");
// 	var modalBox = document.querySelectorAll(".modal-box");
// 	var wrapModalBox = document.querySelectorAll(".wrap-modal-box");
// 	var modalClose = document.querySelectorAll(".modal-close");
// 	console.log(articlesPhoto);
// 	console.log(modalBox);
// 	for (var i = 0; i < articlesPhoto.length; i++) {
// 		articlesPhoto[i].onclick = function(){
// 			modalBox[0].classList.add("is-modal-selected");
// 			wrapModalBox[0].classList.add("is-modal-selected");
// 		}
// 	}
// 	modalClose[0].onclick = function(){
// 		modalBox[0].classList.remove("is-modal-selected");
// 		wrapModalBox[0].classList.remove("is-modal-selected");
// 	}
// 	wrapModalBox[0].onclick = function(){
// 		modalBox[0].classList.remove("is-modal-selected");
// 		wrapModalBox[0].classList.remove("is-modal-selected");
// 	}
// }, false);