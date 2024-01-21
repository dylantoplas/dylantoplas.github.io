const myImage = document.querySelector("img");

myImage.onclick = () => {
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "images/reidelas.png") {
        myImage.setAttribute("src", "images/opai.jpeg")
    } else {
        myImage.setAttribute("src", "images/reidelas.png")
    }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1")

function setUserName() {
    const myName = prompt("Please enter your name:");
    if (!myName) {
        setUserName();
    } else {
        localStorage.setItem("name", myName);
        myHeading.textContent = `Welcome ${myName}, this is a little bit about me`;
    }
}

    if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Welcome ${storedName}, this is a little bit about me`;
  }

  myButton.onclick = () => {
    setUserName();
  };

/** 
document.getElementById("displayButton").onclick = function() {
    const image = document.getElementById("thirdImage");
    if (thirdImage.style.display === "none") {
        thirdImage.style.display = "block";
        thirdImage.src = "images/boston.jpeg";
    } else {
        thirdImage.style.display = "none";
    }
};
 **/
function toggleThirdImage() {
    const thirdImage = document.getElementById("thirdImage");
    if (thirdImage.style.display === "none") {
        thirdImage.style.display = "block";
        thirdImage.src = "images/boston.jpeg"; // Update with your image path
    } else {
        thirdImage.style.display = "none";
    }
}

// Event listener for the display button
document.getElementById("displayButton").onclick =() => {

toggleThirdImage()};