let changeBgBut = document.getElementById("change-bg-but")
let bodyEl = document.body
let backgroundName = 3

function changeBg() {
  backgroundName++

  if (backgroundName > 4) {
    backgroundName = 1
  }

  console.log(`Changing background to ${backgroundName}. <3`)
  
  bodyEl.style.backgroundImage = `url(./images/${backgroundName}-bg)`
}
