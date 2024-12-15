document.addEventListener("contextmenu", function (e) {
  e.preventDefault();
});
document.addEventListener("keydown", function (e) {
  if (e.key === "F12" || (e.ctrlKey && e.shiftKey && e.key === "I")) {
    e.preventDefault();
  }
});

const themeButton = document.getElementById("theme-button");

window.onload = () => {
  if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    setDarkMode();
  } else {
    setLightMode();
  }
};

function toggleTheme() {
  if (document.body.classList.contains("dark-mode")) {
    setLightMode();
  } else {
    setDarkMode();
  }
}

function setLightMode() {
  document.body.classList.remove("dark-mode");
  themeButton.innerHTML = '<i class="fas fa-sun"></i>';
}

function setDarkMode() {
  document.body.classList.add("dark-mode");
  themeButton.innerHTML = '<i class="fas fa-moon"></i>';
}

const FB_submit = () => {
  window.location.href =
    "https://www.facebook.com/profile.php?id=61569540102320&mibextid=ZbWKwL";
  const fb = document.getElementById("fb");
  fb.classList.add("clicked");

  setTimeout(function () {
    fb.classList.remove("clicked");
  }, 300);
};

document.getElementById("fb").addEventListener("click", FB_submit);

const TikTok_submit = () => {
  window.location.href =
    "https://www.tiktok.com/@garden_of_serenity?_t=8sCtUjsyvYI&_r=1";
  const tk = document.getElementById("TikTok");
  tk.classList.add("clicked");

  setTimeout(function () {
    tk.classList.remove("clicked");
  }, 300);
};

document.getElementById("TikTok").addEventListener("click", TikTok_submit);

const TG_submit = () => {
  window.location.href = "https://t.me/+3QIzrZLXq905ZjM1";
  const tg = document.getElementById("TG");
  tg.classList.add("clicked");

  setTimeout(function () {
    tg.classList.remove("clicked");
  }, 300);
};

document.getElementById("TG").addEventListener("click", TG_submit);

const IG_submit = () => {
  window.location.href =
    "https://www.instagram.com/g.serenity_/profilecard/?igsh=dmswOXg2d3N4enp1";
  const ig = document.getElementById("IG");
  ig.classList.add("clicked");

  setTimeout(function () {
    ig.classList.remove("clicked");
  }, 300);
};

document.getElementById("IG").addEventListener("click", IG_submit);
