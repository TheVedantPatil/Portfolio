//---------------          Scroll Bar Spy Indicator          ---------------//
$(document).ready(function () {

    $(window).on('scroll', function () {

        var link = $('.navbar a.dot');
        var top = $(window).scrollTop();

        $('.sec').each(function () {
            var id = $(this).attr('id');
            var height = $(this).height();
            var offset = $(this).offset().top - 150;
            if (top >= offset && top < offset + height) {
                link.removeClass('active');
                $('.navbar').find('[data-scroll="' + id + '"]').addClass('active');
            }
        });
    });
});


//---------------          Tab Switching          ---------------//
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}


//---------------          Projects          ---------------//
function openProject1() {
    window.location.href = 'Project1.html';
}
function openProject2() {
    window.location.href = 'Project2.html';
}
function openProject3() {
    window.location.href = 'Project3.html';
}