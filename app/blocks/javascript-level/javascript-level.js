import noUiSlider from 'nouislider';

export default () => {
	const slider = document.querySelector('.js-javascript-level-slider');
	const sliderInput = document.querySelector('.js-javascript-level-input');

	const sliderValues = ['Не владею', 'Использую готовые решения', 'Использую готовые решения и умею их переделывать',
	'Пишу сложный JS с нуля'];

	const sliderConfig = {
		start: 49,
		snap: true,
		range: {
			min: 0,
			'19.8%': 19.8,
			'48.9%': 48.9,
			max: 100
		},
		pips: {
			mode: 'steps',
			density: 100
		}
	};

	const applySliderValues = function (sliderNode, values) {
		const valueNodes = [].slice.call(sliderNode.querySelectorAll('.noUi-value-large'));

		valueNodes.forEach((valueNode, index) => {
			const value = valueNode.innerHTML;
			valueNode.innerHTML = values[index];
			valueNode.addEventListener('click', () => sliderNode.noUiSlider.set(value));
		});
	};

	noUiSlider.create(slider, sliderConfig);
	applySliderValues(slider, sliderValues);

	slider.noUiSlider.on('update', values => {
		sliderInput.value = parseInt(values[0], 10);
	});
};
