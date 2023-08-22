import { defaultMockData } from './data/index.js';
import { svg, createSvgElement } from './ui/index.js';
import {
	getCircumference,
	getSectorWidth,
	getRadiusSectors,
	getValueSectors,
} from './utils/index.js';

const createPieChart = (container, charData) => {
	const sectors = [];
	let totaValue = 0;

	charData.forEach((sectorData, sectorIndex) => {
		const circumference = getCircumference(sectorData.radius);
		const width = getSectorWidth(sectorData.value, circumference);

		if (sectorIndex === 0) {
			sectors.push({
				...sectorData,
				width,
				circumference,
			});
		} else {
			sectors.push({
				...sectorData,
				width,
				circumference,
				offset: -getSectorWidth(totaValue, circumference),
			});
		}

		totaValue += sectorData.value;
	});

	sectors.reverse().forEach((sector) => {
		const circle = createSvgElement('circle', {
			cx: '50%',
			cy: '50%',
			r: sector.radius,
			stroke: sector.color,
			'stroke-dasharray': `${sector.width} ${sector.circumference}`,
			'stroke-dashoffset': sector.offset,
			'stroke-width': 22,
		});

		container.prepend(circle);
	});
};

createPieChart(svg, defaultMockData);

svg.addEventListener('click', function () {
	const radius = getRadiusSectors();
	const values = getValueSectors();

	const changetData = defaultMockData.map((item, index) => {
		return {
			...item,
			radius: radius[index],
			value: values[index],
		};
	});

	const children = this.children;
	Array.from(children).forEach((item) => {
		if (item.id !== 'center') {
			item.remove();
		}
	});

	createPieChart(this, changetData);
});
