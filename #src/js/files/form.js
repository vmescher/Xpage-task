//FORM===========================================================================================================================================
const form = document.querySelector('#comment-form');

if (form) {
	const inputPlaceholder = document.querySelectorAll('._placeholder');

	function placeholderRemove() {
		if (this.value === this.dataset.placeholder) {
			this.value = '';
		}
	}

	function placeholderAppend() {
		if (this.value === '') {
			this.value = this.dataset.placeholder;
		}
	}

	for (let input of inputPlaceholder) {
		input.value = input.dataset.placeholder;
		input.addEventListener('focus', placeholderRemove)
		input.addEventListener('blur', placeholderAppend)
	}
}

