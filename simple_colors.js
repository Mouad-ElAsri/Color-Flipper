const colors = ["red", "orange", "yellow", "green", "cyan", "blue", "magenta", "purple", "white", "black", "gray", "lightGrey", "silver", "pink", "maroon", "brown", "beige", "tan", "peach", "lime", "olive", "turquoise", "teal", "darkblue", "indigo", "violet"];

const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener("click", myFunction);

function myFunction() {
     const randNumber = GetRnadomNumber();

     document.body.style.backgroundColor = colors[randNumber];
     color.textContent = colors[randNumber];
};

function GetRnadomNumber() {
     return Math.floor(Math.random() * colors.length);
};