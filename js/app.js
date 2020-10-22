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


document.getElementById('myButton').addEventListener('click', callEvent);


function callEvent() {

    /* let div = document.createElement('div');
     div.id = 'content';
     div.innerHTML = '<p>CreateElement example</p>';
     document.body.appendChild(div); */

}