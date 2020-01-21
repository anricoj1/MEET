$(window).resize(footerShift)
$(document).ready(footerShift);

function footerShift() {
    if ($(window).width() < 767) {
        $('.footerDiv .rm').hide();
    } else {
        $('.footerDiv .rm').show();
    }
}