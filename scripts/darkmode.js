
const modeButton = document.querySelector("#mode");
const body = document.querySelector("body");

modeButton.addEventListener("click", () => {
	body.classList.toggle("dark")
	// if (modeButton.textContent.includes("🌑")) {
	// 	main.style.background = "#000";
	// 	main.style.color = "#fff";
	// 	modeButton.textContent = "💡";
	// } else {
	// 	main.style.background = "#eee";
	// 	main.style.color = "#000";
	// 	modeButton.textContent = "🕶️";
	// }

});
