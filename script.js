const colorButton = document.getElementById('color-button');
const colorBox = document.getElementById('color-box');

colorButton.addEventListener('click', () => {
	const randomColor = getRandomColor();
	colorBox.style.backgroundColor = randomColor;
	colorBox.textContent = randomColor;
});

function getRandomColor() {
	const letters = '0123456789ABCDEF';
	let color = '#';
	for (let i = 0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * 16)];
	}
	return color;
}
