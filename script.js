// Math.random() is a inbuilt function of object Math.It gives us random number between 0 to 1 but not including 1. 
// Math.floor() gives us largest integer less than or equal to value .
// rgb color code -

const rgbBtn= document.querySelector('.b1');
const h2 = document.querySelector('h2');

function randomNum(num){
   return Math.floor(Math.random() * num) + 1;
}

function randmColor(){
    const bgColor =  `rgb(${randomNum(255)},${randomNum(255)},${randomNum(255)})`;
    document.body.style.backgroundColor =bgColor;
    h2.textContent = `${(bgColor)}`;
}
rgbBtn.addEventListener('click',randmColor);

//hex color code -
const hexBtn = document.querySelector('.b2');
const head2 = document.querySelector('.h2');
const hexValues = [1,2,3,4,5,6,7,8,9,0,'A','B','C','D','E','F'];

function hexcolor(){
  let hex ='#';
   for(let i=0; i<6 ; i++){
       const index = Math.floor(Math.random()* hexValues.length);
       hex += hexValues[index];
   }
   document.body.style.backgroundColor = hex;
   head2.textContent = `${hex}`;
}
hexBtn.addEventListener('click',hexcolor);