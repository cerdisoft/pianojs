// asignar un evento a un elemento
// event listener
const buttons = document.querySelectorAll('button');

buttons.forEach(
	button => button.addEventListener('click', playSound)
);

function playSound(event) {
	const button = event.target;
	const note = button.dataset.note;
	const audio = document.getElementById(`audio${note}`);
	audio.pause();
	audio.currentTime = 0;
	audio.play();
}


document.addEventListener('keydown', function(event) {
	const key = event.key;
	const button = document.querySelector(`button[data-key="${key}"]`);
	if (button)
		button.click();
});