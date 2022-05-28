// import the data from data.js
const tableData = data;

// reference the HTML table using d3
var tbody = d3.select('tbody');

// build table function
function buildTable(data) {
    // First, clear out any existing data
    tbody.html("");
}

// function to loop through array and add data to table
// and append a row and cells for each value in the row
data.forEach((dataRow) => {
    // append a row to the table body
    let row = tbody.append("tr");
    // loop through each field in the dataRow and add
    // each value as a table cell (td)
    Object.values(dataRow).forEach((val) => {
        let cell = row.append("td");
        cell.text(val);
    });
});

// click function
function handleClick() {
    // grab the datetime value from the filter
    let date = d3.select('#datetime').property('value');
    let filteredData = tableData;
    if (date) {
        filteredData = filteredData.filter(row => row.datetime === date);
    };
    // rebuild the table using the filtered data
    // @NOTE: if no date was entered, then filteredData will
    // just be the original tableData.
    buildTable(filteredData);
};

// Attach an event to listen for the form button
d3.selectAll("filter-btn").on("click", handleClick);

// Build the table when the page loads
buildTable(tableData);
