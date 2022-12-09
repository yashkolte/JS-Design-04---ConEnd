var arr = [
  { name: "Raju", image: "./1.jpg", status: "Stranger" },
  { name: "Shyam", image: "./2.jpg", status: "Friend" },
  { name: "Babu Bhaiya", image: "./3.jpg", status: "Request Pending" },
];

var cluster = "";

arr.forEach(function (val) {
  cluster =
    cluster +
    `
            <div id="card"> 
                    <img src="${val.image}" alt="">
                    <h1>${val.name}</h1>
                    <p>${val.status}</p>
                    <button>Send Request</button>
                    </div>
            `;
});

document.getElementById("cluster").innerHTML = cluster;

var btn = document.querySelector("button");
var fact = 0;
btn.addEventListener("click", function () {
  if (fact == 0) {
    var timer = setTimeout(() => {
      document.querySelector("p").textContent = "Friend";
      document.querySelector("p").style.color = "rgb(66, 178, 113";
      document.querySelector("button").textContent = "Cancel";
    }, 2000);
    fact = 1;
    document.querySelector("p").textContent = "Request Pending";
    document.querySelector("button").textContent = "Send Request";
  } else {
    clearTimeout(timer);
    fact = 0;
    document.querySelector("p").textContent = "Strenger";
    document.querySelector("p").style.color = "rgb(221, 66, 66)";
    document.querySelector("button").textContent = "Send Request";
    fact = 0;
  }
});
