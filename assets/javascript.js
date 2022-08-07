var time = $(".time-container");
//button test to see if script works, still need to add CDN link for moment.js 
var saveButton =$(".save-btn")

time.text(moment().format('MMMM Do YYYY, h:mm:ss a'));

saveButton.click(function(e){
    alert("Your JS script works"); 
});

var block = getElementById('event-blocks');

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