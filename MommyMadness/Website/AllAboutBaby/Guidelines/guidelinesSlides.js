//variables
var buttons = document.getElementsByClassName('guidelinesList');
var sections = document.getElementsByClassName('monthGuidelines');

//function
function hideSiblings(x){

    for (i=0; i<sections.length; i++){
        if(x === sections[i]){
            sections[i].style.display='inline';
        }
        else {
            sections[i].style.display = 'none';
        }
    }

}

//event listeners
buttons[0].addEventListener("click", function (){
    hideSiblings(sections[0]);
});
buttons[1].addEventListener("click", function (){
    hideSiblings(sections[1]);
});
buttons[2].addEventListener("click", function (){
    hideSiblings(sections[2]);
});