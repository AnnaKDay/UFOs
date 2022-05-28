// import the data from data.js
const tableData = data;

// reference the HTML table using d3
var tbody = d3.select('tbody');

// build table function
function buildTable(data) {
    tbody.html("");
}

// function to loop through array and add data to table
data.forEach((dataRow) => {
    let row = tbody.append("tr");
    Object.values(dataRow).forEach((val) => {
        let cell = row.append("td");
        cell.text(val);
    })
});