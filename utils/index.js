export const getCircumference = (radius) => {
	return 2 * Math.PI * radius;
};

export const getSectorWidth = (sectorValue, circumference) => {
	return (sectorValue * circumference) / 100;
};

export const getQtySectors = () => {
	const qtySectors = [];
	for (let i = 1; i <= 8; i++) {
		qtySectors.push(i);
	}

	const random = Math.floor(Math.random() * qtySectors.length);
	return qtySectors[random];
};

export const getRadiusSectors = (n) => {
	const values = [];
	for (let i = 5; i <= 17; i++) {
		values.push(i);
	}

	const radius = [];
	for (let i = 0; i < n; i++) {
		const random = Math.floor(Math.random() * values.length);
		radius.push(values[random]);
	}
	return radius;
};

export const getValueSectors = (n) => {
	const values = [];
	for (let i = 0; i < n; i++) {
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
