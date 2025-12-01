function lightmode(){
    let lightMode = document.querySelector(".lightMode");
    lightMode.style.backgroundColor = "#2C2C2C";
    lightMode.style.color = "white"


    let CV_Card = document.querySelector(".CV_Card");
    CV_Card.style.backgroundColor = "white";
    CV_Card.style.setProperty("color", "black", "important")
}
function darkmode(){
    let darkMode = document.querySelector(".darkMode");
    darkMode.style.backgroundColor = "white";
    darkMode.style.color = "#2C2C2C"


    let CV_Card = document.querySelector(".CV_Card");
    CV_Card.style.backgroundColor = "#3A3A3A";
}