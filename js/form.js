/* ================= GOOGLE FORM URL ================= */

const GOOGLE_FORM_URL = "https://docs.google.com/forms/u/0/d/e/1FAIpQLScf5H5WIlj29Mc0VkmChiXxthWdaOvGfDJy2QJOQ3di_auuEA/formResponse";

/* ================= FORM SUBMIT ================= */

document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const form = this;
  const btn = form.querySelector("button");

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const message = document.getElementById("message").value.trim();

  /* ================= VALIDATION ================= */

  if (!name || !email) {
    showStatus("⚠️ Please fill required fields.", "error");
    return;
  }

  if (!/^\S+@\S+\.\S+$/.test(email)) {
    showStatus("⚠️ Enter valid email address.", "error");
    return;
  }

  if (!message) {
    showStatus("⚠️ Please enter message.", "error");
    return;
  }

  /* ================= LOADING STATE ================= */

  btn.disabled = true;
  btn.innerText = "Sending...";
  document.body.style.cursor = "wait";

  /* ================= DATA ================= */

  const data = new FormData();
  data.append("entry.1555253116", name);
  data.append("entry.2098234938", email);
  data.append("entry.1719981594", phone);
  data.append("entry.580398882", message);

  /* ================= SUBMIT ================= */

  fetch(GOOGLE_FORM_URL, {
    method: "POST",
    mode: "no-cors",
    body: data
  })
  .then(() => {
  window.location.href = "pages/thank.html";
})
  .catch(() => {
    showStatus("❌ Something went wrong. Please try again.", "error");
  })
  .finally(() => {
    btn.disabled = false;
    btn.innerText = "Send Message";
    document.body.style.cursor = "default";
  });

});


/* ================= STATUS MESSAGE ANIMATION ================= */

function showStatus(text, type) {
  const status = document.getElementById("formStatus");

  status.innerText = text;
  status.style.opacity = "0";
  status.style.transform = "translateY(10px)";
  status.style.transition = "all 0.4s ease";

  if (type === "success") {
    status.style.color = "#2e7d32";
  } else {
    status.style.color = "#c62828";
  }

  setTimeout(() => {
    status.style.opacity = "1";
    status.style.transform = "translateY(0)";
  }, 100);

  /* Auto hide message after 5 sec */

  setTimeout(() => {
    status.style.opacity = "0";
    status.style.transform = "translateY(10px)";
  }, 5000);
}