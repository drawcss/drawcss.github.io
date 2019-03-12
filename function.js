document.addEventListener("DOMContentLoaded",function(){
	var articlesPhoto = document.querySelectorAll(".articles-photo");
	var articlesLink = document.querySelectorAll(".articles-link");
	var wrapAll = document.querySelectorAll(".wrap");

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