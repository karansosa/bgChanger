var colorBox = document.getElementById("colorBox");
var changeColorBtn = document.getElementById("changeColorBtn");

const getRandomColor = () => {
    const HaxArr = '0123456789ABCDEF';
    let color = "#";   
    for (let i = 0; i < 6; i++) {
        color += HaxArr[Math.floor(Math.random() * 16)]; 
    }
    console.log(color);
    return color; 
} 

changeColorBtn.addEventListener("click", function() {
    const newColor = getRandomColor();
    colorBox.style.backgroundColor = newColor;
});         
