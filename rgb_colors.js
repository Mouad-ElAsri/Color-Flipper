var x = [];
for (var i = 0; i < 100; i++) {
     i = i.toString();
     x.push(i);
}

const rgb_colors = x;

const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener("click", myFunction);

function myFunction() {
     let rgbcolor = 'rgb(';
     for (let i = 0; i < 3; i++) {
          rgbcolor += rgb_colors[GetRnadomNumber()];
          if (i < 2) {
               rgbcolor += ',';
          }
     }
     rgbcolor += ')'

     document.body.style.backgroundColor = rgbcolor;
     color.textContent = rgbcolor;
};

function GetRnadomNumber() {
     return Math.floor(Math.random() * rgb_colors.length);
};