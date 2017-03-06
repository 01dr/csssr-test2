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
			'19.4%': 2,
			'48.7%': 3,
			max: 4
		},
		pips: {
			mode: 'steps',
			density: 100
		}
	};

	const customPips = (slider, labels) => {
		const valNodes = slider.querySelectorAll('.noUi-value-large');
		const pipNodes = slider.querySelectorAll('.noUi-marker');

		pipNodes[0].className += ' noUi-marker-first';
		pipNodes[pipNodes.length - 1].className += ' noUi-marker-last';
		valNodes[0].className += ' noUi-value-first';
		valNodes[valNodes.length - 1].className += ' noUi-value-last';

		valNodes.forEach((valNode, i) => {
			const intVal = valNode.innerHTML;
			valNode.innerHTML = labels[i];
			valNode.addEventListener('click', () => slider.noUiSlider.set(intVal));
		});
	}

	noUiSlider.create(slider, config);
	slider.noUiSlider.set(input.value);
	customPips(slider, labels);
};
