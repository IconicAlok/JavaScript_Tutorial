// setTimeout() = function in JavaScript that allow you to schedule
//                the execution of funtion after an amount of time (millisecound)
//                Times ar aproximate (varies based on workload javascript runtime env.)

//                setTime(callback, delay);
//                clearTimeout(timeoutId) = can cancel a timeout before it tiggers



// setTimeout(function(){window.alert("Hello")}, 3000);
// const timeoutId = setTimeout(()=>{window.alert("Hello")}, 3000);

// clearTimeout(timeoutId) = can cancel a timeout before it tiggers;
// clearTimeout(timeoutId);

let timeoutId;
function startTimer(){
  timeoutId = setTimeout(()=>{window.alert("Hello")},3000);
  console.log("STARTED");
}


function clearTimer(){
  clearTimeout(timeoutId);
  console.log("CLEARED");
}