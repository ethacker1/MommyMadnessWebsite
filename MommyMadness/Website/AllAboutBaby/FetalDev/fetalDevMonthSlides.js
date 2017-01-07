/**
 * Created by Emily Thacker on 12/29/2016.
 */
var slides = document.getElementsByClassName('fdSlide');
var buttons = document.getElementsByClassName('parentMenu');

function display(x){

    for (i=0; i<slides.length; i++){
        if(x === slides[i]){
            slides[i].style.display='inline';
        }
        else {
            slides[i].style.display = 'none';
        }
    }

}


buttons[0].addEventListener("click", function () {
    display(slides[0])
});
buttons[1].addEventListener("click", function () {
    display(slides[4])
});
buttons[2].addEventListener("click", function () {
    display(slides[8])
});
buttons[3].addEventListener("click", function () {
    display(slides[13])
} );
buttons[4].addEventListener("click", function () {
    display(slides[17])
});
buttons[5].addEventListener("click",  function () {
    display(slides[21])
});
buttons[6].addEventListener("click", function () {
    display(slides[26])
});
buttons[7].addEventListener("click", function () {
    display(slides[30])
});
buttons[8].addEventListener("click", function () {
    display(slides[35])
});