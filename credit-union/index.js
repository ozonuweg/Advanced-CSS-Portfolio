function openForm() {
    document.getElementById("ebranch-login-dropdown").style.display = "block";
}

function closeForm() {
    document.getElementById("ebranch-login-dropdown").style.display = "none";
}

var header = document.getElementById("label-id");
var btns = header.getElementsByClassName("highlight");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  });
}
