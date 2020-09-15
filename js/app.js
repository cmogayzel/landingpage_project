
$('.nav a').on('click', function(e) {
    if (this.hash !== "") {
        e.preventDefault();

        const hash = this.hash;

        $('html, body')
            .animate({
                scrollTop: $(has).offset().scrollTop
            }, 900);
    }
}); 


/* document.getElementById('myButton').addEventListener('click', function() {
    console.log("Hello,Chuck");
}) */
/*
const myEvent = document.getElementById("myButton");

document.addEventListener('click', callEvent);

*/
document.getElementById('myButton').addEventListener('click', callEvent);


function callEvent() {
   
    console.log("Hello, Chuck");
} 