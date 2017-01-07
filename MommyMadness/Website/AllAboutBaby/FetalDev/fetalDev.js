//Fetal Dev
    //Variables
var previous = document.getElementById('pPage');
var next = document.getElementById('nPage');
var ndx = 0;
var slides = document.getElementsByClassName('fdSlide');
activeSlide = slides[ndx];
activeSlide.style.display = 'inline';

//Functions

var incrementSlide = function () {
    activeSlide.style.display='none';
    ndx++;
    ndx = ndx%slides.length;
    activeSlide = slides[ndx];
    activeSlide.style.display = 'inline';
};

var decrementSlide = function () {
    activeSlide.style.display='none';
    ndx--;
    ndx = ndx%slides.length;
    activeSlide = slides[ndx];
    activeSlide.style.display = 'inline';
};



//Event Listeners
previous.addEventListener("click", decrementSlide);
next.addEventListener("click", incrementSlide);
