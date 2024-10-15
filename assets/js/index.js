// Lấy các phần tử trong DOM
const playBtn = document.getElementById("play-btn");
const modal = document.getElementById("video-modal");
const closeBtn = document.querySelector(".close-btn");
const playBtnImage = document.getElementById("play-btn-image");

// Khi nhấn vào nút Play ở header, hiển thị modal
if (playBtn) {
  playBtn.addEventListener("click", function () {
    modal.style.display = "flex";
  });
}

// Khi nhấn vào nút Play ở ảnh, hiển thị modal
if (playBtnImage) {
  playBtnImage.addEventListener("click", function () {
    modal.style.display = "flex";
  });
}

// Khi nhấn vào nút Close (X), ẩn modal
if (closeBtn) {
  closeBtn.addEventListener("click", function () {
    modal.style.display = "none";
    // Dừng video khi đóng modal
    const iframe = document.getElementById("vimeo-video");
    iframe.src = iframe.src; // Reset lại video
  });
}

// Khi nhấn ngoài modal, ẩn modal
window.addEventListener("click", function (event) {
  if (event.target === modal) {
    modal.style.display = "none";
    // Dừng video khi đóng modal
    const iframe = document.getElementById("vimeo-video");
    iframe.src = iframe.src; // Reset lại video
  }
});

// Khi nhấn phím "Escape", ẩn modal
window.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    modal.style.display = "none";
    const iframe = document.getElementById("vimeo-video");
    iframe.src = iframe.src; // Reset lại video
  }
});

// Thêm hiệu ứng thay đổi màu nền navbar khi cuộn trang
window.addEventListener("scroll", function () {
  var navbar = document.querySelector("nav");
  if (window.scrollY > 100) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

function animateValue(id, start, end, duration) {
  const obj = document.getElementById(id);
  let startTimestamp = null;
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    obj.innerText = Math.floor(progress * (end - start) + start);
    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  };
  window.requestAnimationFrame(step);
}

// Call the counting function for each stat
document.addEventListener("DOMContentLoaded", () => {
  animateValue("students-count", 0, 4000, 2000);
  animateValue("teachers-count", 0, 49, 2000);
  animateValue("awards-count", 0, 12, 2000);
});

// Testimonials Auto-Switch and Navigation Dots
const testimonials = document.querySelectorAll('.testimonial-item');
const dots = document.querySelectorAll('.dot');
let currentIndex = 0;

function showTestimonial(index) {
  testimonials.forEach((item, i) => {
    item.classList.remove('active');
    dots[i].classList.remove('active');
    if (i === index) {
      item.classList.add('active');
      dots[i].classList.add('active');
    }
  });
}

dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    showTestimonial(index);
    currentIndex = index;
  });
});

setInterval(() => {
  currentIndex = (currentIndex + 1) % testimonials.length;
  showTestimonial(currentIndex);
}, 3000);

// Accordion Functionality
const accordionItems = document.querySelectorAll('.accordion-item');

accordionItems.forEach((item) => {
  const header = item.querySelector('.accordion-header');
  header.addEventListener('click', () => {
    accordionItems.forEach(i => i.classList.remove('active'));
    item.classList.add('active');
  });
});

