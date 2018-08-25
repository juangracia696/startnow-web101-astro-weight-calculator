// Write your JavaScript code here!
var planets = [
    ['Pluto', 0.06],
    ['Neptune', 1.148],
    ['Uranus', 0.917],
    ['Saturn', 1.139],
    ['Jupiter', 2.640],
    ['Mars', 0.3895],
    ['Moon', 0.1655],
    ['Earth', 1],
    ['Venus', 0.9032],
    ['Mercury', 0.377],
    ['Sun', 27.9]
];

//   We're going to solve this by breaking the problem into three parts.
//   Programmers like automating things, we'll populate the HTML drop down options using code,
//   instead of having to type out all the values.
//   Create a function that does the some math and gives us the new weight.

//   Then create a function that responds when the user clicks on the button.

//   1. Populate the dropdown element with the data found in the planets array.
//   The value of each option should be the planet's name.
//   Use the following built-in methods:
// `.forEach` `document.createElement` `document.getElementById` `.appendChild`
//    apendexample = $( ".inner" ).append( "<p>Test</p>" );........
//   var p = document.createElement("p");
//     document.body.appendChild(p);

//    document.getelementbyid example = var element = document.getElementById(id);
planets.forEach(function (element) {
    var option = document.createElement('option');
    option.text = element[0];
    option.value = element[0];
    document.getElementById('planets').appendChild(option);
});

function calculateWeight(w, p) {
  var objArray = planets.find(function(item){return item[0] == p;});
  var multiplier = objArray[1];
  return w * multiplier;
}

// 2. Write the code to return the correct weight
function handleClickEvent() {
    // 3. Create a variable called userWeight and assign the value of the user's weight.
    var userWeight = $('#user-weight').val();
    // 4. Create a variable called planetName and assign the name of the selected planet from the drop down.
    var planetName = $('#planets option:selected').val();
    // 5. Create a variable called result and assign the value of the new calculated weight.
    var result = calculateWeight(userWeight, planetName);
    $('#output').text("If you were on " + planetName + ', you would weigh ' + result + 'lbs!');
    // 6. Write code to display the message shown in the screenshot.
//   $('#message').text("If you were on " + planetName + ', you would weigh ' + total);
}

$('#calculate-button').on('click', handleClickEvent);

// 7. Set the #calculate-button element's onclick method to use the handleClickEvent function.

// Bonus Challenges
// 8. Reverse the drop down order so that the sun is first.
// 9. Make it look nice using bootstrap (http://getbootstrap.com/getting-started/)



// function Calculateweight() {
//     var theWeight = document.getElementById("weight").value;
//     var thePlanet = document.getElementById("planet").selectedIndex;
//     var theGravity = planets[thePlanet].gravity;
//     var planetname = planets[thePlanet].planet;
//     var results = theWeight * theGravity;
//     var roundTotalWeight = Math.round(results);
//     document.getElementById("result").innerHTML = "If you were on " + planetname + " your weight would be " + roundTotalWeight + "lbs.";
// }
function reverse(s) {
    var o = '';
    for (var i = s.length - 1; i >= 0; i--)
        o += s[i];
    return o; 
}



