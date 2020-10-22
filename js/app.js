<< << << < HEAD
    ===
    === =
    /*
    function printMessage(msg) {
        var messageDom = document.getElementById('message');

        messageDom.innerHTML += ('<br>' + msg + '<br>');

    } 

    printMessage("hello, Chuck");
     */



    >>>
    >>> > 8 ba094c999cfc45ff4f26f95af71afe30251e839
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

/* */
$(document).on('click', 'ul li', function() {
    $(this).addClass('active').siblings().removeClass('active');

});

/*$(document).on('click', 'ul li a', function() {
    console.log("Chuck!");

    var test1 = $('a').text();
    alert(test1);
 
}); */

$(document).ready(function() {
    $('nav ul li a').click(function() {
        $('li a').removeClass("active");
        $(this).addClass("active");
    });
});


// document.getElementById('myButton').addEventListener('click', callEvent);

/*
function callEvent() {
<<<<<<< HEAD

    /* let div = document.createElement('div');
     div.id = 'content';
     div.innerHTML = '<p>CreateElement example</p>';
     document.body.appendChild(div); */

}


console.log("Hello, Chuck");
}