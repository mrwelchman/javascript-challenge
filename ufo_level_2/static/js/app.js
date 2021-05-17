// from data.js
var tableData = data;

// button
var button=d3.select('#filter-btn');

// form
var form=d3.select('#form');

// table body
var tbody=d3.select('tbody');

// event handlers
button.on('click', mulder);
form.on('submit', mulder);

// event handler function
function mulder() {
	// prevent refresh
	d3.event.preventDefault();
	// empty table object
	d3.select('tbody').html('');	
	// select elements
	var inputElement1=d3.select('#datetime');
	var inputElement2=d3.select('#city');
	var inputElement3=d3.select('#state');
	var inputElement4=d3.select('#country');
	var inputElement5=d3.select('#shape');
	// value properties
	var inputValue1=inputElement1.property('value');
	var inputValue2=inputElement2.property('value');
	var inputValue3=inputElement3.property('value');
	var inputValue4=inputElement4.property('value');
	var inputValue5=inputElement5.property('value');
	// construct array
	var inputArray= [{key: 'datetime', value: inputValue1},
		{key: 'city', valuelue: inputValue2},
		{key: 'state', value: inputValue3},
		{key: 'country', value: inputValue4},
		{key: 'shape', value: inputValue5}]
	// console log
	console.log(inputArray);
	console.log(tableData);
	// filter inputs
	var results=[];
	
	for (var i=0; i<tableData.length;i++) {
		inputDate=inputValue1.toLowerCase()
		inputCity=inputValue2.toLowerCase()
		inputState=inputValue3.toLowerCase()
		inputCountry=inputValue4.toLowerCase()
		inputShape=inputValue5.toLowerCase()
		var datetime=tableData[i].datetime.toLowerCase()
		var city=tableData[i].city.toLowerCase()
		var state=tableData[i].state.toLowerCase()
		var country=tableData[i].country.toLowerCase()
		var shape=tableData[i].shape.toLowerCase()

		if (datetime.includes(inputDate)&&city.includes(inputCity)&&state.includes(inputState)&&country.includes(inputCountry)&&shape.includes(inputShape)) {
			results.push(tableData[i])
		};
	};
	//console log
	console.log(results);
	// push to html table
	results.forEach((ufo)=> {
		var row=tbody.append('tr');
		Object.entries(ufo).forEach(([key, value])=> {
			var cell=row.append('td');
			cell.text(value);
		});
	});
};