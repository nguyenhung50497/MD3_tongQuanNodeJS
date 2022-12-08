let arr =    [
	{
		name: "Ha",
		gender: 'female',
		point: 8
	},
	{
		name: "Huy",
		gender: 'male',
		point: 9
	},
	{
		name: "Hung",
		gender: 'male',
		point: 7
	},
	{
		name: "Phuong",
		gender: 'female',
		point: 6
	},
	{
		name: "Huyen",
		gender: 'female',
		point: 10
	},
	{
		name: "Long",
		gender: 'male',
		point: 5
	},
	{
		name: "Luan",
		gender: 'male',
		point: 10
	},
	{
		name: "Linh",
		gender: 'female',
		point: 8
	}

  ];

  let sumMale = 0;
  let sumPointMale = 0;
  let sumFemale = 0;
  let sumPointFemale = 0;

  for (let value of arr) {
    if (value.gender === 'male') {
        sumMale++;
        sumPointMale += value.point;
    }
    else {
        sumFemale++;
        sumPointFemale += value.point;
    }
  }

  let averagePointMale = sumPointMale / sumMale;
  let averagePointMale = sumPointMale / sumMale;