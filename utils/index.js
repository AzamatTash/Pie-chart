export const getCircumference = (radius) => {
	return 2 * Math.PI * radius;
};

export const getSectorWidth = (sectorValue, circumference) => {
	return (sectorValue * circumference) / 100;
};

export const getRadiusSectors = () => {
	const values = [];
	for (let i = 5; i <= 17; i++) {
		values.push(i);
	}

	const radius = [];
	for (let i = 0; i < 8; i++) {
		const random = Math.floor(Math.random() * values.length);
		radius.push(values[random]);
	}
	return radius;
};

export const getValueSectors = () => {
	const values = [];
	for (let i = 0; i < 8; i++) {
		const value = Math.random(1);
		values.push(value);
	}

	const sumValues = values.reduce((acc, item) => {
		return (acc += item);
	}, 0);

	const valuesPercent = values.map((item) => {
		return (item * 100) / sumValues;
	});
	return valuesPercent;
};
