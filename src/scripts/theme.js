let theme = "light";

let lsTheme = localStorage?.getItem("theme");

if (lsTheme !== undefined) theme = lsTheme;

if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
	theme = "dark";

	document.documentElement.classList.add("dark");
}

if (theme === "light") {
	document.documentElement.classList.remove("dark");
} else {
	document.documentElement.classList.add("dark");
}

window.localStorage.setItem("theme", theme);

const handleToggleClick = () => {
	const element = document.documentElement;
	element.classList.toggle("dark");

	const isDark = element.classList.contains("dark");
	localStorage.setItem("theme", isDark ? "dark" : "light");
};

document
	.querySelector(".js-theme-toggle")
	?.addEventListener("click", handleToggleClick);
