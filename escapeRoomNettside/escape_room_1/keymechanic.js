// hente ut key og lock fra dokumentet
let key = document.getElementById("key");
let lock = document.getElementById("hole");

// lage en funksjon hvor jeg sjekker kollisjon mellom key og lock
let collision = () => {
  // hente ut informasjonen om storrelsen av objektene
  let lockRect = lock.getBoundingClientRect();
  let keyRect = key.getBoundingClientRect();

  if (
    !(
      lockRect.top + lockRect.height < keyRect.top ||
      lockRect.top > keyRect.top + keyRect.height ||
      lockRect.left + lockRect.width < keyRect.left ||
      lockRect.left > keyRect.left + keyRect.width
    )
  ) {
    // stopper loopen og tar deg til neste siden naar kollisjon skjer
    clearInterval(counter),
      localStorage.setItem("level1passed", true);
    window.location.replace("../landing_page/index.html")
  }
};

// en loop for a sjekke kollisjon hvert halv sekund
let counter = window.setInterval(() => {
  collision(key, lock);
}, 500);
