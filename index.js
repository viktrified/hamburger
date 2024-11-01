let button = document.querySelector("#change");

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

button.addEventListener("click", toggle);
