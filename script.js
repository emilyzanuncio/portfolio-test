/*------------------- OVERLAY MENU -------------------*/
function openNav() {
  document.getElementById("navScreen").style.height = "100%";

  document.getElementById("link").style.transform = "translateY(-20px)";
  document.getElementById("mt1").style.transform = "rotate(20deg)";
  document.getElementById("mt2").style.transform = "rotate(0)";

  //document.getElementById("link").style.fontSize = "5rem";
}
function closeNav() {
  document.getElementById("navScreen").style.height = "0%";
  document.getElementById("link").style.transform = "translateY(0px)";
  document.getElementById("mt1").style.transform = "rotate(0)";
  document.getElementById("mt2").style.transform = "rotate(20deg)";
}