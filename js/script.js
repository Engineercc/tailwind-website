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
