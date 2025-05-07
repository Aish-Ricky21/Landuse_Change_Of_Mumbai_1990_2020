const data = [
  { "CLASS_NAME": "HIGH DENSITY URBAN", "LOSS": 156.6801, "GAIN": 213.7284, "CHANGE": 0.439257129, "UNCHANGED": 129.8745 },
  { "CLASS_NAME": "LOW DENSITY URBAN", "LOSS": 58.5558, "GAIN": 42.7554, "CHANGE": -1.100965759, "UNCHANGED": 14.3514 },
  { "CLASS_NAME": "WETLAND", "LOSS": 23.7879, "GAIN": 14.4684, "CHANGE": -1.555271853, "UNCHANGED": 5.9922 },
  { "CLASS_NAME": "SHRUB", "LOSS": 77.0463, "GAIN": 63.6885, "CHANGE": -0.539042638, "UNCHANGED": 24.7806 },
  { "CLASS_NAME": "BARELAND", "LOSS": 29.5533, "GAIN": 32.1408, "CHANGE": 0.370203451, "UNCHANGED": 6.9894 },
  { "CLASS_NAME": "WATERBODY", "LOSS": 23.265, "GAIN": 21.1896, "CHANGE": -0.121888049, "UNCHANGED": 17.0271 },
  { "CLASS_NAME": "VEGETATION", "LOSS": 91.7199, "GAIN": 72.6372, "CHANGE": -0.394349694, "UNCHANGED": 48.3903 }
];

// Table Rendering
const tableHead = document.getElementById("table-head");
const tableBody = document.getElementById("data-table");

tableHead.innerHTML = `<tr>
  <th>Class Name</th>
  <th>Loss</th>
  <th>Gain</th>
  <th>Change Index</th>
  <th>Unchanged</th>
</tr>`;

tableBody.innerHTML = data.map(row => `
  <tr>
    <td>${row.CLASS_NAME}</td>
    <td>${row.LOSS.toFixed(2)}</td>
    <td>${row.GAIN.toFixed(2)}</td>
    <td>${row.CHANGE.toFixed(2)}</td>
    <td>${row.UNCHANGED.toFixed(2)}</td>
  </tr>
`).join("");

// Grouped Bar Chart
Plotly.newPlot('barChart', [
  {
    x: data.map(d => d.CLASS_NAME),
    y: data.map(d => d.GAIN),
    name: 'Gain',
    type: 'bar',
    marker: { color: 'green' }
  },
  {
    x: data.map(d => d.CLASS_NAME),
    y: data.map(d => d.LOSS),
    name: 'Loss',
    type: 'bar',
    marker: { color: 'red' }
  }
],);

// Pie Chart (Dropdown Controlled)
function updatePieChart(valueType) {
  const values = data.map(d => valueType === "Changed"
    ? Math.abs(d.GAIN - d.LOSS)
    : d.UNCHANGED);
  const labels = data.map(d => d.CLASS_NAME);

  Plotly.newPlot('pieChart', [{
    values: values,
    labels: labels,
    type: 'pie',
    hole: 0.4
  }],);
}

document.getElementById("valueTypeSelect").addEventListener("change", (e) => {
  updatePieChart(e.target.value);
});

// Initial Load
updatePieChart("Changed");

// Dark Mode Toggle
document.getElementById("toggleDarkMode").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});














  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  