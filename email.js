var r = document.getElementById("t")
var rr = document.getElementById("email")

rr.addEventListener("keyup", function () {
        r.innerText = "your text is :" + rr.value;
})