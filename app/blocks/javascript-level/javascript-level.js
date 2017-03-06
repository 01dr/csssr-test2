import noUiSlider from 'nouislider';

export default () => {
	const slider = document.querySelector('.js-javascript-level-slider');
	const input = document.querySelector('.js-javascript-level-input');

	const labels = [
		'Не владею',
		'Использую готовые решения',
		'Использую готовые решения и умею их переделывать',
		'Пишу сложный JS с нуля'
	];

	const config = {
		start: 0,
		snap: true,
		range: {
			min: 1,
			'19.8%': 2,
			'48.9%': 3,
			max: 4
		},
		pips: {
			mode: 'steps',
			density: 100
		}
	};

	const customLabels = (slider, labels) => {
		const valNodes = slider.querySelectorAll('.noUi-value-large');

		valNodes.forEach((valNode, i) => {
			const intVal = valNode.innerHTML;
			valNode.innerHTML = labels[i];
			valNode.addEventListener('click', () => slider.noUiSlider.set(intVal));
		});
	}

	noUiSlider.create(slider, config);
	slider.noUiSlider.set(input.value);
	customLabels(slider, labels);
};
