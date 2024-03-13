const containerEl = document.querySelector(".container");

for (let index = 0; index < 30; index++) {
    // adding this for loop will create 30 instances of boxes on the page 
    const colorContainerEl = document.createElement("div")
    colorContainerEl.classList.add("color-container");
    containerEl.appendChild(colorContainerEl);
}

const colorContainerEls = document.querySelectorAll(".color-container");

console.log(colorContainerEls);

function generateColors(){
    colorContainerEl.forEach((colorContainerEl)=>{
        const newColorCode = randomColor();
        colorContainerEl.style.getElementsByClassName.backgroundColor = "#" + newColorCode;
        console.log(newColorCode); 
    }

    )
}

function randomColor(){
    const chars = "0123456789abcdef"
    const colorCodeLength = 6;
    let colorCode = ""
    for (let index = 0; index < colorCodeLength; index++) {
       const randomNum = Math.floor(Math.random() * chars.length);

       console.log(randomNum);
       colorCode += chars.substring(randomNum, randomNum + 1);
       console.log(colorCode, randomNum);
       
    }
    return colorCode;
}