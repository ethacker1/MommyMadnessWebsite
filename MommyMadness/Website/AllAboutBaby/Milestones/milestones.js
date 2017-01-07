//variables
var buttons = document.getElementsByClassName('buttons');
var content = document.getElementsByClassName('Content');

//function
function display(content) {

    for (i=0; i<content.length; i++){
        if(x === content[i]){
            content[i].style.display='inline';
        }
        else {
            content[i].style.display = 'none';
        }
    }
}

//event listeners
buttons[0].addEventListener("click", function () {
    display(content[0])
});
buttons[1].addEventListener("click", function () {
    display(content[1])
});
buttons[2].addEventListener("click", function () {
    display(content[2])
});
buttons[3].addEventListener("click", function () {
    display(content[3])
} );
buttons[4].addEventListener("click", function () {
    display(content[4])
});
buttons[5].addEventListener("click",  function () {
    display(content[5])
});
buttons[6].addEventListener("click", function () {
    display(content[6])
});
buttons[7].addEventListener("click", function () {
    display(content[7])
});