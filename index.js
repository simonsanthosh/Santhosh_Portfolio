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
/* function hideLoader() {
    const loader = document.querySelector('.loader-wrapper');
    loader.style.transition = 'opacity 1s ease-in-out';
    loader.style.opacity = '0';
  
    setTimeout(() => {
      loader.style.display = 'none';
    }, 1000); // Adjust the delay as needed
  }
  
  // Call the function to hide the loader when the page is loaded
  window.addEventListener('load', hideLoader);
  
  // Call the function to initially hide the content
  document.addEventListener('DOMContentLoaded', () => {
    // Add code to hide your content initially (if needed)
    // For example: document.querySelector('.your-content-class').style.display = 'none';
  }); */
  
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
    bob.style.backgroundColor = '#ffffff'; // Change cursor color to black
  });

  element.addEventListener('mouseleave', () => {
    bob.style.backgroundColor = '#FF2C5E'; // Change cursor color back to the original color
  });
});

//modals for view prototype
  var modal = document.getElementById('myModal');
  var btn1 = document.getElementById('protobut');
  var btn2 = document.getElementById('protobut1');
  var btn3 = document.getElementById('protobut2');
  var btn4 = document.getElementById('protobut3');
  var closeModalBtn = document.getElementById('closeModal');
  var modalIframe = document.getElementById('modalIframe');

  btn1.addEventListener('click', function () {
      // Set the URL you want to open in the modal
      var url = 'https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FII0UHlhWmOlKd9HLNarfNq%2FVANDALUR_ZOO_APP%3Fpage-id%3D0%253A1%26type%3Ddesign%26node-id%3D56-377%26viewport%3D192%252C302%252C0.14%26t%3DaCkGWEGVUsgZkHAA-1%26scaling%3Dscale-down%26starting-point-node-id%3D5%253A2%26mode%3Ddesign';
      modalIframe.src = url;

      // Display the modal
      modal.style.display = 'block';
  });

  btn2.addEventListener('click', function () {
    // Set the URL you want to open in the modal
    var url = 'https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FvotIpCQuNhjRLMPg9cjnhf%2FPricing_Plans%3Fpage-id%3D0%253A1%26type%3Ddesign%26node-id%3D1249-63%26viewport%3D-5761%252C1743%252C0.14%26t%3DbGMSt6BISIsQDAxE-1%26scaling%3Dscale-down%26starting-point-node-id%3D1249%253A63%26mode%3Ddesign';
    modalIframe.src = url;

    // Display the modal
    modal.style.display = 'block';
});

btn3.addEventListener('click', function () {
  // Set the URL you want to open in the modal
  var url = 'https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FnOZLNI6tMeuDsjtyHQkCxJ%2FDRMURS%3Fpage-id%3D0%253A1%26type%3Ddesign%26node-id%3D30-23%26viewport%3D357%252C386%252C0.06%26t%3DUEJgKNOUySURCwmK-1%26scaling%3Dscale-down%26starting-point-node-id%3D1%253A2%26mode%3Ddesign';
  modalIframe.src = url;

  // Display the modal
  modal.style.display = 'block';
});

btn4.addEventListener('click', function () {
  // Set the URL you want to open in the modal
  var url = 'https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FII0UHlhWmOlKd9HLNarfNq%2FVANDALUR_ZOO_APP%3Fpage-id%3D0%253A1%26type%3Ddesign%26node-id%3D56-377%26viewport%3D192%252C302%252C0.14%26t%3DaCkGWEGVUsgZkHAA-1%26scaling%3Dscale-down%26starting-point-node-id%3D5%253A2%26mode%3Ddesign';
  modalIframe.src = url;

  // Display the modal
  modal.style.display = 'block';
});

  closeModalBtn.addEventListener('click', function () {
      // Close the modal when the close button is clicked
      modal.style.display = 'none';
      // Reset the iframe src to stop the video/audio (if applicable)
      modalIframe.src = '';
  });

  // Close the modal if the overlay is clicked
  window.addEventListener('click', function (event) {
      if (event.target === modal) {
          modal.style.display = 'none';
          modalIframe.src = '';
      }
  });