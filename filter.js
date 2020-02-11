// An array of objects
var data = [{
  datetime: "1/1/2010",
  city: "benton",
  state: "ar",
  country: "us",
  shape: "circle",
  durationMinutes: "5 mins.",
  comments: "4 bright green circles high in the sky going in circles then one bright green light at my front door.",
  playerOnTeam:true
},
{
  datetime: "1/1/2010",
  city: "bonita",
  state: "ca",
  country: "us",
  shape: "light",
  durationMinutes: "13 minutes",
  comments: "Three bright red lights witnessed floating stationary over San Diego New Years Day 2010",
  playerOnTeam:false
},
{
  datetime: "1/1/2010",
  city: "el cajon",
  state: "ca",
  country: "us",
  shape: "triangle",
  durationMinutes: "6 minutes",
  comments: "On New Years Eve I went outside to hear the celebration and fireworks in my neighbor hood. And noticed 3 red lights above my house and",
  playerOnTeam:true
},
{
  datetime: "1/1/2010",
  city: "el cajon",
  state: "ca",
  country: "us",
  shape: "triangle",
  durationMinutes: "12 minutes",
  comments: "3 Red objects hovering over El Cajon CA",
  playerOnTeam:false
}
];

// Create a custom function to return ufo who met the criteria
function madeCut(player) {
  // return player.madeTeam == true;
  // A more concise way to express a boolean conditional
  return player.madeTeam;
}

// Call the custom function with filter()
var playersOnTeam = data.filter(madeCut);

// Display the results
console.log(playersOnTeam);

// Determine how many players made the cut, and how many did not
var numberOfPlayers = playersOnTeam.length;
var numberOfCutPlayers = data.length - numberOfPlayers;

// Display the results
console.log(`${numberOfPlayers} UFOs on planet!!!!.`);
console.log(`${numberOfCutPlayers} UFOs were cut.`);
