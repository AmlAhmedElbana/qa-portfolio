// 1. تغيير شكل النافبار عند السكروول
window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

// 2. Fade-in للأقسام
const sections = document.querySelectorAll(".section");

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });

sections.forEach(section => observer.observe(section));

// 3. Scroll to Top Button
const topBtn = document.createElement("button");
topBtn.innerText = "↑";
topBtn.id = "topBtn";
document.body.appendChild(topBtn);

topBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    topBtn.classList.add("show");
  } else {
    topBtn.classList.remove("show");
  }
});
// Typing Effect
const text = "Software Tester | QA Enthusiast | CS Graduate";
let i = 0;
const speed = 100; // سرعة الكتابة (مللي ثانية)

function typeWriter() {
  if (i < text.length) {
    document.getElementById("typing").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

// نبدأ الكتابة بعد ما الصفحة تفتح
window.addEventListener("load", typeWriter);
