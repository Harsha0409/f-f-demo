// Select the toggle button and menu
const menuToggle = document.querySelector('.menu-toggle');
const rightSideIcons = document.querySelector('.right-side-icons');

// Add event listener to toggle the visibility of the menu
menuToggle.addEventListener('click', () => {
    rightSideIcons.classList.toggle('active');
});


// for members count
let count = 1;
const targetCount = 20;
const countElement = document.getElementById('rider-count');
let increaseCount;

document.querySelector('.members-count').addEventListener('mouseover', function () {
    // Start counting only if the count hasn't reached the target yet
    if (count === 1) {
        increaseCount = setInterval(() => {
            if (count <= targetCount) {
                countElement.textContent = `Our Biker Brotherhood is ${count}+ Riders Strong`;
                count++;
            } else {
                clearInterval(increaseCount); // Stop the interval when targetCount is reached
            }
        }, 100); // Adjust the speed as needed
    }
});


let currentImageIndex = 0;
let images = document.querySelectorAll('.grid-item img');
let modal = document.getElementById('imageModal');
let modalImage = document.getElementById('modal-image');

// Function to open modal with the clicked image
function openModal(index) {
    modal.style.display = 'block';
    currentImageIndex = index;
    showImage();
}

// Function to close modal
function closeModal() {
    modal.style.display = 'none';
}

// Function to show the image based on current index
function showImage() {
    modalImage.src = images[currentImageIndex].src;
}

// Function to change image when clicking next/prev buttons
function changeImage(direction) {
    currentImageIndex += direction;

    // Loop back to the first image if at the last image, or to the last image if at the first
    if (currentImageIndex >= images.length) {
        currentImageIndex = 0;
    } else if (currentImageIndex < 0) {
        currentImageIndex = images.length - 1;
    }

    showImage();
}

// Close the modal when clicking outside of the image
window.onclick = function(event) {
    if (event.target === modal) {
        closeModal();
    }
}



// gsap scroll trigger


// gsap.to('#main', {
//     backgroundColor: "#000",
//     scrollTrigger: {
//         trigger: "#main",
//         scroller: "body",
//         // markers: true,
//         start: "top -25%",
//         end: "top -70%",
//         scrub: 2
//     }
// });


//champions div
gsap.from(".champions-head", {
    y: 50,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: ".champions-head",
        scroller: "body",
        // markers: true,
        start: "top 60%",
        end: "top 55%",
        scrub: 3
    }
});


gsap.from(".winner", {
    scale: 0.8,
    opacity:0,
    duration: 1,
    stagger: 0.1,
    scrollTrigger: {
      trigger: ".winner",
      scroller: "body",
      // markers:false,
      start: "top 70%",
      end: "top 65%",
      scrub: 4
    },
  });

//about div
gsap.from(".about-intro", {
    y: 50,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: ".about-intro",
        scroller: "body",
        // markers: true,
        start: "top 60%",
        end: "top 55%",
        scrub: 3
    }
});

//about info
gsap.from(".about-intro-info", {
    x: 70,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: ".about-intro-info",
        scroller: "body",
        // markers: true,
        start: "top 60%",
        end: "top 55%",
        scrub: 5
    }
});

//memebers
gsap.from(".members-count-align", {
    y: 50,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: ".members-count-align",
        scroller: "body",
        // markers: true,
        start: "top 60%",
        end: "top 55%",
        scrub: 5
    }
});

gsap.from(".count", {
    x: -50,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: ".count",
        scroller: "body",
        // markers: true,
        start: "top 60%",
        end: "top 55%",
        scrub: 5
    }
});

gsap.from(".group-img", {
    y: 50,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: ".group-img",
        scroller: "body",
        // markers: true,
        start: "top 60%",
        end: "top 55%",
        scrub: 5
    }
});



