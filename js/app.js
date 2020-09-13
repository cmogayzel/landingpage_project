$('.nav a').on('click', function(e) {
    if (this.hash !== "") {
        e.preventDefault();

        const hash = this.hash;

        $('html, body')
            .animate({
                scrollTOp: $(has).offset().scrollTOp
            }, 900);
    }
});