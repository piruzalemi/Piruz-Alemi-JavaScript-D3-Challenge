### A brief Note on Piruz Alemi Respository of JavaScript D3
####See: Dynamic Table 2 HTML for the final result
Piruz Alemi
Report on D3, JavaScript, HTML – CSS 
Date: Feb 10, 2020

Level 1: Automatic Table and Date Search 

1.	Created a basic HTML web page. (I built my own signed custom page!).

2.	Using the UFO dataset provided in the form of an array of JavaScript objects, wrote code that appends a table to my web page and then adds new rows of data for each UFO sighting dynamically utiolizing D3. See also:
https://getbootstrap.com/docs/3.3/css/#tables-striped

3.	Made sure I had a column for:
	date/time, 
	city, state, 
	country, shape
	comment
 at the very least, as in:
{
    datetime: "1/11/2010",
    city: "fairfield",
    state: "ca",
    country: "us",
    shape: "oval",
    durationMinutes: "unknown",
    comments: "Shape was black in color"
  },

4.	Used a date form in my HTML document and wrote JavaScript code that would listen for events and search through the date/time column or through State to find rows that match user’s input. In short two Search options were provided
Level 2: Multiple Search Categories (Optional)
•	Completed all of Level 1 criteria.
•	Using multiple input tags and/or select dropdowns, wrote JavaScript code so the user can set multiple filters, searched for UFO sightings using the following criteria based on the table columns:

1.	date/time
2.	city
3.	state
4.	country
5.	shape
________________________________________________________________________________________________


Steps:

•	Used D3 to convert the Bootstrap table into a striped table.
•	Use D3 to select the table body and appended a new row and cells for the new data.

For background See:

o	Bootstrap Striped Tables
o	https://giphy.com/artists
o	https://media.giphy.com/media/hDSy8w6rGHeTe/giphy.gif
o	https://www.mokafolio.de/information

Used the following Arrow, Map & Filter Functions:



 

A snapshot of the final result from a dynamic output of moving UFO sightings:

