// grab references to the input element and the output div
var text = d3.select("#text");
var output = d3.select(".output");
//   ---------------------------------------------------------------------
//                     Function to handle input change
//   ---------------------------------------------------------------------
function handleChange(event) {
    // grab the value of the input field
    var value = d3.event.target.value;
    // clear the existing output
    output.html("");
}
text.on("change", handleChange);


//   ---------------------------------------------------------------------
//                        Select the button & its raw content
//   ---------------------------------------------------------------------
var button = d3.select("#button");

button.on("click", function() {

  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#example-form-input");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  console.log(inputValue);

  // Set the span tag in the h1 element to the text
  // that was entered in the form
  d3.select("h1>span").text(inputValue);
});








//   ---------------------------------------------------------------------
//   Counter function is used to find the length of the loop
//   ---------------------------------------------------------------------
// function counter(text) {

//   // convert text to lowercase characters (chars)
//   var chars = text
//     .toLowerCase()
//     .replace(/\s+/g, "")
//     .split("");

//   var counts = {};
//   chars.forEach((char) => {
//     if (char in counts) {
//       counts[char] += 1;
//     }
//     else {
//       counts[char] = 1;
//     }
//   });

//   return counts;
// }


//   var frequencyCounts = counter(value);
//   Object.entries(frequencyCounts).forEach(([key, value]) => {
//     var li = output.append("li").text(`${key}: ${value}`);
//   });


