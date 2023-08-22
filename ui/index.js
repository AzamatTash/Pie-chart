export const svg = document.querySelector('svg');

const svgns = 'http://www.w3.org/2000/svg';
export const createSvgElement = (elementName, attrs = {}) => {
	const el = document.createElementNS(svgns, elementName);
	Object.entries(attrs).forEach(([attrName, attrValue]) => {
		el.setAttributeNS(null, attrName, attrValue);
	});
	return el;
};
