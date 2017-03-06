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

	const browserWidth = window.innerWidth || document.body.clientWidth;

	console.log(browserWidth);

	const config = {
		start: 0,
		snap: true,
		orientation: browserWidth < 700 ? 'vertical' : 'horizontal',
		range: browserWidth < 700 ? {
			min: 1,
			'33.3%': 2,
			'66.6%': 3,
			max: 4
		} : {
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

	const customPips = (sliderNode, vals) => {
		const valNodes = sliderNode.querySelectorAll('.noUi-value-large');
		const pipNodes = sliderNode.querySelectorAll('.noUi-marker');

		pipNodes[0].className += ' noUi-marker-first';
		pipNodes[pipNodes.length - 1].className += ' noUi-marker-last';
		valNodes[0].className += ' noUi-value-first';
		valNodes[valNodes.length - 1].className += ' noUi-value-last';

		valNodes.forEach((valNode, i) => {
			const intVal = valNode.innerHTML;
			valNode.innerHTML = vals[i];
			valNode.addEventListener('click', () => sliderNode.noUiSlider.set(intVal));
		});
	};

	noUiSlider.create(slider, config);
	slider.noUiSlider.set(input.value);
	customPips(slider, labels);
};
