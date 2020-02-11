// -------------------------------------------------------
// Use D3 to select the table body
//  Sequence of Events Matters!  
// --------------------------------------------------------
var tbody = d3.select("tbody");

// Use D3 to select the table
var table = d3.select("table");

// Use D3 to set the table class to `table table-striped if background was white! it will show!!
table.attr("class", "table table-striped");
// -------------------------------------------------------------------------------------------------------
// Data is read from Data.js  Key word is data that we realize is a dictionary of objects
// Here the word ufoReport is immaterial. For all practical purposes we could have called it items or x
// and the program still will run just fine.                                             Alemi feb 9, 2020
// Interstingly: Even changing the input data which now  has the following structure, will simply ad more columns
// {
//     datetime: "1/12/2010",
//     city: "ceres",
//     state: "ca",
//     country: "us",
//     shape: "fireball",
//     durationMinutes: "30 seconds",
//     comments: "Fireballs seen from Ceres&#44 California"
//   },
// ------------------------------------------------------------------------------------------------------
//                   Loop map to read the data and pop the cells of each table row
//                   our input data was imported as Data.js
// ------------------------------------------------------------------------------------------------------
data.forEach((ufoReport) => {
    var row = tbody.append("tr");
    Object.entries(ufoReport).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });
// ----------------------------------------------------------
//       Takes User Inputs (see: D3grabInput.js click handler)
//       Seems repeated twice! here + imported
// ----------------------------------------------------------


// Getting a reference to the button on the page with the id property set to `click1`
var button1 = d3.select("#click1");
var button2 = d3.select("#click2");

// Getting a reference to the input element on the page with the
// HTML id property set to 'input-field'
var inputField1 = d3.select("#input-field1");
var inputField2 = d3.select("#input-field2");

// grab references to the input element and the output div
var output = d3.select(".output");

// This function is triggered when the button is clicked
function handleClick() {
  console.log("A button was clicked!");
};

// // We can also define the click handler inline
// button1.on("click", function() {
//  console.log("Hi........., a button was clicked!");
//  console.log(d3.event.target);
//  // var newText = d3.event.target.value;
//  // console.log('newText:',newText);
//  // var filteredData = data.filter(ufo => ufo.datetime === newText);
// });

// Input fields can trigger a change event when new text is entered.
inputField1.on("change", function() {
  var newText = d3.event.target.value;
  console.log('Hi Alemi Input Text was read:', newText);
  var filteredData = data.filter(ufo => ufo.datetime === newText);
  //console.log(filteredData);
  //console.log(filteredData[0]);
  //console.log(filteredData[0]['City']);

  var body = document.querySelector('tbody');
  while (body.firstChild) {
  // This will remove all children within tbody which in your case are <tr> elements
  body.removeChild(body.firstChild);
  };

  //This will add a heading or a paragraph as needed!
  d3.select("h3").text("Summary by Date:")


  // This will load a new filtered table
  filteredData.forEach((ufoReport) => {
    var row = tbody.append("tr");
    Object.entries(ufoReport).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });
});


inputField2.on("change", function() {
    var newText2 = d3.event.target.value;
    console.log('Hi Alemi Input Text was read:', newText2);
    var filteredData = data.filter(ufo => ufo.state === newText2);
    //console.log(filteredData);
    //console.log(filteredData[0]);
    //console.log(filteredData[0]['City']);
  
    var body = document.querySelector('tbody');
    while (body.firstChild) {
    // This will remove all children within tbody which in your case are <tr> elements
    body.removeChild(body.firstChild);
    };
  
    //This will add a heading or a paragraph as needed!
    d3.select("h3").text("Summary by State:")
  
  
    // This will load a new filtered table
    filteredData.forEach((ufoReport) => {
      var row = tbody.append("tr");
      Object.entries(ufoReport).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
      });
    });
  });




// --------------------------------------------------------
//             Input-text:  Function to handle input change
// -------------------------------------------------------
button1.on("click", function() {
// function handleChange(event) {
  // grab the value of the input field
  //var inputText = d3.select('#input-field').value;
  console.log('Alemi2>>>>>>:');
  console.log(data[0]['state']);

  //console.log('filteres data:',filteredData);
});
//text.on("click", handleChange);

//   ----------------------------------------------------------
//            Input-Form: Select the button & its raw content
//            Repeated again here!
//   ----------------------------------------------------------
// var button = d3.select("#button");

// button.on("click", function() {
//   // Select the input element and get the raw HTML node
//   var inputElement = d3.select("#example-form-input");
//   // Get the value property of the input element
//   var inputValue = inputElement.property("value");
//   //var filteredData = data.filter(ufo => ufo.datetime === inputValue);

//   console.log('input-form-1->>>:', inputText);
//   // Set the span tag in the h1 element to the text
//   // that was entered in the form
//   d3.select("h3>span").text(inputValue);
// });

//  ------------------------------------------------------------------------
//          Filter by Date-Time
//  ------------------------------------------------------------------------

//var filteredData = data.filter(ufo => ufo.datetime === inputText);
//var filteredData = data.filter(ufo => ufo.datetime === '1/1/2010');

// Then, select the unordered list element by class name
//var list = d3.select(".summary");

// remove any children from the list to
//list.html("");

 // append stats to the list
 //list.append("li").text(`Data: ${filteredData[0]['city']}`);