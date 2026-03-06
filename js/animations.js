/* ================= DOM READY ================= */

document.addEventListener("DOMContentLoaded", () => {

/* ================= SCROLL REVEAL ANIMATION ================= */

const revealElements = document.querySelectorAll(
  "section, .service-card, .corp-card, .brand-card, .impact-grid div, .about-image img"
);
function revealOnScroll(){
  const windowHeight = window.innerHeight;

  revealElements.forEach(el=>{
    const elementTop = el.getBoundingClientRect().top;
    if(elementTop < windowHeight - 100){
      el.classList.add("show");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

/* ================= PARALLAX EFFECT ================= */

window.addEventListener("scroll", () => {

  const scrollY = window.scrollY;

  document.querySelectorAll(".about-image img").forEach(img=>{
    img.style.transform = `translateY(${scrollY * 0.05}px)`;
  });

  document.querySelectorAll(".hero-title").forEach(title=>{
    title.style.transform = `translateY(${scrollY * 0.15}px)`;
  });

});

/* ================= 3D TILT EFFECT ================= */

function addTiltEffect(selector){

  document.querySelectorAll(selector).forEach(card=>{

    card.addEventListener("mousemove", e=>{

      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width/2;
      const y = e.clientY - rect.top - rect.height/2;

      const rotateX = (-y / rect.height) * 10;
      const rotateY = (x / rect.width) * 10;

      card.style.transform =
        `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;

    });

    card.addEventListener("mouseleave", ()=>{
      card.style.transform =
        "rotateX(0deg) rotateY(0deg) scale(1)";
    });

  });

}

addTiltEffect(".service-card");
addTiltEffect(".corp-card");
addTiltEffect(".brand-card");
addTiltEffect(".review-card");

/* ================= TYPE TEXT EFFECT ================= */

const subtitle = document.querySelector(".hero-subtitle");

if(subtitle){

  const text = subtitle.innerText;
  subtitle.innerText = "";

  let index = 0;

  function typeText(){
    if(index < text.length){
      subtitle.innerText += text.charAt(index);
      index++;
      setTimeout(typeText, 40);
    }
  }

  setTimeout(typeText, 800);
}

/* ================= FLOATING LOGO ================= */

document.querySelectorAll(".logo").forEach(logo=>{

  let angle = 0;

  function floatLogo(){
    angle += 0.01;
    logo.style.transform =
      `translateY(${Math.sin(angle)*10}px)`;
    requestAnimationFrame(floatLogo);
  }

  floatLogo();

});

/* ================= SCROLL PROGRESS BAR ================= */

const progressBar = document.createElement("div");

progressBar.style.position = "fixed";
progressBar.style.top = "0";
progressBar.style.left = "0";
progressBar.style.height = "4px";
progressBar.style.width = "0%";
progressBar.style.zIndex = "9999";
progressBar.style.background =
  "linear-gradient(90deg,#5b2d8b,#00bcd4,#d4af37)";

document.body.appendChild(progressBar);

window.addEventListener("scroll", ()=>{

  const scrollTop = window.scrollY;
  const docHeight =
    document.body.scrollHeight - window.innerHeight;

  const progress = (scrollTop / docHeight) * 100;
  progressBar.style.width = progress + "%";

});



/* ================= YOUTUBE REVEAL ================= */

const ytCards = document.querySelectorAll(".yt-card");

function revealYT(){

  const trigger = window.innerHeight * 0.9;

  ytCards.forEach((card,index)=>{

    const rect = card.getBoundingClientRect();

    if(rect.top < trigger){

      setTimeout(()=>{
        card.classList.add("show");
      }, index*220);

    }

  });

}

window.addEventListener("scroll", revealYT);
revealYT();



/* ================= MOBILE MENU FINAL FIX ================= */

const menuBtn = document.querySelector(".mobile-menu-btn");
const mobileMenu = document.querySelector(".mobile-menu");
const mobileLinks = document.querySelectorAll(".mobile-menu a");

if(menuBtn && mobileMenu){

  menuBtn.addEventListener("click", ()=>{

    mobileMenu.classList.toggle("active");

    // ⭐ remove underline when menu closes
    if(!mobileMenu.classList.contains("active")){
      mobileLinks.forEach(l=> l.classList.remove("active"));
    }

  });

}

mobileLinks.forEach(link=>{

  link.addEventListener("click", ()=>{

    mobileLinks.forEach(l=> l.classList.remove("active"));
    link.classList.add("active");

    if(mobileMenu){
      mobileMenu.classList.remove("active");
    }

  });

});

/* ================= NAVBAR SCROLL SHRINK ================= */

window.addEventListener("scroll", ()=>{

  const nav = document.querySelector(".lux-navbar");

  if(window.scrollY > 60){
    nav.classList.add("scrolled");
  }else{
    nav.classList.remove("scrolled");
  }

});

/* ================= HERO SHADOW MODE SWITCH ================= */

const heroTitle = document.querySelector(".hero-title");
const heroSection = document.querySelector(".hero-video");

function updateHeroShadow(){

  if(!heroTitle || !heroSection) return;

  const rect = heroSection.getBoundingClientRect();

  if(rect.bottom > window.innerHeight * 0.3){
    heroTitle.classList.add("video-mode");
    heroTitle.classList.remove("normal-mode");
  }else{
    heroTitle.classList.add("normal-mode");
    heroTitle.classList.remove("video-mode");
  }

}

window.addEventListener("scroll", updateHeroShadow);
updateHeroShadow();

});

const slider = document.querySelector(".reviews-slider");

if (slider && window.innerWidth > 768) {

  let scrollAmount = 0;
  let autoSliding = true;
  let resumeTimeout;

  function autoSlide(){

    if(!autoSliding) return;

    scrollAmount += 0.35;

    if(scrollAmount >= slider.scrollWidth - slider.clientWidth){
      scrollAmount = 0;
    }

    slider.scrollLeft = scrollAmount;

    requestAnimationFrame(autoSlide);
  }

  autoSlide();

  /* ===== PAUSE WHEN USER INTERACTS ===== */

  function pauseAutoSlide(){
    autoSliding = false;

    clearTimeout(resumeTimeout);

    resumeTimeout = setTimeout(()=>{
      autoSliding = true;
      autoSlide();
    }, 2500); // resume after 2.5 sec
  }

  slider.addEventListener("mouseenter", pauseAutoSlide);
  slider.addEventListener("touchstart", pauseAutoSlide);
  slider.addEventListener("wheel", pauseAutoSlide);
  slider.addEventListener("mousedown", pauseAutoSlide);

}
document.addEventListener("DOMContentLoaded", () => {

  document.querySelectorAll(".review-read").forEach(btn => {

    btn.addEventListener("click", () => {

      const text = btn.previousElementSibling;

      text.classList.toggle("expanded");

      btn.innerText =
        text.classList.contains("expanded")
        ? "Read Less"
        : "Read More";

    });

  });

});