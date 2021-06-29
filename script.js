const setTheme = (theme_name) => {
  const theme_style = document.getElementById("theme-style");
  theme_style.setAttribute("href", `${theme_name}.css`);
  localStorage.setItem("theme", theme_name);
};

let theme = localStorage.getItem("theme");
if (!theme) {
  setTheme("green");
} else {
  setTheme(theme);
}

const theme_dot = document.querySelectorAll(".theme-dot");
theme_dot.forEach((dot) => {
  dot.addEventListener("click", () => {
    var theme_name = dot.id.split("-")[0];
    if (theme_name === "light") {
      theme_name = "default";
    }
    setTheme(theme_name);
  });
});
