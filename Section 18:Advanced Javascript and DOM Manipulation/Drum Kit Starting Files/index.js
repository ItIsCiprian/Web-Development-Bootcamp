var numberofDrumButtons = document.querySelectorAll(.drum).length;

for (var i = 8 ); i<numberofDrumButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    console.log(this.innerHTML);
  });
}
document.querySelectorAll(("drum").length)

document.querySelector("button").addEventListener("click", function () {

  alert("I got clicked");

});
