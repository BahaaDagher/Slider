// get all images and put them in array
var images =Array.from( document.querySelectorAll(".sliderContainer img")) ; 
// specify the current index and show the first image 
var currentIndex = 0 ;
images[currentIndex].classList.add("active");

//  generate a slide number 
changeSlideNumber() ; 
// specify the size of the array
var size = images.length ; 
// create pagination element 
var paginationElement  = document.createElement("ul") ; 
// set id for pagination element
paginationElement.setAttribute("id" , "pagination_UL") ;
// create pagination items
for (var i = 0 ; i < size ; i++) {

    var paginationItem = document.createElement("li") ;
    paginationItem.setAttribute("data-index" , i) ;
    paginationItem.appendChild(document.createTextNode(i+1)) ; 
    paginationElement.appendChild(paginationItem) ; 
}
// add pagination element to the page
var elementsParent  = document.getElementById("pagination") ;
elementsParent.appendChild(paginationElement) ;

// next and prev functions
function nextSlide() {
    images[currentIndex].classList.remove("active");
    currentIndex = (currentIndex + 1) % size ; 
    images[currentIndex].classList.add("active");
    changeSlideNumber() ;
}
function prevSlide() {
    images[currentIndex].classList.remove("active");
    currentIndex = (currentIndex - 1 + size) % size ; 
    images[currentIndex].classList.add("active");
    changeSlideNumber() ;
}

// next and prev buttons
var nextButton = document.getElementById("next") ;
var prevButton = document.getElementById("prev") ;

// on click on pagination items
nextButton.onclick = nextSlide ;
prevButton.onclick = prevSlide ;

// specify the sliderNumber 

function changeSlideNumber() {
    var slideNumber = document.getElementById("number").innerText = currentIndex+1 ; 
}



// on click on pagination items
var paginationItems = Array.from(document.querySelectorAll("#pagination_UL li"));

paginationItems[currentIndex].classList.add("activeLi") ;
console.log('====================================');
console.log(paginationItems.children);
console.log('====================================');

paginationItems.forEach( (item) => {
    item.onclick = function () {
        images[currentIndex].classList.remove("active");
        paginationItems[currentIndex].classList.remove("activeLi") ;
        var slideNumber = item.getAttribute("data-index") ;
        currentIndex = slideNumber ;
        images[currentIndex].classList.add("active");
        paginationItems[currentIndex].classList.add("activeLi") ;
    }

});


