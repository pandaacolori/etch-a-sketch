const gridContainer = document.getElementById('grid-container');

for (let i = 0; i < 16 * 16; i++) {
  const square = document.createElement('div')
  square.classList.add('square');
  gridContainer.appendChild(square); 
  const hoveroo = document.querySelectorAll(".square")
  hoveroo.forEach(div => {
    div.addEventListener("mouseover", function() {
    div.style.backgroundColor = "purple";
});
})
}


