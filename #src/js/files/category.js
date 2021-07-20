const categoryButton = document.querySelector('.category__button');

if (categoryButton) {

	const categoryBody = document.querySelector('.category__body');
	const categories = document.querySelectorAll('.category__item');
	const catInput = document.querySelector('#category__select');

	function externalCloseCategory(event) {
		const target = event.target
		if (!target.closest('.category__button') && !target.closest('.category__body')) {
			categoryBody.classList.remove('_active');
			categoryButton.classList.remove('_active');
		}
	}

	function toggleCategory(event) {
		event.preventDefault();
		categoryBody.classList.toggle('_active');
		categoryButton.classList.toggle('_active');
		document.addEventListener('click', externalCloseCategory);
	}

	function selectCategory() {
		for (let category of categories) {
			if (category.classList.contains('category__item_active')) {
				category.classList.remove('category__item_active');
			}
		}
		this.classList.add('category__item_active');
		catInput.value = this.dataset.category;
		categoryBody.classList.toggle('_active');
		categoryButton.classList.toggle('_active');
	}

	categoryButton.addEventListener('click', toggleCategory);

	for (let category of categories) {
		category.addEventListener('click', selectCategory)
	}

}