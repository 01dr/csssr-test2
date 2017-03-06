import autoSize from 'autosize';

export default () => {
	const textarea = document.querySelector('.js-expandable-textarea');
	autoSize(textarea);
};
