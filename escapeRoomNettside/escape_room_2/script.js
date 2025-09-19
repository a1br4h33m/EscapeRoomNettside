// hente ut radcontainer
let rowscontainer = document.getElementById("rows-container");

// finne ett random tall
let randnum = Math.floor(Math.random() * 1005);

// for loop som skal lage ett 8 tall og lage en 6er naar x er randomtall, naar 6er er trykket paa gaa til neste side.
for (let x = 0; x < 1005; x++) {
  //lage rader for 8ere og 6er
  let rows = document.createElement("div");
  // legge til text 8tall
  rows.innerText = "8";
  // naar x er randomtallet, ny klasse og tekst slik at det er mulig aa vite hvor den er
  if (x == randnum) {
    rows.classList.add("number");
    rows.innerText = "6";
    // sjekke naar 6er blir trykket paa og gaar tl neste siden
    rows.addEventListener("click", () => {
      localStorage.setItem("level2passed", true);
      window.location.replace("../landing_page/");
    });
  }
  rowscontainer.appendChild(rows);
}

let counter = window.setInterval(() => {}, 500);

// tester localstorage
localStorage.getItem("array");
