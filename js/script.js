if (
  localStorage.getItem("color-theme") === "dark" ||
  (!("color-theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  document.documentElement.classList.add("dark");
} else {
  document.documentElement.classList.remove("dark");
}

const themeToggleIcon = document.getElementById("theme-toggle");

themeToggleIcon?.addEventListener("click", () => {
  if (themeToggleIcon.checked) {
    document.documentElement.classList.add("dark");
    localStorage.setItem("color-theme", "dark");
    localStorage.setItem("themeChecked", themeToggleIcon.checked);
  } else {
    document.documentElement.classList.remove("dark");
    localStorage.setItem("color-theme", "light");
    localStorage.setItem("themeChecked", themeToggleIcon.checked);
  }
});

window.addEventListener("load", () => {
  if (localStorage.getItem("themeChecked") == "true") {
    document.documentElement.classList.add("dark");
    themeToggleIcon.checked = true;
  }
});

const btn = document.getElementById("menu-btn");
const mobilMenu = document.getElementById("menu");
const a = [...btn?.children];
const navToggle = () => {
  btn?.classList.toggle("open");
  mobilMenu?.classList.toggle("flex");
  mobilMenu?.classList.toggle("hidden");
  if (mobilMenu?.classList.contains("flex")) {
    a.forEach((element) => {
      element.style.backgroundColor = "#fff";
    });
  } else {
    a.forEach((element) => {
      element.style.removeProperty("background-color");
    });
  }
};

btn?.addEventListener("click", navToggle);

let header = document.getElementById("header");
let sticky = header?.offsetTop;

const stickyHeader = () => {
  if (window.pageYOffset > sticky) {
    mobilMenu?.classList?.add("sticky");
    header?.classList.add("sticky");
    a.forEach((element) => {
      element.style.backgroundColor = "#fff";
    });
  } else {
    mobilMenu?.classList?.remove("sticky");
    header?.classList.remove("sticky");
    a.forEach((element) => {
      element.style.removeProperty("background-color");
    });
  }
};

window.onscroll = () => {
  stickyHeader();
};
