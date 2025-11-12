// Page Loader
(function() {
    const loader = document.getElementById('pageLoader');
    const body = document.body;

    // Add loading class to hide content
    body.classList.add('loading');

    // Prevent scrolling while loading
    body.style.overflow = 'hidden';

    // Simulate loading progress
    let progress = 0;
    const loadingInterval = setInterval(() => {
        progress += Math.random() * 30;
        if (progress >= 100) {
            progress = 100;
            clearInterval(loadingInterval);
        }
    }, 100);

    // Wait for page to fully load
    window.addEventListener('load', function() {
        setTimeout(() => {
            // Hide loader
            if (loader) {
                loader.classList.add('hidden');
                body.style.overflow = '';

                // Remove loader from DOM after animation
                setTimeout(() => {
                    loader.remove();
                    // Remove loading class to make content visible
                    body.classList.remove('loading');
                    // Trigger content animations
                    revealContent();
                }, 500);
            }
        }, 2000); // Show loader for at least 2 seconds
    });

    // Reveal content sections one by one
    function revealContent() {
        const sections = [
            document.querySelector('.navbar'),
            document.querySelector('.main'),
            document.querySelector('#works'),
            document.querySelector('.about'),
            document.querySelector('.footer')
        ];

        sections.forEach((section, index) => {
            if (section) {
                setTimeout(() => {
                    section.style.opacity = '0';
                    section.style.transform = 'translateY(30px)';
                    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
                    section.style.visibility = 'visible';

                    // Trigger animation
                    setTimeout(() => {
                        section.style.opacity = '1';
                        section.style.transform = 'translateY(0)';
                    }, 50);
                }, index * 150); // Stagger animations by 150ms
            }
        });
    }
})();

const rowOne = document.getElementsByClassName('rowOne')[0];
const rowTwo = document.getElementsByClassName('rowTwo')[0];

let lastScrollTop = 0;
let translateXValueOne = 0;
let translateXValueTwo = 0;
let ticking = false;
let initializedTwo = false;

// Calculate maximum scroll boundaries to prevent empty space
function getMaxScroll(row) {
    if (!row) return 0;
    const scrollWidth = row.scrollWidth;
    const clientWidth = row.clientWidth;
    return Math.max(scrollWidth - clientWidth, 0);
}

if (rowOne && rowTwo) {
    // Add smooth CSS transition
    rowOne.style.transition = 'transform 0.1s ease-out';
    rowTwo.style.transition = 'transform 0.1s ease-out';

    window.addEventListener('scroll', function () {
        if (!ticking) {
            window.requestAnimationFrame(function() {
                try {
                    var scrollTop = document.documentElement.scrollTop;
                    var scrollDelta = scrollTop - lastScrollTop;

                    // Calculate max boundaries
                    const maxRowOne = getMaxScroll(rowOne);
                    const maxRowTwo = getMaxScroll(rowTwo);

                    // Initialize rowTwo starting position (start from right edge, moved left)
                    if (!initializedTwo && maxRowTwo > 0) {
                        translateXValueTwo = -maxRowTwo;
                        initializedTwo = true;
                    }

                    // Update translation values - rowOne moves left, rowTwo moves right (opposite direction)
                    translateXValueOne += scrollDelta * 0.5;
                    translateXValueTwo += scrollDelta * 0.5;  // Same increment but different starting position

                    // Clamp values to prevent showing empty space
                    translateXValueOne = Math.max(0, Math.min(translateXValueOne, maxRowOne));
                    translateXValueTwo = Math.max(-maxRowTwo, Math.min(translateXValueTwo, 0));

                    // Apply transforms
                    rowOne.style.transform = `translateX(-${translateXValueOne}px)`;
                    rowTwo.style.transform = `translateX(${translateXValueTwo}px)`;

                    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
                } catch (error) {
                    console.error('Scroll animation error:', error);
                }
                ticking = false;
            });
            ticking = true;
        }
    });
}








const menuIcon = document.getElementsByClassName('menuIcon')[0];
const mainEl = document.getElementsByClassName('main')[0];
const cancelIcon = document.getElementsByClassName('cancelIcon')[0];
const mobNavBar = document.getElementsByClassName('mob-navbar')[0];
const contactOpt = document.getElementsByClassName('contact')[0];

if (menuIcon && mainEl && cancelIcon && mobNavBar) {
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

    if (contactOpt) {
        contactOpt.addEventListener('click', () => {
            menuIcon.style.display = 'block';
            mainEl.style.display = 'block';
            cancelIcon.style.display = 'none';
            mobNavBar.style.display = 'none'
        });
    }
}

// Custom cursor animation - DISABLED
// const bob = document.getElementsByTagName('div')[0];
// let mouseX = 0;
// let mouseY = 0;
// let ballX = 0;
// let ballY = 0;
// let speed = 0.2;  //how fast ball catches up to mouse pointer;

// function animate() {
//   let distX = mouseX - ballX;
//   let distY = mouseY - ballY;
//   ballX = ballX + (distX * speed);
//   ballY = ballY + (distY * speed);
//   bob.style.left = ballX + 'px';
//   bob.style.top = ballY + 'px';
//   requestAnimationFrame(animate);
// };

// animate();

// document.addEventListener('mousemove', function(e) {
//   mouseX = e.pageX;
//   mouseY = e.pageY;
// });

// document.addEventListener('click', function(e) {
//   e.preventDefault;
//   bob.classList.remove('active');
//   void bob.offsetWidth;
//   bob.classList.add('active');
// }, false);

// Get references to the elements you want to trigger the cursor color change
// const elementsToChangeColor = document.querySelectorAll('.color-change');

// Add event listeners for mouseenter and mouseleave events to the target elements
// elementsToChangeColor.forEach((element) => {
//   element.addEventListener('mouseenter', () => {
//     bob.style.backgroundColor = '#ffffff'; // Change cursor color to black
//   });

//   element.addEventListener('mouseleave', () => {
//     bob.style.backgroundColor = '#FF2C5E'; // Change cursor color back to the original color
//   });
// });

// modals for view prototype //
var btn1 = document.getElementById('protobut');
var btn2 = document.getElementById('protobut1');
var btn3 = document.getElementById('protobut2');
var btn4 = document.getElementById('protobut3');
var btn5 = document.getElementById('protobut4');
var btn6 = document.getElementById('protobut5');
var btn7 = document.getElementById('protobut6');
var btn8 = document.getElementById('protobut7');
var modal = document.getElementById('modalproto');
var modalIframe = document.getElementById('modalIframe');
var closeBtn = document.querySelector('.closee');

if (btn1 && modal && modalIframe) {
btn1.addEventListener('click', function () {
    // Set the URL you want to open in the modal
    var url = 'https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FERUozRgIX5986VSsDZVzvL%2FIntellemo_AI_OCL_UI%3Fpage-id%3D0%253A1%26type%3Ddesign%26node-id%3D6-2%26viewport%3D252%252C1183%252C0.06%26t%3DwrA3hF2VaIWA0CBd-1%26scaling%3Dmin-zoom%26starting-point-node-id%3D6%253A2%26mode%3Ddesign';
    modalIframe.src = url;

    // Display the modal
    modal.style.display = 'block';
});
}

if (btn2 && modal && modalIframe) {
btn2.addEventListener('click', function () {
    // Set the URL you want to open in the modal
    var url = 'https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FLVljkzeNTPXOwZNbAz2FbQ%2FPricing-Plans%3Fpage-id%3D0%253A1%26type%3Ddesign%26node-id%3D1249-63%26viewport%3D-6743%252C2955%252C0.17%26t%3D8leX5Qzx2jQwvr05-1%26scaling%3Dscale-down%26starting-point-node-id%3D1249%253A63%26show-proto-sidebar%3D1%26mode%3Ddesign';
    modalIframe.src = url;

    // Display the modal
    modal.style.display = 'block';
});
}

if (btn3 && modal && modalIframe) {
btn3.addEventListener('click', function () {
  // Set the URL you want to open in the modal
  var url = 'https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FnOZLNI6tMeuDsjtyHQkCxJ%2FDRMURS%3Fpage-id%3D0%253A1%26type%3Ddesign%26node-id%3D30-23%26viewport%3D357%252C386%252C0.06%26t%3DUEJgKNOUySURCwmK-1%26scaling%3Dscale-down%26starting-point-node-id%3D1%253A2%26mode%3Ddesign';
  modalIframe.src = url;

  // Display the modal
  modal.style.display = 'block';
});
}

if (btn4 && modal && modalIframe) {
btn4.addEventListener('click', function () {
  // Set the URL you want to open in the modal
  var url = 'https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FII0UHlhWmOlKd9HLNarfNq%2FVANDALUR_ZOO_APP%3Fpage-id%3D0%253A1%26type%3Ddesign%26node-id%3D56-377%26viewport%3D192%252C302%252C0.14%26t%3DaCkGWEGVUsgZkHAA-1%26scaling%3Dscale-down%26starting-point-node-id%3D5%253A2%26mode%3Ddesign';
  modalIframe.src = url;

  // Display the modal
  modal.style.display = 'block';
});
}

if (btn5 && modal && modalIframe) {
btn5.addEventListener('click', function () {
  // Set the URL you want to open in the modal
  var url = 'https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FweywwG0OojQxVOTgTRzIQ0%2FVOYAGER%3Fpage-id%3D0%253A1%26type%3Ddesign%26node-id%3D59-285%26viewport%3D83%252C364%252C0.06%26t%3DOdR1J5gCwbjskNME-1%26scaling%3Dscale-down%26starting-point-node-id%3D4%253A131%26mode%3Ddesign';
  modalIframe.src = url;

  // Display the modal
  modal.style.display = 'block';
});
}

if (btn6 && modal && modalIframe) {
btn6.addEventListener('click', function () {
  // Set the URL you want to open in the modal
  var url = 'https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FlXzxWsM1d6zz8tyL6a7zP4%2FREDFOOT%3Fpage-id%3D320%253A7217%26type%3Ddesign%26node-id%3D337-9330%26viewport%3D219%252C285%252C0.1%26t%3D0V1j5qBWUWzrgiDv-1%26scaling%3Dscale-down%26starting-point-node-id%3D595%253A2167%26mode%3Ddesign';
  modalIframe.src = url;

  // Display the modal
  modal.style.display = 'block';
});
}

if (btn7 && modal && modalIframe) {
btn7.addEventListener('click', function () {
  // Set the URL you want to open in the modal
  var url = 'https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FwZVGgv92n4plndBGck2eTi%2FTHEME%3Fpage-id%3D0%253A1%26type%3Ddesign%26node-id%3D27-134%26viewport%3D181%252C202%252C0.1%26t%3D1RLaDWwhFHGhpCxZ-1%26scaling%3Dscale-down%26starting-point-node-id%3D27%253A134%26show-proto-sidebar%3D1%26mode%3Ddesign';
  modalIframe.src = url;

  // Display the modal
  modal.style.display = 'block';
});
}

if (btn8 && modal && modalIframe) {
btn8.addEventListener('click', function () {
  // Set the URL you want to open in the modal
  var url = 'https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FLBt29DDPLXEspv1v532ceC%2FHOUSE_OF_COMICS%3Fpage-id%3D0%253A1%26type%3Ddesign%26node-id%3D47-383%26viewport%3D277%252C64%252C0.06%26t%3DSGGzUQZHO04bRpOn-1%26scaling%3Dcontain%26starting-point-node-id%3D3%253A2%26mode%3Ddesign';
  modalIframe.src = url;

  // Display the modal
  modal.style.display = 'block';
});
}

// Close the modal when clicking the close button
if (closeBtn) {
closeBtn.addEventListener('click', function () {
  modal.style.display = 'none';
});
}

// Close modal when clicking outside of it
window.addEventListener('click', function (event) {
  if (modal && event.target === modal) {
      modal.style.display = 'none';
  }

  // Close resume modal when clicking outside
  if (resumeModal && event.target === resumeModal) {
      resumeModal.style.display = 'none';
  }
});

// Resume Modal Functionality
const resumeModal = document.getElementById('resumeModal');
const resumeLink = document.getElementById('resumeLink');
const resumeLinkMobile = document.getElementById('resumeLinkMobile');
const resumeLinkAbout = document.getElementById('resumeLinkAbout');
const closeResumeBtn = document.querySelector('.closeResume');
const downloadResumeBtn = document.getElementById('downloadResumeBtn');
const resumePreviewImg = document.getElementById('resumePreviewImg');
const resumeFileNameInput = document.getElementById('resumeFileName');

// Set resume preview image path
const RESUME_PREVIEW_PATH = './assets/Santhosh_Resume.jpg';
const RESUME_PDF_PATH = './assets/Santhosh_Resume.pdf';

// Open resume modal
function openResumeModal(e) {
    e.preventDefault();
    if (resumePreviewImg && resumeModal) {
        resumePreviewImg.src = RESUME_PREVIEW_PATH;
        resumeModal.style.display = 'block';

        // Initialize Lucide icons for the modal
        if (typeof lucide !== 'undefined') {
            lucide.createIcons();
        }
    }
}

if (resumeLink) {
    resumeLink.addEventListener('click', openResumeModal);
}

if (resumeLinkMobile) {
    resumeLinkMobile.addEventListener('click', openResumeModal);
}

if (resumeLinkAbout) {
    resumeLinkAbout.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        // Manually call openResumeModal with the event
        if (resumePreviewImg && resumeModal) {
            resumePreviewImg.src = RESUME_PREVIEW_PATH;
            resumeModal.style.display = 'block';

            // Initialize Lucide icons for the modal
            if (typeof lucide !== 'undefined') {
                lucide.createIcons();
            }
        }
    });
}

// Close resume modal
if (closeResumeBtn) {
    closeResumeBtn.addEventListener('click', function() {
        if (resumeModal) {
            resumeModal.style.display = 'none';
        }
    });
}

// Download resume with custom filename
if (downloadResumeBtn) {
    downloadResumeBtn.addEventListener('click', function() {
        const customFileName = (resumeFileNameInput && resumeFileNameInput.value.trim()) || 'Santhosh_Resume';
        const link = document.createElement('a');
        link.href = RESUME_PDF_PATH;
        link.download = customFileName + '.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    });
}

// Initialize Lucide icons on page load
if (typeof lucide !== 'undefined') {
    document.addEventListener('DOMContentLoaded', function() {
        lucide.createIcons();
    });
}

// Force cursor pointer on all interactive elements - Run immediately
(function() {
    function enforceCursorPointer() {
        // Select all navigation and interactive elements
        const interactiveSelectors = [
            '.navbar *',
            '.navbar',
            '.navbar-nav *',
            '.navbar-nav li',
            '.navbar-nav a',
            '.navbar-nav h3',
            '.nav-link-text',
            '.logo-desktop',
            '.logo-desktop *',
            '.mob-navbar *',
            '.mob-navbar',
            '.mobNavbar-nav *',
            '.mobNavbar-nav li',
            '.mobNavbar-nav a',
            '.mobNavbar-nav h3',
            '.menuIcon',
            '.cancelIcon',
            '.scroll-to-top',
            '.scroll-to-top *',
            'a',
            'button',
            '.button1',
            '.button2',
            '.button3',
            '[onclick]',
            '.color-change'
        ];

        // Apply cursor pointer to all matching elements
        interactiveSelectors.forEach(selector => {
            try {
                const elements = document.querySelectorAll(selector);
                elements.forEach(el => {
                    el.style.cssText += 'cursor: pointer !important;';
                });
            } catch (e) {
                // Ignore errors
            }
        });
    }

    // Run immediately
    enforceCursorPointer();

    // Run after DOM is fully loaded
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', enforceCursorPointer);
    } else {
        enforceCursorPointer();
    }

    // Run after a short delay to ensure all elements are loaded
    setTimeout(enforceCursorPointer, 100);
    setTimeout(enforceCursorPointer, 500);
    setTimeout(enforceCursorPointer, 1000);
})();
