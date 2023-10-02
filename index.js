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

// Function to hide the loader and display the content
function hideLoader() {
    const loader = document.querySelector('.loader-wrapper');
    loader.style.transition = 'opacity 1s ease-in-out';
    loader.style.opacity = '0';
  
    setTimeout(() => {
      loader.style.display = 'none';
    }, 1400); // Adjust the delay as needed
  }
  
  // Call the function to hide the loader when the page is loaded
  window.addEventListener('load', hideLoader);
  
  // Call the function to initially hide the content
  document.addEventListener('DOMContentLoaded', () => {
    // Add code to hide your content initially (if needed)
    // For example: document.querySelector('.your-content-class').style.display = 'none';
  });
  
 // Your existing code
const bob = document.getElementsByTagName('div')[0];
let mouseX = 0;
let mouseY = 0;
let ballX = 0;
let ballY = 0;
let speed = 0.2;  //how fast ball catches up to mouse pointer;

function animate() {
  let distX = mouseX - ballX;
  let distY = mouseY - ballY;
  ballX = ballX + (distX * speed);
  ballY = ballY + (distY * speed);
  bob.style.left = ballX + 'px';
  bob.style.top = ballY + 'px';
  requestAnimationFrame(animate);
};

animate();

document.addEventListener('mousemove', function(e) {
  mouseX = e.pageX;
  mouseY = e.pageY;
});

document.addEventListener('click', function(e) {
  e.preventDefault;
  bob.classList.remove('active');
  //some rando comment
  void bob.offsetWidth;
  bob.classList.add('active');
}, false);

// Get references to the elements you want to trigger the cursor color change
const elementsToChangeColor = document.querySelectorAll('.color-change');

// Add event listeners for mouseenter and mouseleave events to the target elements
elementsToChangeColor.forEach((element) => {
  element.addEventListener('mouseenter', () => {
    bob.style.backgroundColor = '#000000'; // Change cursor color to black
  });

  element.addEventListener('mouseleave', () => {
    bob.style.backgroundColor = '#FF2C5E'; // Change cursor color back to the original color
  });
});

// Get the modal and button elements
const modal = document.getElementById('resumeModal');
const btn = document.getElementById('openModalBtn');
const closeBtn = document.querySelector('.close');

// When the user clicks the button, open the modal
btn.addEventListener('click', () => {
    modal.style.display = 'block';
});

// When the user clicks the close button or outside the modal, close it
closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});



  
  
  

