// Where we keep the code that builds the HTML table & fills it with data from data.js

// import the data from data.js
const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select("tbody");
    // telling JavaScript to look for the <tbody> tag in the HTML 
    // D3 is JavaScript library for highly dynamic graphics 

// Build a table with the data imported from data.js- inserting a function inside another function
// 1) tell JavaScript to use an empty string when creating the table (clearing the existing data)
// 2) Create a forEach loop through each row of the data we iterate through the data array
// 3) Inside the forEach loop, cretae a variable to add each row to the table body

function buildTable(data) {
    tbody.html("");
    data.forEach((dataRow) => {
    let row = tbody.append("tr");
    Object.values(dataRow).forEach((val)=> {
        let cell = row.append("td");
        cell.text(val);
        }
    );
});
}

function handleClick() {
    // lookf or #datetime id in HTML and grab that value & store it as "date"
    let date = d3.select("#datetime").property("value");
    // setting a default filter - without a date entered the original data will be returned 
    let filteredData = tableData;
    // Check for a date
    if (date) {
        filteredData = filteredData.filter(row => row.datetime === date);
    };
    buildTable(filteredData);
}
// Attach an event to listen for the form button Q: do we have "click" under filter-btn tag?
d3.selectAll("#filter-btn").on("click", handleClick);

// Build the table when the page loads
buildTable(tableData); 