let text = document.getElementById("text");

let button = document.getElementsByClassName("change");

let button1 = document.querySelector("#change");

let sideBar = document.getElementById("sidebar");

let toggleMode = true;

const toggle = () => {
  if (toggleMode) {
    sideBar.style.display = "none";
    toggleMode = false;
  } else {
    sideBar.style.display = "block";
    toggleMode = true;
  }
};

button1.addEventListener("click", toggle);
