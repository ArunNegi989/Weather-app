const url = 'https://accuweatherstefan-skliarovv1.p.rapidapi.com/get24HoursConditionsByLocationKey';
const options = {
	method: 'POST',
	headers: {
		'content-type': 'application/x-www-form-urlencoded',
		'X-RapidAPI-Key': 'd0912ff0b8msh226066869385c77p112dbajsnfaa2dcb65ee8',
		'X-RapidAPI-Host': 'AccuWeatherstefan-skliarovV1.p.rapidapi.com'
	},
	body: new URLSearchParams({
		locationKey: '<REQUIRED>'
	})
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}