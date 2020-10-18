// Write your JavaScript code here.
// Remember to pay attention to page loading!

window.onload = (event) => {
    console.log('page is fully loaded');
    let takeoff = document.getElementById("takeoff");
    takeoff.addEventListener("click",function(){
    let confirm = window.confirm("Confirm that the shuttle is ready for takeoff.?");
    if(confirm){
    console.log("hello"+document.getElementById("flightStatus"));
    document.getElementById("flightStatus").innerHTML = "Shuttle in flight.";
    document.getElementById("shuttleBackground").style.backgroundColor = "blue";
    document.getElementById("spaceShuttleHeight").innerHTML = 10000;

    }
    });


    let landing = document.getElementById("landing");
    landing.addEventListener("click",function(){
    let confirm = window.alert("The shuttle is landing. Landing gear engaged.");

    document.getElementById("flightStatus").innerHTML = "The shuttle has landed.";
    document.getElementById("shuttleBackground").style.backgroundColor = "green";
    document.getElementById("spaceShuttleHeight").innerHTML = 0;

   }); 

   let missionAbort = document.getElementById("missionAbort");
   missionAbort.addEventListener("click",function(){
   let confirm = window.confirm("Confirm that you want to abort the mission.");
   if(confirm){
      document.getElementById("flightStatus").innerHTML = "Mission aborted.";
      document.getElementById("shuttleBackground").style.backgroundColor = "green";
      document.getElementById("spaceShuttleHeight").innerHTML = 0;
    }
    });

    let up = document.getElementById("up");
    up.addEventListener("click",function(event){
       document.getElementById("rocket").style.top = "10px";
       document.getElementById("spaceShuttleHeight").innerHTML += 10000;
       console.log("moved up");
    });
    let down = document.getElementById("down");
    down.addEventListener("click",function(event){
      document.getElementById("rocket").style.bottom = "10px";
      document.getElementById("spaceShuttleHeight").innerHTML -= 10000;
    });
    let right = document.getElementById("right");
    right.addEventListener("click",function(event){
      document.getElementById("rocket").style.right = "10px";
    });
    let left = document.getElementById("left");
    left.addEventListener("click",function(event){
      document.getElementById("rocket").style.left = "-10px";
    });
};