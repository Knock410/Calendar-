
var time = $(".timeContainer");

var saveButton =$(".saveBtn")

var textAreas = document.querySelectorAll(".backgroundGizmo");

time.text(moment().format('MMMM Do YYYY, h:mm:ss a'));

var currentTime = parseInt(moment().format('H'));
var hourPast = hourPast < currentTime; 
var hourNow = currentTime;
var hourFuture = hourFuture < currentTime;
console.log(currentTime);

//How to console log text 
console.log(hourNow.text);
console.log(time.text); 
  function backgroundColorChange(){
    if (hourNow == currentTime){
        document.getElementsByClassName("backgroundGizmo").style.backgroundColor = "#c00000";
    }else if (hourNow < currentTime){
        document.getElementsByClassName("backgroundGizmo").style.backgroundColor = "#6161fb";
    }else 
    {
        document.getElementsByClassName("backgroundGizmo").style.backgroundColor = "#90ee90";
    }
}
//get value from local storage. ThisAreaH.textconent Localstorage.getitem i
for(var i=0; i < textAreas.length; i++ ){
    var thisTextAreaH = textAreas[i]
    var thisHour = parseInt(thisTextAreaH.dataset.hour)
    console.log(thisHour);
     if(thisHour == currentTime){
      thisTextAreaH.classList.add("present");  
     } else if (thisHour < currentTime){
       
        thisTextAreaH.classList.add("past"); 
     } else {
        thisTextAreaH.classList.add("future"); 
     }
}


// textAreas.each(function(i) {
//  console.log($(this));
//     var textArea = $(this)
//     var thisBlockHour = textArea.getAttribute("data-hour");
//    console.log(thisBlockHour);
//    console.log(typeof(thisBlockHour));
// } );



saveButton.each(function(i) {
    $(this).on("click", function() {
        let thisHourText = $(this).prev();
        console.log(thisHourText);
        localStorage.setItem(`Event #${i+1}`, thisHourText.val());
    });
});

//Find a way to check a if localStorage can be read on the page(truthy/falsey).Use If loop to loop through Event storage to retreieve the data.Have events displayed through whatever method to change the html 

$('#hour-9 .description').val(localStorage.getItem(`Event #1`));
localStorage.getItem(`Event #${i+1}`);
localStorage.getItem(`Event #${i+1}`);
localStorage.getItem(`Event #${i+1}`);
localStorage.getItem(`Event #${i+1}`);
localStorage.getItem(`Event #${i+1}`);
localStorage.getItem(`Event #${i+1}`);
localStorage.getItem(`Event #${i+1}`);

console.log(localStorage.getItem(`Event #1`));
//
// saveButton.click(function(e){
//     alert("Your JS script works"); 
// });


var block =document.getElementById('event-blocks');

console.log(block);
//  var loadTasks = function() {
//     tasks = JSON.parse(localStorage.getItem("tasks"));
  
//     // if nothing in localStorage, create a new object to track all task status arrays
//     if (!tasks) {
//       tasks = {
//         toDo: [],
//         inProgress: [],
//         inReview: [],
//         done: []
//       };
//     }
