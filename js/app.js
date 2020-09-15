/* JavaScript for scrolling to specific href in HTML. */
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

