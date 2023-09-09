const rowOne = document.getElementsByClassName('rowOne')[0];
const rowTwo = document.getElementsByClassName('rowTwo')[0];
console.log('line39', rowOne)

let lastScrollTop = 0;

let translateXValue = 0;
let scrollDirection = 0;
let rowTwoTranslationValue = -450;



var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
        console.log('line54', entry)
        if (entry.isIntersecting) {
            // entry.target.style.transform = `translateX(${scrollDirection}px)`;
            console.log('line57 running');
        } else {
            entry.target.style.transform = 'translateX(0)';
        }
    });
});


if (rowOne && rowTwo) {
    observer.observe(rowOne);
    observer.observe(rowTwo);

    window.addEventListener('scroll', function () {
        var scrollTop = document.documentElement.scrollTop;

        if (scrollTop > lastScrollTop) {
            translateXValue += 1;
            rowTwoTranslationValue += 1;
            rowOne.style.transform = `translateX(-${translateXValue}px)`;
            rowTwo.style.transform = `translateX(${rowTwoTranslationValue}px)`;

        } else {
            translateXValue -= 1;
            rowTwoTranslationValue -= 1;
            rowOne.style.transform = `translateX(-${translateXValue}px)`;
            rowTwo.style.transform = `translateX(${rowTwoTranslationValue}px)`;

        }
        // scrollDirection = scrollTop > lastScrollTop ? -1 : 1;
        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // Ensure negative scroll values are set to 0
    });
}








const menuIcon = document.getElementsByClassName('menuIcon')[0];
const mainEl = document.getElementsByClassName('main')[0];
const cancelIcon = document.getElementsByClassName('cancelIcon')[0];
const mobNavBar = document.getElementsByClassName('mob-navbar')[0];
const contactOpt = document.getElementsByClassName('contact')[0];

menuIcon.addEventListener('click', () => {
    menuIcon.style.display = 'none';
    mainEl.style.display = 'none';
    cancelIcon.style.display = 'block';
    mobNavBar.style.display = 'block'

});

cancelIcon.addEventListener('click', () => {
    menuIcon.style.display = 'block';
    mainEl.style.display = 'block';
    cancelIcon.style.display = 'none';
    mobNavBar.style.display = 'none'

});

contactOpt.addEventListener('click', () => {
    menuIcon.style.display = 'block';
    mainEl.style.display = 'block';
    cancelIcon.style.display = 'none';
    mobNavBar.style.display = 'none'
})


