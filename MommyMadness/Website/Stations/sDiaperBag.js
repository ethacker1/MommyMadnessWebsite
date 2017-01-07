//Diaper Bag Section Toggle
var oneBaby = document.getElementById('oneBaby');
var twoBabies = document.getElementById('twoBabies');
var twoLittles = document.getElementById('twoLittles');
var mommyBag = document.getElementById('mommyBag');

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

oneBaby.addEventListener("click", Toggle);
twoBabies.addEventListener("click", Toggle);
twoLittles.addEventListener("click", Toggle);
mommyBag.addEventListener("click", Toggle);