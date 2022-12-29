const arr = [
  { name: "Raju", image: "./1.jpg", status: "Stranger" ,btn:"Add Friend" },
  { name: "Shyam", image: "./2.jpg", status: "Stranger" ,btn:"Add Friend" },
  { name: "Babu Bhaiya", image: "./3.jpg", status: "Stranger" ,btn:"Add Friend" },
]

function show(){
  var cluster = "";
  arr.forEach(function(val , index){
  cluster += `<div id="card">
  <img src="${val.image}" alt="">
  <h3>${val.name}</h3>
  <p id="${val.status}">${val.status}</p>
  <button id="${index}" type="button">${val.btn}</button>
  </div>`;
})
document.getElementById("cards").innerHTML = cluster;
};
show();

var card = document.getElementById("cards")
var a =0;
card.addEventListener("click", function(dets){
  if(a===0) {

    arr[dets.target.id].status = "Requested",
    arr[dets.target.id].btn = "Cancel Request",
    show();
    
    setTimeout(() => {
      
      arr[dets.target.id].status = "Friend",
      arr[dets.target.id].btn = "Remove Friend",
      show();
      
    }, "3000")
    // arr[dets.target.id].index = "Remove";
    // show();
    a=1;
  }
  else {
    arr[dets.target.id].status = "Stranger";
    arr[dets.target.id].btn = "Add Friend",
    show();
    a=0;
  }
});
