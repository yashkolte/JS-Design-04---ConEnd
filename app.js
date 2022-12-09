const arr = [
  { name: "Raju", image: "./1.jpg", status: "Stranger" },
  { name: "Shyam", image: "./2.jpg", status: "Stranger" },
  { name: "Babu Bhaiya", image: "./3.jpg", status: "Stranger" },
];

// `map` over the array and produce an array of
// strings which is `joined` up at the end of the iteration
const html = arr
  .map((obj) => {
    return ` 
    <div id="card"> 
    <img src="${obj.image}" alt="">
    <h3>${obj.name}</h3>
    <p>${obj.status}</p>
    <button type="button">Send Request</button>
    </div>
  `;
  })
  .join("");

// Cache the container/cluster elements
const cluster = document.querySelector("#cluster");
const container = document.querySelector(".container");

// Add the event listener to the container
container.addEventListener("click", handleClick);

// Add the HTML to the cluster element
cluster.innerHTML = html;

// When the listener catches an event...
function handleClick(e) {
  // ...first check that it's a button...
  if (e.target.matches("button")) {
    // ...destructure the previous element sibling
    // element (relabeling it as `para`), and the textContent
    // from the clicked element
    const { previousElementSibling: para, textContent } = e.target;

    // Depending on the text content value
    // choose the path to take
    switch (textContent) {
      case "Send Request": {
        para.textContent = "Request Pending";
        e.target.disabled = true;
        setTimeout(() => {
          para.textContent = "Friend";
          para.className = "friend";
          e.target.textContent = "Cancel";
          e.target.disabled = false;
        }, 2000);
        break;
      }

      case "Cancel": {
        para.textContent = "Strenger";
        para.className = "strenger";
        e.target.textContent = "Send Request";
        break;
      }
    }
  }
}
