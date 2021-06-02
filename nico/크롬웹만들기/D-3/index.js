const title = document.querySelector("#title");

const colors = ["#64dd17", "#3949ab", "#512da8", "#ff9100"];

const superEventHandler = {
  mouseover: function () {
    title.innerText = "The mouse is here!";
    title.style.color = colors[0];
  },
  mouseout: function () {
    title.innerText = "The mouse is gone!";
    title.style.color = colors[1];
  },
  resize: function () {
    title.innerText = "You just resize!";
    title.style.color = colors[2];
  },
  contextmenu: function () {
    title.innerText = "That was a right Click!";
    title.style.color = colors[3];
  },
};

function init() {
  title.addEventListener("mouseover", superEventHandler.mouseover);
  title.addEventListener("mouseout", superEventHandler.mouseout);
  window.addEventListener("resize", superEventHandler.resize);
  window.addEventListener("contextmenu", superEventHandler.contextmenu);
}

init();
