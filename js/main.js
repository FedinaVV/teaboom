/*tabs*/
let tab = function () {
    let tabNav = document.querySelectorAll('.tabs-nav__item');
    let tabContent = document.querySelectorAll('.tab');
    let tabName;

    tabNav.forEach(item => {
        item.addEventListener('click', selectTabNav)
    });

    function selectTabNav() {
        tabNav.forEach(item => {
            item.classList.remove('isActive');
        });
        this.classList.add('isActive');
        tabName = this.getAttribute('data-tab-name');
        selectTabContent(tabName)
    }

    function selectTabContent(tabName) {
        tabContent.forEach(item => {
            item.classList.contains(tabName) ? item.classList.add('isActive') : item.classList.remove('isActive');
        })
    }
};

tab();


/*slider*/
$(document).ready(function() {
    $('#slider').owlCarousel();
});

$('#slider').owlCarousel({
    items: 1,
    autoplay: true,
    dots: false,
    loop: true,
    margin: 10,
    autoplayTimeout: 2000,
    smartSpeed: 500,
    responsive: {
        640: {
            items: 3,
            startPosition: 1
        },
        1200: {
            items: 3,
            margin: 30
        }
    }
});

$('.slider__btn--prev').click(function () {
    $('#slider').owlCarousel().trigger('prev.owl.carousel');
});

$('.slider__btn--next').click(function () {
    $('#slider').owlCarousel().trigger('next.owl.carousel');
});

/*categories*/
const navBtn = document.querySelector('.sidebar__title');
const nav = document.querySelector('.sidebar__nav');

navBtn.onclick = function () {
    navBtn.classList.toggle('active');
    nav.classList.toggle('nav--mobile');
}