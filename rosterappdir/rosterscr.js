//version 1.1
//this script collects information from a local json-server hosting the employee.json file created by the app.json CLI.  This file collects the data, the processes that datat with a for loop that takes advantage of the 
//template capability to build a dynamic web page capable of producing as much data as is provided by the employee.json file.  It can produce pages of 1 to hundreds of employess.  No discrete limits are set.

var finalKey = "http://localhost:3000/employee";
	fetch(finalKey)
	.then(function(resp) { return resp.json() }) 
	.then(function(data) {
		processEmpData(data);
	})

function processEmpData(d) {
	var arr = d;
		
var template = document.querySelector('#tmplt');
for (var i = 0; i < arr.length; i++) {
	var employee = arr[i];
	var clone = template.content.cloneNode(true);
	var h2 = clone.querySelectorAll('h2');
	h2[0].className = "employeename";
	h2[0].innerHTML = employee.name;
	var p = clone.querySelectorAll('p');
	p[0].innerHTML = "Role: "+employee.role+"<br>Id: "+employee.id + "<br>Email: " + employee.email + "<br>Office Number: "  + employee.office + "<br>School: " + employee.college +"<br>GitHub: " + employee.github; 
	template.parentNode.appendChild(clone);
}
}