//Hospital Bag Section Toggle
var mustHave = document.getElementById('necessity');
var possibles = document.getElementById('maybe');
var extras = document.getElementById('extras');
var take = document.getElementById('take');

function Toggle() {
    var div = document.getElementById(this.id).nextElementSibling;

    if (div.style.display == 'none') {
        div.style.display = 'block';
        this.style.textAlign = 'left';
    } else {
        div.style.display = 'none';
        this.style.textAlign = 'center';
    }
}

mustHave.addEventListener("click", Toggle);
possibles.addEventListener("click", Toggle);
extras.addEventListener("click", Toggle);
take.addEventListener("click", Toggle);
//End Hospital Bag Section Toggle

