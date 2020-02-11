function wordCount(myString) {
  // Convert string to an array of words
  var stringArray = myString.split(" ");
  console.log('stringArray>>>>>>>>>>:',stringArray)

  // An object to hold word frequency
  var wordFrequency = {};

  // Iterate through the array
  for (var i = 0; i < stringArray.length; i++) {
    var currentWord = stringArray[i];
    // If the word has been seen before...
    if (currentWord in wordFrequency) {
      // Add one to the counter
      wordFrequency[currentWord] += 1;
    }
    else {
      // Set the counter at 1
      console.log('.  .  .  .',wordFrequency);
      console.log('>>>>>>>>>>>>....<<<<<<<',currentWord);
      wordFrequency[currentWord] = 1;
    }
  }
  console.log('wordFreq- - - - - >',wordFrequency);
  return wordFrequency;
}

wordCount("I yam what I yam and always will be what I yam");
console.log(theStagesOfJS);
users.forEach((user) => {
    console.log(user);
  
    // Get the entries for each object in the array
    Object.entries(user).forEach(([key, value]) => {
      // Log the key and value
      console.log(`Key: ${key} and Value ${value}`);
    });
  });



  function madeCut(player) {
    // return player.madeTeam == true;
    // A more concise way to express a boolean conditional
    if (player.name="AJ");
    return player.madeTeam;
  }
  













