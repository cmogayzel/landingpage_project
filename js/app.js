function printMessage(msg) {
    var messageDom = document.getElementById('message');

    messageDom.innerHTML += ('<br>' + msg + '<br>');

}

printMessage("hello, Chuck");

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


document.getElementById('myButton').addEventListener('click', callEvent);


function callEvent() {
   
    console.log("Hello, Chuck");
} 