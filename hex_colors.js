const hex_colors = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener("click", myFunction)

function myFunction() {
     let hexColor = "#";
     for (let i = 0; i < 6; i++) {
          hexColor += hex_colors[GetRnadomNumber()];
     }

     document.body.style.backgroundColor = hexcolor;
     color.textContent = hexcolor;
};

function GetRnadomNumber() {
     return Math.floor(Math.random() * hex_colors.length);
};