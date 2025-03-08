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
const btn = document.querySelector(".resetbtn");
    btn.addEventListener("click", () => {
      const userInput = prompt("How large should the new grid be? (max 16)");
      const numberInput = parseFloat(userInput);
        if (isNaN(numberInput)) {
        alert("So close!! That is a shape, not a number <3")
        console.log("That's not a valid number.");
  }     
        else if (numberInput >= 17) {
        alert("That number is too damn high!");
        console.log("That number is too damn high!");
        }

        else {
        console.log("User entered the number:", numberInput);
        document.querySelectorAll('.square').forEach(e => e.remove());
        for (let i = 0; i < numberInput * numberInput; i++) {
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

  }

  })
