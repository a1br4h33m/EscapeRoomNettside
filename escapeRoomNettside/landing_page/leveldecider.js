let baner = document.getElementsByClassName("bane");
 
for (let x = 0; x < baner.length; x++) {
    baner[x].addEventListener("click", () => {
        console.log("click", x)
        if (localStorage.getItem(`level${x + 1}passed`) == "true") {
            window.location.replace(`../escape_room_${x + 1}/room${x + 1}.html`)
        } else if (x = 3 && localStorage.getItem("level3passed") == "true") {
            window.location.replace("../escape_room_4/room4.html")
        }
    })
}