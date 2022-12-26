/* Open when someone clicks on the span element */
function openNav() {
    document.getElementById("fullNav").style.height = "100%";
    document.getElementById("bars").style.display = "none";
}
  
/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
    document.getElementById("fullNav").style.height = "0%";
    document.getElementById("bars").style.display = "block";
}