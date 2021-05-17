// from data.js
var tableData = data;

// button
var button=d3.select('#filter-btn');

// form
var form=d3.select('#form');

// reference the table body
var tbody=d3.select('tbody');

// event handlers
button.on('click', mulder);
form.on('submit', mulder);

// event handler function
function mulder() {
	// prevent refresh
	d3.event.preventDefault();
	// input element
	var inputElement=d3.select('#datetime');
	// property value
	var inputValue=inputElement.property('value');
	// empty table object
	tbody.html('');
	// assign filtered data to variable
	var results=tableData.filter(ufo=>ufo.datetime === inputValue);
	// push to html table
	results.forEach((ufo)=> {
		var row=tbody.append('tr');
		Object.entries(ufo).forEach(([key, value])=> {
			var cell=row.append('td');
			cell.text(value);
		});
	});
};