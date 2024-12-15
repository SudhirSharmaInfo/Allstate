function ham() {
    document.getElementById("hamburger-content").style.transform = "translateX(0%)";
    document.getElementById("hamburger-content").style.transition = "transform 0.5s";
}
function hamclose() {
    document.getElementById("hamburger-content").style.transform = "translateX(100%)";
    document.getElementById("hamburger-content").style.transition = "transform 0.5s";
}

function form() {
    document.getElementById("form-section").style.transform = "translateY(0%)";
    document.getElementById("form-section").style.transition = "transform 0.3s";
}
function formclose() {
    document.getElementById("form-section").style.transform = "translateY(100%)";
    document.getElementById("form-section").style.transition = "transform 0.3s";
}
// const multipleItemCarousel = document.querySelector("#testimonialCarousel");

// if (window.matchMedia("(min-width:576px)").matches) {
//   const carousel = new bootstrap.Carousel(multipleItemCarousel, {
//     interval: false
//   });

//   var carouselWidth = $(".carousel-inner")[0].scrollWidth;
//   var cardWidth = $(".carousel-item").width();

//   var scrollPosition = 0;

//   $(".carousel-control-next").on("click", function () {
//     if (scrollPosition < carouselWidth - cardWidth * 3) {
//       console.log("next");
//       scrollPosition = scrollPosition + cardWidth;
//       $(".carousel-inner").animate({ scrollLeft: scrollPosition }, 800);
//     }
//   });
//   $(".carousel-control-prev").on("click", function () {
//     if (scrollPosition > 0) {
//       scrollPosition = scrollPosition - cardWidth;
//       $(".carousel-inner").animate({ scrollLeft: scrollPosition }, 800);
//     }
//   });
// } else {
//   $(multipleItemCarousel).addClass("slide");
// }


// Close Modal Button
document.querySelector('.close-btn').addEventListener('click', () => {
    document.querySelector('.modal').style.display = 'none';
});

// OTP Button Alert
document.querySelector('.get-otp-btn').addEventListener('click', () => {
    const phoneNumber = document.getElementById('phone-number').value;
    if (phoneNumber.length === 10) {
        alert(`OTP Sent to +91 ${phoneNumber}`);
    } else {
        alert('Please enter a valid 10-digit phone number.');
    }
});
