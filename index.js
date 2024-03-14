const containerEl = document.querySelector(".container");

for (let index = 0; index < 30; index++) {
    // adding this for loop will create 30 instances of boxes on the page 
    const colorContainerEl = document.createElement("div")
    colorContainerEl.classList.add("color-container");
    containerEl.appendChild(colorContainerEl);
    //The color container here is the container that contains the 30 elements that represent the boxes


}

const colorContainerEls = document.querySelectorAll(".color-container");
// Forgot to call the function in the main script
generateColors();
// It still doesn't change the color on the screen but the loop logs out 30 different color codes

function generateColors(){

    colorContainerEl.forEach((colorContainerEl)=>{

        const newColorCode = randomColor(); // where does this newColorCode get used?
        console.log(newColorCode);
        colorContainerEl.style.backgroundColor = "#" + newColorCode;
        
       // colorContainerEl.style.backgroundColor = "#" + newColorCode;
        // console.log(newColorCode); don't log it out anymore

    }

    )
}

// What does this code do? 
// The chars variable has the numbers that will be used to create the random colorcode, any permutation 
// of these alphanumeric characters can give a color code. 
// How is this done?The length of the colorcode is determined by the variable declared below as colorCodelength, it's set to 6,
// How is it used? the random number function here in JS works by getting a random number between zero and the number the function is multiplied by

// this function returns a random string with 6 characters that is the color code that will be displayed on the page 

function randomColor(){
    const chars = "0123456789abcdef"
    const colorCodeLength = 6;
    let colorCode = ""

    for (let index = 0; index < colorCodeLength; index++) {

       const randomNum = Math.floor(Math.random() * chars.length);
       // log to see the number that is between 16 
       // the colorcode length determines which element in the chars array gets appended to the string

       console.log(randomNum); // Not needed
       // creation of the colorcode is done here. 
       colorCode += chars.substring(randomNum, randomNum + 1);
       // print out the colorcode and and the randomNum at each iteration of the loop

       console.log(colorCode, randomNum);
       
    }

    return colorCode;
}