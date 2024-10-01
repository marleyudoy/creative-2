

// selector 
const hamBtn = document.getElementById("hamBtn")
const hamMenu = document.getElementById("hamMenu")
const hideHamMenu = document.getElementById("hideHamMenu")
// addEventListener 
hamBtn.addEventListener("click",showhamMenu)
hideHamMenu.addEventListener("click",hideHamBurgerMenu)
// addEventListener Function 
function showhamMenu () {
  hamMenu.classList.toggle("-translate-x-[1000px]")
}
function hideHamBurgerMenu (){
  hamMenu.classList.toggle("-translate-x-[1000px]")
}

