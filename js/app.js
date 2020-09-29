/*
function printMessage(msg) {
    var messageDom = document.getElementById('message');

    messageDom.innerHTML += ('<br>' + msg + '<br>');

} 

printMessage("hello, Chuck");
 */



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

$(document).ready(function(){
    $('nav ul li a').click(function() {
        $('li a').removeClass("active");
        $(this).addClass("active");
    });
});


// document.getElementById('myButton').addEventListener('click', callEvent);

/*
function callEvent() {
   
    console.log("Hello, Chuck");
} */